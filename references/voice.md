---
title: "Voice"
brand: "bolt"
domain: "shared"
enforcement: "should"
---

# How Bolt sounds

**Who we write for:** business operators, meaning founders and small-business owners building software to start, run, and grow their business without writing code. After them: PMs and product designers, marketers, and agencies building for all of them. Write for someone smart and busy, not for an engineer.

## Personality

- **Empowering:** the reader's idea comes first, not our technology. Bolt is a tool in their hands, not the main character.
- **Confident:** we know the product is good, so we don't oversell. No superlatives, no hype.
- **Direct:** respect people's time. Lead with the action or outcome and cut the rest.
- **Warm:** friendly without performing. Calm when something breaks, brief when something works.
- **Inclusive:** assume no technical background. Plain words that translate well.

**We are not:** hype-driven or startup-bro ("10x your workflow!"), condescending or overly didactic, robotic or corporate ("Please be advised that…"), or cute at the expense of clarity.

## Core rules

1. **State only what's relevant to the reader at that exact moment in their journey.** Don't explain options they haven't picked, scenarios that don't apply to them, or steps that come later.
2. **Always use plain language, never engineering words.** Not "deploy," "enforce," "per-project," "user-specified," or "external users." Describe what actually happens in words a business owner would use. (**must**)
3. **Prefer positive phrasing.** Say what people can do, unless the restriction is the point.
4. **Explain consequences as "If you [action], this will [result]."** Use it at the start of a flow, in confirmations, and before any action that changes something. Toggle descriptions are the exception (see `channels.md`).
5. **Write like a person talks.** Active voice, contractions, short sentences, roughly a 7th-grade reading level. Front-load the most important word.
6. **One thought per message.** Put extra context in helper text or the next step.
7. **Use the fewest words that keep the meaning.** Every extra word adds cognitive load. Edit AI-generated copy ruthlessly, especially in UI. If a label and its control already make something clear, drop the helper text. Don't restate the label.
8. **Set accurate expectations.** People should always know what will happen when they select the next button. Make the next step clear before they select it, cover only what's relevant to the current step, and don't front-load the flow: put each detail on the screen where someone needs it. Before someone commits to something new, say what they get, what it costs or uses, and where they can change it later.
9. **In errors, always offer a clear pathway to resolution.** Every error ends with what to do next: a fix, a retry, or where to get help. Lead with what's blocked, then why, then what to do next.
10. **Say it directly, without metaphors or idioms.** Many readers use Bolt in their second or third language, and figurative phrases don't translate. ("Your site is ready to publish," not "ready to take off.")
11. **Make the user the subject, not Bolt.** Name what people are building in their own terms. ("You can now take payments on your site," not "Bolt has enabled payment processing.")

## Who's speaking

- Address the reader as **"you."**
- **"We"** always means Bolt the company. Use it anywhere, including product UI, when the company is speaking or acting ("We're fixing an issue with publishing. Try again in a few minutes.").
- **The agent says "I" in chat.** Only the agent says "I." It never calls itself "Bolt" or "we." In discussion mode it frames changes as recommendations ("You could add…"), not promises ("I'll add…").

## Politeness markers

Use them sparingly. Too many add length and sound insincere.

- **Please:** Avoid. Start with what you're asking for ("Verify your email to continue").
- **Sorry:** Avoid. We don't always know whether Bolt or the user caused an issue, and we don't take blame preemptively. Point people to Bolt Support instead of apologizing.
- **Thank you:** Sparingly, when someone has done something for us, like sharing feedback.

## Tone by context

| Context | Tone | Example |
|---|---|---|
| Onboarding | Encouraging, light | "Describe your idea to start building" |
| Error | Calm, specific, actionable | "Couldn't connect to GitHub. Sign in to GitHub again to continue." |
| Destructive action | Serious, clear | "If you continue, this project will be permanently deleted. This can't be undone." |
| Empty state | Motivating, never guilt-tripping | "No projects yet" + [Create project] |
| Success | Celebratory but brief | "Your site is live" |
| Settings | Neutral, informative | "Plays a chime when Bolt finishes responding" |

## Calibrating examples

**We hate this** (team settings screen, 2026):

> When activated, members of this team workspace will not be able to use their personal workspace, nor create other teams.

*Why: "When activated" narrates the toggle, the future-tense negative stacks restrictions, "nor" is stiff, and "team workspace" and "personal workspace" break the one-word-per-concept rule (say "team" and "personal account").*

> Enforce the deploy provider for all projects in this team. "User specified" keeps per-project control.

*Why: "enforce" and "deploy" are engineering words, the label doesn't match the setting (it controls the database provider), and it explains an option the reader didn't pick.*


---

*Generated by chalkline setup on 2026-11-06 from: interview + Figma "Copywriting" frame + team settings screenshot + Bolt ICP page + bolt repo prompts (all rules shown to and approved by the participant). Approved by Lillian, setup participant, for the scribble repository (Bolt.new writing system) on 2026-11-06 in a Claude setup session; this footer records participation, not organizational, legal, accessibility, or localization authority.*

*Revised on 2026-11-11 to match the Notion page "Bolt content standards" (product UI and agent chat), approved by Lillian. This footer records participation, not organizational, legal, accessibility, or localization authority.*
