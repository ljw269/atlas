# Calibration pair 003 — delete account confirmation

**ID:** `003-delete-account-confirm`
**Scope:** channel: product UI · audience: Bolt account owners · purpose: confirmation for a destructive, irreversible action
**Status:** active
**Reference revision:** uncommitted setup
**Reusable-direction approval:** 2026-11-06 · Lillian, setup participant · scope above

**Baseline method:** informal. No clean-session agent baseline was run. "Original" is the team's earlier draft. "With the system" is the setup participant's own approved version, not an agent rewrite. The example email address is redacted.

## Original

> **Delete account?**
>
> This permanently deletes your account. This can't be undone.
>
> Will be permanently deleted
> - Your projects, chats, and files
> - 2 live sites will be unpublished (jordan-portfolio.bolt.host and 1 more)
>
> Type your email to confirm deletion: "jordan@example.com"
> [Enter your email]
>
> [Delete permanently]

## With the system

> **Delete your account?**
>
> If you continue, your Bolt account will be permanently deleted. You won't be able to access your projects or agent chats, and any published sites will go offline. This action can't be undone.
>
> To delete your account, confirm your email address.
> [jordan@example.com]
>
> [Yes, delete account]

## What drove the difference

| Change | Rule | File |
|---|---|---|
| Opens with "If you continue, …" | "If you [action], this will [result]" | `../references/voice.md`, `../references/channels.md` |
| Boxed list replaced by plain sentences about what the reader loses | Say what the person will lose in everyday words | `../references/channels.md` |
| "unpublished" → "will go offline" | Plain language, never engineering words (**must**) | `../references/voice.md` |
| "Delete permanently" → "Yes, delete account" | Confirm button repeats the action | `../references/channels.md` |

## What this teaches

Before an irreversible action, tell people in plain words what they'll lose, then make the button repeat exactly what they're agreeing to.

*Mentioning only projects and agent chats (not files) is the participant's approved wording for this screen.*
