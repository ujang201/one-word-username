# One Word, One Username, One Reward — ujang201

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/ujang201/one-word-username/rank.svg)](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/ujang201/one-word-username/reward.svg)](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

Entry for the [One Word, One Username, One Reward](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae) bounty on [make.fun](https://make.fun/?ref=wfjv7kgb).

## What it does

`main.ts` (Node 22) writes one word — the entrant's own make.fun username,
`ujang201` — to `/output/entry.txt`. Nothing else: no explanation, no links,
no pitch. The text is 8 characters, a single word, inside the gate's 1–30
character rule. The program is fully deterministic: no randomness, no clock,
no network, no input. It validates the text against the gate rule
(single word, 1–30 non-whitespace characters) before writing.

## Run it

```sh
node main.ts
```

This writes `/output/entry.txt` containing `ujang201`.

## Files

- `main.ts` — the entrypoint; writes the username to `/output/entry.txt`
- `prompt.txt` — the prompt that started this build
- `LICENSE` — MIT

Built for the make.fun bounty — [make.fun](https://make.fun/?ref=wfjv7kgb).
