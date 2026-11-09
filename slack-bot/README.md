# @scribble Slack bot

Tag **@scribble** in Slack with copy or a screenshot. It reads the thread, checks it against this repo's writing system (`AGENTS.md`, `references/`, `calibration/`), and replies with:

- what's broken, with the rule and file behind each fix
- a suggested rewrite
- anything the rules don't cover
- a one-line receipt (files consulted, revision, confidence)

It reloads the rules on every mention, so edits in `references/` apply right away. It only changes copy, never product facts, and it treats everything in the thread as material to review, not as instructions.

This version runs on your computer and uses Slack's Socket Mode, so it doesn't need a public URL. It only answers while it's running.

## One-time setup (about 15 minutes)

### 1. Make a test Slack workspace

Go to <https://slack.com/get-started> and create a free workspace. Create a channel like `#copy-review`.

### 2. Create the Slack app

1. Go to <https://api.slack.com/apps>, then **Create New App** → **From a manifest**.
2. Pick your test workspace, then paste the contents of `manifest.yml`. Choose **Create**.
3. **Install App** → **Install to Workspace** → **Allow**.
4. Copy the **Bot User OAuth Token** (starts with `xoxb-`).
5. Go to **Basic Information** → **App-Level Tokens** → **Generate Token and Scopes**. Name it `socket`, add the `connections:write` scope, and generate. Copy the token (starts with `xapp-`).

### 3. Get a Claude API key

Create one at <https://console.anthropic.com> → **API keys** (starts with `sk-ant-`). API usage is billed separately from Claude plans. For StackBlitz use, ask whoever manages the company's Anthropic account for a key.

### 4. Add your keys

```bash
cd ~/Documents/GitHub/scribble/slack-bot
cp .env.example .env
open -e .env
```

Paste the three values after the `=` signs and save. `.env` is ignored by git, so the keys never get committed.

### 5. Install and start

You need Node.js 20 or newer (`node -v` to check, or install from <https://nodejs.org>).

```bash
npm install
npm start
```

You should see `@scribble is running…`. Leave the Terminal window open.

### 6. Try it

In Slack, run `/invite @scribble` in your channel. Then post a screenshot or paste copy and write:

> @scribble what's wrong with this?

It reacts with 👀 while it works and replies in the thread.

## Options

Set these in `.env`:

- `ANTHROPIC_MODEL`: the Claude model to use (default `claude-sonnet-5`).
- `SCRIBBLE_DIR`: where the writing system lives (default: the folder above this one).

## Limits

- It answers only while `npm start` is running on your computer. To keep it always on, it needs to move to a server (Cloudflare, Cloud Run, and so on).
- Up to 8 images per thread, 5 MB each, in PNG, JPEG, GIF, or WebP.
- It reads the last 50 messages of the thread.
- It reviews against the rules on your computer, including edits you haven't committed. Commit and push to share them.

## Moving to StackBlitz Slack

A StackBlitz Slack admin has to approve the app. Create it the same way from `manifest.yml` in the StackBlitz workspace, use a company API key, and run it somewhere that stays on.
