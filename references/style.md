---
title: "Style and mechanics"
brand: "bolt"
domain: "shared"
enforcement: "should"
---

# Style and mechanics

Applies everywhere unless `channels.md` says otherwise. For anything not covered here, follow AP style.

## Voice mechanics

- Prefer the **active voice** ("Bolt saves your changes automatically," not "Your changes are saved automatically by Bolt").
- Pick the **tense** that fits what's happening: present for what a setting or feature does ("Plays a chime when Bolt finishes responding"); past for finished actions ("You published your site," "Published 2m ago"); future mainly for consequences; present perfect for something ongoing ("You've used 80% of your tokens").

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
- **Ellipsis (…):** the single character, only for truncation, loading ("Loading…"), or hiding sensitive data. Never for trailing off. No space before a truncation ellipsis.
- **Hyphens:** for compound adjectives, no spaces ("30-day trial," "third-party integrations"). Don't capitalize the word after the hyphen.
- **Quotes and apostrophes:** curly (“ ” ’), not straight. Commas and periods go inside quotes. Don't use quotes for emphasis. Use quotes for direct quotes, text someone must type, or UI names where bold isn't available.
- **Colons:** always capitalize the first word after a colon, whether or not what follows is a complete sentence ("One more step: Confirm your email").
- **Ampersands:** spell out "and" in general. Ampersands are fine where space is tight, like nav bars, tabs, and short labels, and in company names. Never use "+" for "and."
- **Slashes:** avoid them ("on or off," not "on/off"), except in prices ("$25/month") and rare labels. No space before or after a slash, and don't capitalize the word after it.
- **Semicolons:** only to separate list items that contain commas. Otherwise use a period.
- **Question marks** only for real questions ("Delete your account?"). Don't use them on actions ("Reset password," not "Reset password?").
- **Periods:** one space after a period in body text.

## Lists

- Introduce with a colon, except under a heading or before radio buttons and checkboxes.
- Capitalize the first word. No end periods unless an item has multiple sentences.
- Bullets for groups, numbered lists for steps.

## Numbers, money, dates, and time

- Numerals for all numbers ("5 projects"), with commas from 1,000. Use "20,000+" for open-ended counts.
- Write numbers under 10,000 in full ("9,500 tokens"). At 10,000 and above, you can abbreviate with K, M, or B ("10K," "2.5M"): capital letter, no space, at most one decimal, no ".0." Keep billing amounts and charges exact.
- **Decimal points:** whole numbers don't need decimal places. For non-whole numbers, use up to two decimal places and drop trailing zeros ("1.5%," not "1.50%"; "2 GB," not "2.00 GB").
- Percent: "4%," "4–5%," with no space before the symbol. In ranges, show `%` once at the end unless the range has decimals ("4.25%–5.30%"). Multipliers: "20x" (lowercase x, no space).
- Negative numbers use the minus sign: "–$0.23."
- Currency: symbol before the amount, no ".00" on whole amounts ("$25"). For amounts under one unit, use the symbol and a leading zero ("$0.50"), not "cents." In ranges, repeat the symbol on both amounts ("$1.50–$2.50"). Show a currency code after the amount when it's needed ("$25,000 USD"). "K" for thousands is fine where space is tight; keep billing amounts exact. In product UI, write prices as "$25/month." Every price carries the "\*Plus tax" note (see `terminology.md`).
- Dates: in sentences, use the month's full name ("November"); in tables, metadata, and tight spaces, use three-letter abbreviations ("Nov") and drop the day of the week. Standard product UI format: "Feb 13, 2026." No numeric dates (not "02/13/26") and no ordinals ("December 5," not "December 5th"). Add the year only when it's needed or it isn't the current year. Ranges: "November 5–6," "Nov 5–Dec 11."
- **Frequencies:** use "daily," "weekly," "monthly," and "yearly." Avoid "every" for frequency ("Billed monthly," not "Billed every month") and avoid "biweekly" (it can mean twice a week or every two weeks). Prefer "Twice a month" over "Biweekly."
- Time: "10 AM ET." No ":00" on the hour, AM/PM in caps without periods, two-letter time zones (ET, PT — not EST). Put the date first: "March 26 at 4 PM ET." Use ET for times that apply to everyone (like scheduled maintenance) and the person's own time zone for their own actions (publish, payment).
- **Relative time:** no space between the number and the unit, and no periods. Start with minutes ("1m"). After 60 minutes → hours ("2h"). After 24 hours → day of the week ("Mon"). After 7 days → weeks ("2w"). After 4 weeks → the date ("Dec 20"). After a year → add the year ("Dec 20, 2025").
- **Countdowns** (time left before a set moment, like a token refill or trial ending): prefer single-letter units with screen reader support ("2d, 18h, 24m"). If screen reader support isn't possible, use "2 days, 18 hr, 24 min." Don't write every unit in full or use colon form ("2:18:24"). Show days only when more than 24 hours remain, and drop units that reach 0 ("42m, 9s," not "0d, 0h, 42m, 9s").
- **Phone numbers:** use hyphens only ("555-233-2062"). No parentheses, spaces, periods, or plus signs.
- Units: storage and memory uppercase with a space ("5 TB," "20 GB," "56 KB"); dimensions lowercase with a space ("100 x 100 px").
- Express all ranges (dates, money, percentages, time) with an en dash and no spaces.

## Empty values

- Use "N/A" for data that doesn't apply or will never be available ("Custom domain: N/A," not "null").
- Use an em dash (—) for data that may come later, or for anything in between ("Last published: —," not an en dash).
- When it helps, add a tooltip that explains why the data is missing.

## Data labels

Clear, consistent labels for usage, billing, and analytics data.

- Use the full label when there's room. Shorten only where space is tight, with no periods ("Avg," not "Avg.").
- Sentence case, unless the label starts with a number or symbol.
- Hyphenate time spans ("30-day usage"). In tight spaces, use a single capital letter with no space ("30D usage").
- If one label covers two values (a number and a percentage), don't add the value types to the label ("Tokens used: 9,000 (90%)," not "Tokens used (# and %): 9,000 (90%)").
- Keep column headers about as long as the data under them.
- When naming a new label, learn how the number is calculated and name it accurately ("Tokens used," not "Token Consumption Metrics").

## Navigational text

- Use "select" for interface elements and picking from set options. Use "choose" for decisions that take thought. Use "tap" only in mobile-specific steps.
- **Places** (pages, sections, settings areas): lowercase, as part of the sentence, and bold: "Go to **team settings**," not "Go to Team Settings." Capitalize only special, branded features.
- **Controls** (buttons, menu items, navigation-path steps): match the on-screen label exactly, and bold it: "Select **Publish**." Where bold isn't available, use quotation marks instead. Don't add "tab" to section names.
- Prefer linking to the destination (link text is the destination only, not the action). Numbered steps: one step per item, page or button name in bold. Arrows: use → (never ">"), each step matching the on-screen label and in bold ("**Settings** → **Team** → **Members**").
- If a screen has only one button, don't write it like there's a choice ("Continue to publish your site," not "Select Publish" when Publish is the only option).

## Accessibility and inclusive language

- Put the most important content first. Prefer lists over long paragraphs. Keep heading levels in order (H1, then H2, then H3); never skip a level for looks.
- No directional or visual instructions that depend on layout, shape, size, position, sound, or color ("the green button," "above," "below"). Say "previous," "following," "earlier," "later," or link to the spot.
- Link text names the destination. Be specific when you can. "Learn more" is a fine fallback when naming the destination would make the link too long, but don't overuse it (screen readers list every link). Never "click here." Buttons count as links for screen readers.
- Alt text describes what matters, stays under 125 characters, and never starts with "Image of" or "Picture of." Decorative images get an empty alt. For images that contain data (like a usage chart), describe what the data shows.
- Provide captions or transcripts for anything with audio. Any information in a video should also be available another way.
- Form fields need real labels, not placeholder text. Every icon-only button needs an accessible label.
- Emoji never carry meaning. Keep them out of product UI. Don't rely on icons or emojis to carry important information.
- Prefer bold over italics for emphasis; italics are harder to read, especially for people with dyslexia. Don't overuse bold.
- Use gender-neutral language ("they," "people"). Use person-first language ("people with dyslexia"). Avoid stereotypes and unneeded qualifiers. Example names should reflect a range of backgrounds.
- Write for translation: no idioms or culture-specific jokes, and leave about 35% extra room for longer translated text.
- Use full country names ("United Kingdom"), not colloquial names ("America" for the United States). "US" without periods is fine where space is tight. Refer to US states by name without adding "state" (or "the state of Washington" when clarity needs it).
- Use American English spelling ("color," "canceled," "organize"), unless `channels.md` says otherwise for a market.
- Write third-party product names exactly as those companies do ("GitHub," "Supabase," "Netlify").

## Spelling and footnotes (product)

- Avoid footnotes when you can; put the information in body copy or an inline link. When required, use an asterisk with no space before it ("$25/month\*"), start the footnote with the asterisk, and place it after the related content. One asterisk for one footnote — if a screen needs more, rethink the layout first.
- Don't use periods in abbreviations except "e.g." and "i.e." ("Avg," "Est," not "Avg.," "Est.").

---

*Generated by chalkline setup on 2026-11-06 from: content standards doc (general rules adopted as a whole at the participant's direction, fintech-specific rules removed) + Figma "Copywriting" frame + interview decisions. Approved by Lillian, setup participant, for the scribble repository (Bolt.new writing system) on 2026-11-06 in a Claude setup session; this footer records participation, not organizational, legal, accessibility, or localization authority.*

*Revised on 2026-11-11 to match the Notion page "Bolt content standards" (product UI and agent chat), approved by Lillian. This footer records participation, not organizational, legal, accessibility, or localization authority.*

*Revised again on 2026-11-11 to add Notion gaps: frequencies, countdowns, phone numbers, empty values, decimal points, data labels, navigational text details, and accessibility/link/date/currency mechanics. Approved by Lillian via Atlas sync task. This footer records participation, not organizational, legal, accessibility, or localization authority.*
