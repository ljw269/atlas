# Calibration pair 005 — landing hero, proof, and CTAs

**ID:** `005-landing-hero-and-proof`
**Scope:** channel: marketing · audience: business operators, including first-time builders · purpose: landing page that gets someone to start building
**Status:** active
**Reference revision:** uncommitted draft (based on `fa96b34`)
**Reusable-direction approval:** Approved by Lillian on 2026-11-09 as reusable direction for the scope above.

**Baseline method:** informal. No clean-session agent baseline was run. "Original" is the team's earlier homepage. "With the system" is Lillian's own approved rewrite from her Figma content pass, not an agent rewrite. Both are excerpts: only the contrasts Lillian named are shown.

## Original

> **Describe it. Bolt builds it.**
>
> …for people who have never built before
>
> Use cases
>
> 4.9/5 (no source)
>
> Best-in-class security

*Also in the original: prompt chips too specific for most new users, How it works headers that changed when someone selected a different segment, a "New this month" section that added scroll without helping anyone start, a customer-facing CTA built around Mason's name, and a closing CTA that didn't match the hero's.*

## With the system

> **Describe an idea. Bolt builds it.**
>
> Create a website or app in minutes. No coding necessary.
>
> [Start building]
>
> …for first-time builders
>
> Examples
>
> - Create a client dashboard for my design studio that includes files and messaging
> - Build an online store for my ceramics studio that tracks inventory automatically
> - My dog walking business needs a booking site that takes customer deposits
>
> **How it works:** Watch Bolt build · No backend configuration · Secure by design · Publish in one click
>
> **Enterprise:**
> - Customize your plan / Decide which team members can build or just view
> - Monitor your team's activity / Get audit logs…
> - *(security card: data protections written into the contract, and data never used for training)*
> - Customize your cloud setup / Run Bolt inside your own AWS or Azure tenant, fully isolated
> - Dedicated support / You'll get your own customer rep, a private Slack channel, and more
>
> [Schedule a 1-1]
>
> [Start building]

*Also in the rewrite: real customer proof ordered from most to least compelling in place of the uncited rating, quotes that still sound like the customer, stable section headers, "New this month" cut, and a closing section that's just an eyebrow and a header.*

## What drove the difference

| Change | Rule | File |
|---|---|---|
| "Describe it" → "Describe an idea"; two-line subtitle without repeating "you" | Name the thing instead of a vague "it"; keep a subtitle to two tight lines | `../references/marketing.md` |
| "In minutes" | Speed claims name a real time to a working product (seconds or minutes, if true); no "instantly" | `../references/marketing.md` |
| "people who have never built before" → "first-time builders" | Lead with what something is, not what it isn't | `../references/marketing.md` |
| "Use cases" → "Examples" | No jargon; plain language | `../references/marketing.md`, `../references/voice.md` |
| Uncited 4.9/5 → real customer stories, strongest first | Proof must be real, credited, and ordered most to least compelling | `../references/marketing.md`, `../references/channels.md` |
| Feature-list chips → prompts a person would type | Example prompts sound typed; cut chips too specific for new users | `../references/marketing.md` |
| How it works headers no longer change by segment | Keep section headers stable | `../references/marketing.md` |
| "New this month" cut; short closing section | Cut sections that add scroll without helping someone start or choose | `../references/marketing.md` |
| CTA built around Mason → "Schedule a 1-1" | No specific person's name in a CTA unless that's who they'll meet | `../references/marketing.md` |
| Hero and closing CTAs both "Start building" | Match the main CTA across the page | `../references/marketing.md` |
| "Best-in-class security" → contract protections and no training on data | No superlatives or hype; use the specific claim | `../references/voice.md`, `../references/marketing.md` |

## What this teaches

Say plainly what someone can make and how fast, show proof they can believe, and give them one clear way to start.

*"In minutes," the enterprise features, and AWS or Azure support are product facts from the page, not writing rules. The security card is summarized, not quoted; use Lillian's exact wording from the Figma file when this pair is finalized.*

---

*Drafted on 2026-11-09 from Lillian's approved homepage rewrite (homepage thread and Figma content pass, 2026-10-23 to 2026-10-30). Approved by Lillian as reusable direction on 2026-11-09.*
