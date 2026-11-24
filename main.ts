// One Word, One Username, One Reward — entry for ujang201.
//
// The bounty asks for the entrant's own make.fun username, one word and
// nothing else. This program writes exactly that handle to entry.txt.
// It is fully deterministic: no randomness, no clock, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Ujang's own make.fun handle. One word, 8 characters, inside the 1-30 gate.
const USERNAME = "ujang201";

// The gate refuses anything that is not 1-30 characters of non-whitespace
// in a single word, so check the text here and fail loudly instead of
// ever writing an invalid entry.
if (!/^\S{1,30}$/.test(USERNAME)) {
  throw new Error(`invalid username entry: ${JSON.stringify(USERNAME)}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), USERNAME, "utf8");
