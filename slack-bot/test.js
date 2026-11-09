import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

process.env.SLACK_BOT_TOKEN ||= 'xoxb-test';
process.env.SLACK_APP_TOKEN ||= 'xapp-test';
process.env.ANTHROPIC_API_KEY ||= 'sk-ant-test';
process.env.SCRIBBLE_NO_START = '1';
const { loadWritingSystem, systemPrompt, toSlack, cleanMention } = await import('./index.js');

async function fixture() {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'scribble-'));
  await fs.mkdir(path.join(dir, 'references'));
  await fs.mkdir(path.join(dir, 'calibration'));
  await fs.mkdir(path.join(dir, '.git', 'refs', 'heads'), { recursive: true });
  await fs.writeFile(path.join(dir, 'AGENTS.md'), '# agents');
  await fs.writeFile(path.join(dir, 'references', 'voice.md'), '# voice');
  await fs.writeFile(path.join(dir, 'references', 'README.md'), 'skip me');
  await fs.writeFile(path.join(dir, 'calibration', '001-x.md'), '# pair');
  await fs.writeFile(path.join(dir, '.git', 'HEAD'), 'ref: refs/heads/main\n');
  await fs.writeFile(path.join(dir, '.git', 'refs', 'heads', 'main'), '251e0b1abcdef\n');
  return dir;
}

test('loads AGENTS.md, references and calibration, skipping READMEs', async () => {
  const ws = await loadWritingSystem(await fixture());
  assert.deepEqual(ws.files.map(([p]) => p), ['AGENTS.md', 'references/voice.md', 'calibration/001-x.md']);
  assert.equal(ws.revision, '251e0b1');
  const prompt = systemPrompt(ws);
  assert.match(prompt, /<file path="references\/voice.md">/);
  assert.match(prompt, /revision 251e0b1/);
});

test('fails clearly when the writing system is missing', async () => {
  await assert.rejects(loadWritingSystem(os.tmpdir()), /AGENTS.md/);
});

test('converts Markdown bold and headings to Slack format', () => {
  assert.equal(toSlack('**What is broken**'), '*What is broken*');
  assert.equal(toSlack('## Suggested rewrite'), '*Suggested rewrite*');
});

test('strips the bot mention', () => {
  assert.equal(cleanMention('<@U123> review this', 'U123'), 'review this');
});
