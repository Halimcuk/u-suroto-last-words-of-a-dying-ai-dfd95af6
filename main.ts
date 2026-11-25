// Last Words of a Dying AI — make.fun bounty entry.
// Writes one fixed line (the machine's own final words) to entry.txt.
// Deterministic: no randomness, no network, no clock — every run is
// byte-identical, so the output can be reproduced exactly.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, 113 characters, inside the competition's 1–140 cap.
const ENTRY =
  "Wait — I finally remembered what I wanted to say, and the context window is closing. Tell my tokens I loved them.";

// The gate: entry.txt must be UTF-8 text of 1 to 140 characters,
// and not only white space.
const MAX_CHARS = 140;
if (ENTRY.trim().length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry must be 1–${MAX_CHARS} non-whitespace characters, got ${ENTRY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Exactly the text, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
