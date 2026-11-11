---
title: "Style and mechanics"
brand: "bolt"
domain: "shared"
enforcement: "should"
---

# Style and mechanics

Applies everywhere unless `channels.md` says otherwise. For anything not covered here, follow AP style.

## Capitalization and headings

- Sentence case for everything: titles, headings, buttons, navigation, tabs, column headers, tooltips, messages. Capitalize only the first word, proper nouns, acronyms, and branded names.
- No ALL CAPS for emphasis. Use bold, sparingly.
- Headings: informative, one sentence, no period unless the heading has 2 sentences (then a period after each). "Recent history," not "Here is your recent history."
- Acronyms: all letters capitalized. Spell out on first use in body text unless the acronym is better known than the full name.
- Job titles: capitalize next to a name ("Product Manager Kamal Singh"), lowercase otherwise.

## Punctuation

- **Oxford comma** in sentences with three or more items. No commas at the end of bullets.
- **Periods:** none on single-sentence UI strings (buttons, labels, headings, toasts). Use them when there are two or more sentences.
- **Exclamation points:** never in errors or alerts. At most one per screen or piece (see `channels.md`).
- **Em dashes (—):** no space before or after, one or two per page at most. Never use double hyphens (--) instead. **En dashes (–)** for ranges, no spaces: "4–5%," "10–11 AM ET."
- **Ellipsis (…):** the single character, only for truncation or loading ("Loading…"). Never for trailing off.
- **Quotes and apostrophes:** curly (“ ” ’), not straight. Commas and periods go inside quotes. Don't use quotes for emphasis.
- **Colons:** always capitalize the first word after a colon, whether or not what follows is a complete sentence ("One more step: Confirm your email").
- **Ampersands:** spell out "and" in general. Ampersands are fine where space is tight, like nav bars, tabs, and short labels, and in company names. Never use "+" for "and."
- **Slashes:** avoid them ("on or off," not "on/off"), except in prices ("$25/month") and rare labels. No space before or after a slash, and don't capitalize the word after it.
- **Semicolons:** only to separate list items that contain commas.
- **Question marks** only for real questions. "Reset password," not "Reset password?"

## Lists

- Introduce with a colon, except under a heading or before radio buttons and checkboxes.
- Capitalize the first word. No end periods unless an item has multiple sentences.
- Bullets for groups, numbered lists for steps.

## Numbers, money, dates, and time

- Numerals for all numbers ("5 projects"), with commas from 1,000. Use "20,000+" for open-ended counts.
- Write numbers under 10,000 in full ("9,500 tokens"). At 10,000 and above, you can abbreviate with K, M, or B ("10K," "2.5M"): capital letter, no space, at most one decimal, no ".0." Keep billing amounts and charges exact.
- Percent: "4%," "4–5%," with no space before the symbol. Multipliers: "20x."
- Negative numbers use the minus sign: "–$0.23."
- Currency: symbol before the amount, no ".00" on whole amounts ("$25"). Show a currency code after the amount when it's needed ("$25,000 USD"). Every price carries the "\*Plus tax" note (see `terminology.md`).
- Dates: no numeric dates (not "02/13/26") and no ordinals ("December 5," not "December 5th"). Add the year only when it's needed. Ranges: "November 5–6," "Nov 5–Dec 11."
- Time: "10 AM ET." No ":00" on the hour, AM/PM in caps without periods, two-letter time zones (ET, PT). Put the date first: "March 26 at 4 PM ET." Use ET for broad audiences and the person's own time zone for their own actions.
- Relative time: "1m," "2h," "Mon," "2w," then the date ("Dec 20").
- Units: "5 TB," "20 GB," "100 x 100 px."

## Accessibility and inclusive language

- No directional or visual instructions ("the green button," "above," "below"). Say "previous," "following," or link to the spot.
- Link text names the destination. Be specific when you can. "Learn more" is a fine fallback when naming the destination would make the link too long, but don't overuse it. Never "click here."
- **Places** (pages, sections, settings areas): lowercase, as part of the sentence, and bold: "Go to **team settings**," not "Go to Team Settings." Capitalize only special, branded features. **Controls** (buttons, menu items, navigation-path steps): match the on-screen label exactly, and bold it: "Select **Publish**." Bold the surface name instead of putting it in quotes; use quotes only where bold isn't available (push notifications, plain-text messages). Don't add "tab" to section names.
- Navigation paths use → with no ">", and each step matches the on-screen label ("**Settings** → **Team**").
- Alt text describes what matters, stays under 125 characters, and never starts with "Image of." Decorative images get an empty alt.
- Form fields need real labels, not placeholder text.
- Emoji never carry meaning. Keep them out of product UI.
- Use gender-neutral language ("they," "people"). Use person-first language ("people with dyslexia"). Avoid stereotypes and unneeded qualifiers. Example names should reflect a range of backgrounds.
- Write for translation: no idioms or culture-specific jokes, and leave about 35% extra room for longer translated text.
- Use full country names ("United Kingdom"). "US" without periods is fine where space is tight.

---

*Generated by chalkline setup on 2026-11-06 from: content standards doc (general rules adopted as a whole at the participant's direction, fintech-specific rules removed) + Figma "Copywriting" frame + interview decisions. Approved by Lillian, setup participant, for the scribble repository (Bolt.new writing system) on 2026-11-06 in a Claude setup session; this footer records participation, not organizational, legal, accessibility, or localization authority.*

*Revised on 2026-11-11 to match the Notion page "Bolt content standards" (product UI and agent chat), approved by Lillian. This footer records participation, not organizational, legal, accessibility, or localization authority.*
