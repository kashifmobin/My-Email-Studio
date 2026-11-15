---
name: personalize
description: Write a version of each campaign email for every lead group in leads/leads.csv. Use when a campaign's emails are final and you want one copy per group.
argument-hint: "[campaign folder]"
context: fork
allowed-tools: Read, Glob, Grep, Write
---

# Personalize a campaign by lead group

Write one version of every campaign email for each lead group. Only write drafts. Never send anything.

## Step 1: Check the campaign folder

The campaign folder is the argument: `$ARGUMENTS`

If it is empty, stop. Do not write any files. Use Glob to list the folders inside `campaigns/`, show them to the user, and ask which one to use.

If a folder is given but `<campaign folder>/emails/` does not exist or has no `.md` files, stop and say so.

## Step 2: Read what you need

- `brand/voice.md`: follow the voice, the words to use, the words to avoid and the claims to never make.
- `.claude/rules/emails.md`: every file must follow these rules.
- `leads/leads.csv`: the groups are in the `group` column. They are `tea-curious`, `gift-buyers` and `daily-drinkers`. Use only these groups. Do not copy names, emails or any other lead details into the emails.
- Every `.md` file in `<campaign folder>/emails/`.

Do not read or write files inside any existing `groups/` folder in the campaign, except to overwrite a file you are replacing.

## Step 3: Write the versions

For each email, and for each of the three groups, write a new file at:

`<campaign folder>/groups/<group>/emails/<same file name>`

Each version must keep the following exactly as in the original:

- The `Subject:` line
- The `Preview:` line
- The greeting with `{{first_name}}`
- The one main link, with the same button text and web address
- The sign-off
- The two-line footer, as plain text with nothing after it

Each version changes only two things:

1. **The opening line.** Replace the first sentence of the body so it speaks to the group.
2. **One example.** Change one example in the body so it fits the group. Keep the rest of the text the same.

### What each group needs

- **tea-curious:** new to tea or still finding what they like. Be gentle and simple. A good example is a first cup or an easy steeping note.
- **gift-buyers:** buying for someone else. Talk about giving a cosy, calm moment to a friend or family member.
- **daily-drinkers:** already drink tea every day. Talk about their daily cup and trying something new beside it.

## Rules to follow

- Write in plain English with short sentences.
- Keep the voice warm, comfortable and relieving.
- Never use the words "quick", "hurry up" or "too late". Never rush or push the reader.
- Never promise a medical benefit. Never say an expert backs the tea. Never call it "the best tea".
- Keep the subject at 50 characters or fewer and the preview at 90 or fewer. Because these lines stay the same as the original, do not edit them.
- Do not use code blocks anywhere in the files.
- Use the name "The Steep Club" every time.
- Do not change the original files in `emails/`.

## Step 4: Reply with a short summary only

When you finish, reply with only this:

- How many files you wrote.
- One example opening line for each group.

Do not paste the full emails. Do not add any other notes.
