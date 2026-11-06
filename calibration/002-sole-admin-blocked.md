# Calibration pair 002 — sole admin can't delete account

**ID:** `002-sole-admin-blocked`
**Scope:** channel: product UI · audience: team admins · purpose: error modal when an action is blocked
**Status:** active
**Reference revision:** uncommitted setup
**Reusable-direction approval:** 2026-11-06 · Lillian, setup participant · scope above

**Baseline method:** informal. No clean-session agent baseline was run. "Original" is the team's earlier draft. "With the system" is the setup participant's own approved version, not an agent rewrite.

## Original

> **You're the only admin of Acme Studio**
>
> Acme Studio has 4 other members. Make one of them an admin, or delete the team, before you delete your account.
>
> [Go to team settings]

## With the system

> **Manage your team before you leave Bolt**
>
> You're the admin of {Acme Studio}. To delete your Bolt account, first go to team settings and assign a new admin or delete your team.
>
> [Go to settings]

## What drove the difference

| Change | Rule | File |
|---|---|---|
| Headline names what's blocked (leaving Bolt), not just the condition | In errors, lead with what's blocked | `../references/voice.md`, `../references/channels.md` |
| Body gives the reason, then the steps | Blocked → why → what to do | `../references/channels.md` |
| No blame; the reader isn't told they did something wrong | Never blame the reader (**must**) | `../references/channels.md` |
| Member count dropped | Say only what the reader needs to decide | `../references/voice.md` |

## What this teaches

When something is blocked, the headline names what the reader can't do yet, and the body tells them how to unblock it.

*"Go to settings" is the participant's approved choice for this screen.*
