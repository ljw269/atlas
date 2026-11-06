# Calibration pair 001 — AI features first-use card

**ID:** `001-ai-features-first-use`
**Scope:** channel: product UI · audience: Bolt project owners · purpose: first-time opt-in card for a feature that uses tokens
**Status:** active
**Reference revision:** uncommitted setup
**Reusable-direction approval:** 2026-11-06 · Lillian, setup participant · scope above

**Baseline method:** informal. No clean-session agent baseline was run. "Original" is the team's earlier draft. "With the system" is the setup participant's own approved version, not an agent rewrite.

## Original

> **Use Bolt AI** (Usage 1/2)
>
> Your Bolt plan includes AI usage to build powerful features. Manage it from [AI usage] settings.
>
> Included with your Teams plan · $0.00 of $5 used · [usage bar]
>
> [Skip] [Continue]

## With the system

> **Add AI features to your project?** 1 of 2
>
> AI features require extra token usage. You get $5 to start. You can add usage, set limits, and more in [AI feature settings].
>
> [Never mind] [Yes, continue]

## What drove the difference

| Change | Rule | File |
|---|---|---|
| Headline leads with the benefit as a real question | Set expectations before someone starts something new | `../references/voice.md` |
| Cost stated plainly; "powerful" removed | First-time cards state the cost; no hype | `../references/channels.md`, `../references/voice.md` |
| Usage bar removed | No meters or status before there's usage | `../references/channels.md` |
| "(Usage 1/2)" → "1 of 2" | Plain step counts | `../references/channels.md` |
| "Skip/Continue" → "Never mind/Yes, continue" | Buttons answer the headline | `../references/channels.md` |
| "$5" kept as given | Writing rules change language, never product facts | `../AGENTS.md` |

## What this teaches

Before someone opts in, tell them what they get and what it costs, then let the buttons answer the question you asked.

*The "$5" amount is a product fact from this screen, not a writing rule.*
