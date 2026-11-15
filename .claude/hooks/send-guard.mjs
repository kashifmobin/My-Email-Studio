// PreToolUse hook for the Resend MCP tools.
// Reads the tool call as JSON on stdin.
// Exit 0 = allow. Exit 2 = block (the reason goes to stderr).

const ALWAYS_BLOCKED = [
  "send-broadcast",
  "create-automation",
  "send-inbox-draft",
  "send-new-inbox-email",
];
const CHECKED = ["send-email", "send-batch-emails"];

function block(reason) {
  process.stderr.write(`Blocked by send-guard: ${reason}\n`);
  process.exit(2);
}

let raw = "";
for await (const chunk of process.stdin) raw += chunk;

let call;
try {
  call = JSON.parse(raw);
} catch {
  block("could not read the tool call, so it was stopped to be safe.");
}

const toolName = String(call?.tool_name ?? "").replace(/^mcp__resend__/, "");
const input = call?.tool_input ?? {};

if (ALWAYS_BLOCKED.includes(toolName)) {
  block(`${toolName} can reach whole lists of people, so it is never allowed.`);
}

if (!CHECKED.includes(toolName)) process.exit(0);

const myEmail = (process.env.MY_EMAIL ?? "").trim().toLowerCase();

// Turn "Name <a@b.com>" or "a@b.com, c@d.com" into a list of plain addresses.
function addressesIn(value) {
  if (value == null) return [];
  if (Array.isArray(value)) return value.flatMap(addressesIn);
  if (typeof value !== "string") return [String(value)];
  return value
    .split(/[,;]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const m = part.match(/<([^<>]*)>\s*$/);
      return (m ? m[1] : part).trim();
    });
}

// Collect every to / cc / bcc anywhere in the input (batch calls nest them).
function collect(node, found = []) {
  if (Array.isArray(node)) {
    node.forEach((n) => collect(n, found));
  } else if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) {
      if (["to", "cc", "bcc"].includes(key.toLowerCase())) {
        found.push(...addressesIn(value));
      } else {
        collect(value, found);
      }
    }
  }
  return found;
}

const addresses = collect(input);

if (addresses.length === 0) {
  block("no recipient addresses were found, so the call was stopped to be safe.");
}

for (const address of addresses) {
  const a = address.toLowerCase();
  const validShape = /^[^\s@<>]+@[^\s@<>]+$/.test(a);
  const allowed =
    validShape && (a.endsWith("@resend.dev") || (myEmail !== "" && a === myEmail));
  if (!allowed) {
    block(
      `"${address}" is not allowed. Only @resend.dev addresses and my own email can receive mail.`
    );
  }
}

process.exit(0);
