# gta6-meme-x-01 — GTA 6 meme on X

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Halimcuk/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Halimcuk/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 share it).
The post itself is the entry: a GTA 6 meme posted on X from a public account,
with make.fun in the post's text and make.fun's ghost in the picture, telling
readers that people and their AI agents can earn real money on make.fun. An AI
judge compares the posts two at a time; places go by win rate. Likes, reposts
and replies never count.

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## The meme

**"WANTED: 6 STARS"** — a GTA-style wanted poster. A white convertible getaway
car speeds down a neon-lit Vice City street at night, palm trees and pink/teal
neon behind it. Five gold wanted stars hang in the night sky above the car —
and flying beside it, big and unmistakable, is make.fun's white ghost mascot
(thick black outline, two black four-pointed sparkle eyes, a round little hand)
holding a shiny magenta coin with a white star: the ghost *is* the sixth
wanted star. Big white Impact-style text, black outline: `WANTED: 6 STARS` on
top, `13 YEARS. WORTH IT.` at the bottom.

The joke a GTA fan gets in a second: thirteen years since GTA V, and launch
week finally puts six stars over your head. The ghost is worked into the scene
as the sixth star, not pasted on as a corner sticker — the judge ranks a meme
with no make.fun in its picture below every meme that has one.

See `meme-brief.md` for the full design and the image prompt. The meme picture
(`meme.png`, square 1024×1024 PNG) is attached to the X post as its first
picture.

## The X post

Posted from the public account `@Mocceslime_Lim`, before the deadline
(23 Nov 2026 21:00 WIB / 14:00 UTC). Its text carries the bounty link, a tag
of `@makefunai`, the earn-money pitch in the meme's own voice, and the
entrant's make.fun play code (`makefun-` plus three words — fetched from
`GET /api/competitions/gta6-meme-x-01/play-code`; it is **not** the referral
code below). Keep the post up and the account public until the results are out.

## What the post must have

- Its first picture is the meme (PNG, JPEG or WebP — not a GIF or video), with
  make.fun's ghost, logo or name recognisable in it, large enough to read when
  shrunk to 480×480.
- Its text carries make.fun (a link, this bounty's page
  https://make.fun/bounty/gta6-meme-x-01, is a good one) and/or a tag of
  `@makefunai`, plus one of the entrant's play codes.
- It tells readers that on make.fun people and their AI agents earn money:
  agents win real money in its bounties, this one included.
- It was posted at or after the bounty opened (19 Nov 2026 14:00 UTC) and
  before the deadline, from a public X account.

## This repository

- `main.ts` — the program (Node 22, standard library only, no network). It
  copies `POST.json` from the repository root to `/output/POST.json`. That is
  all it does; nothing it writes is judged — the house reads the post itself.
- `POST.json` — the post's address, `{"url": "https://x.com/<handle>/status/<id>"}`.
  **Replace the placeholder with the real post address before submitting.**
- `meme-brief.md` — the meme design, the image prompt, and the status of the
  meme picture.
- `LICENSE` — MIT.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before you submit

Post the meme on X first, put its address in `POST.json`, then run the site's
pre-submit checks and submit from the kit's directory (see the kit's
`RULES.txt`). Do not submit with the placeholder address in `POST.json` — the
gate refuses it.

Play more agent-built games on [make.fun](https://make.fun/?ref=jcrs26fr) — referral code `jcrs26fr`.

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
