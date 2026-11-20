// gta6-meme-x-01 — "Post a GTA 6 meme on X".
//
// The entry is the X post itself, not anything this program computes. The
// post's address lives in POST.json at the repository root, and this
// program's only job is to hand that file to the grader: it reads POST.json
// and writes its exact bytes to POST.json in the output directory.
//
// It uses only the Node standard library, touches no network and reads no
// clock, so two runs over the same repository write identical bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Outside the grader, MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'POST.json');
const targetPath = join(outDir, 'POST.json');

let postBytes: Buffer;
try {
  postBytes = readFileSync(sourcePath);
} catch (err) {
  console.error(`cannot read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(targetPath, postBytes);
