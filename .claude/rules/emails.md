---
paths:
  - "campaigns/**/emails/*.md"
---

# Email file rules

Every email file must follow these rules.

## Top of the file

- Start with a line that reads `Subject: ...`. The subject must be 50 characters or fewer.
- The next line must read `Preview: ...`. The preview must be 90 characters or fewer.

## Greeting

- Greet the reader with `{{first_name}}`. For example: `Hello {{first_name}},`

## Link

- Include exactly one main link.
- Write it like this: `[Button text](https://kettlebird.example/steep-club)`
- Change "Button text" to fit the email. Keep the web address the same.

## Ending

End the email in this order:

1. Our sign-off from brand/voice.md:

   Warmly, from us to you,
   The Kettlebird Team

2. This two-line footer. Write it as plain text. Do not put it in a code block:

   You're getting this because you joined the Kettlebird Tea waitlist.
   Kettlebird Tea, {{company_address}} · Unsubscribe: {{unsubscribe_url}}

Nothing comes after the footer.
