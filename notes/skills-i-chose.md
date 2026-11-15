# Skills I chose

Searched skills.sh on 2026-11-14 for "email marketing", "email sequence", "campaign plan" and "resend". Star counts are for the GitHub repository that publishes the skill, checked the same day. Nothing is installed yet.

## Use these

**1. anthropics/knowledge-work-plugins (for writing campaigns)**
- Publisher: Anthropic, the official account. The repository has about 35,700 stars and was updated yesterday.
- Relevant skills: `campaign-plan` (3.4K installs) and `email-sequence` (3.1K installs).
- Why: it is the only official, well-maintained source that covers both planning a campaign and writing the emails in it. The authors are accountable, and it is actively kept up to date.
- Runner-up: coreyhaines31/marketingskills `email-sequence` (55K installs, about 60,000 stars). It is popular and respected, but it is a single person's work, not an official publisher.

**2. resend/resend-skills (for sending email)**
- Publisher: Resend, the company that makes the sending service. The `resend` skill has 24.7K installs.
- Why: Resend wrote it for its own API, so it should match how the product really works. Other people's Resend skills may be out of date or wrong.
- Caveat: the repository only has about 212 stars. That is normal for a vendor's own tooling, because the official publisher is what counts here, not the star count.
- Worth a look later: `resend/email-best-practices` (146 stars, 8.3K installs) for deliverability advice, and `resend/react-email` (about 19,900 stars, 10K installs, updated daily) for building email templates.
- Duplicate copies: `resend/resend-skills` also contains `email-best-practices` and `react-email` folders. I compared the `SKILL.md` files (checked 2026-11-14) and they are byte-for-byte identical to the standalone repos, so the content is the same. Install the standalone `resend/email-best-practices` and `resend/react-email` ones: they are the versions skills.sh lists and counts installs for, and the `react-email` repo is the better maintained of the two. The `resend/resend-skills@resend` skill is still the one to use for sending.

## Avoid these

**1. caffeinelabs/skills `extension-email-marketing`**
- It shows 31.6K installs, which is the top result for "email marketing", yet its repository has only 2 stars. A skill with that many real users would normally have far more stars, so the install count looks inflated or misleading.
- It comes from an unknown publisher with no track record. I would not trust it until someone had read what it actually does.

**2. gocallum/nextjs16-agent-skills `resend-integration-skills`**
- It looks like the official Resend skill, but it is not. It is a hobbyist's personal collection with 23 stars and no updates since January 2026.
- Resend's own `resend/resend-skills` already covers this job, so there is no reason to take the unofficial, older copy.

## How I decided

Check these three things before installing any skill:

1. **Who publishes it.** Is it the company that owns the product (anthropics, resend) or a known maintainer? Be wary of lookalike names that imitate an official one.
2. **How healthy the GitHub repository is.** Check the stars and when it was last updated. Many stars and recent updates are good. Very few stars, or nothing new for months, is a warning. Install counts on skills.sh are easy to inflate, so don't trust them alone.
3. **What the skill actually tells the AI to do.** Open the skill's instructions (`SKILL.md`) and read them first. Skills can run commands and call services, so make sure it does only what you expect and asks for no secrets or unrelated access.
