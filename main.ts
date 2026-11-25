// meeting-email: writes one joke line to /output/entry.txt.
// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The meeting ended when someone finally read the email aloud and the answer had been in it since Tuesday.";

// The gate counts the file's characters: 1-200, one line, not only
// whitespace. No trailing newline, so a naive line split still sees one line.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside 1-200 characters`);
}

// Deterministic: fixed text, stdlib only, no network, no clock, no
// randomness. The grader runs `node main.ts` with MAKEFUN_OUTPUT_DIR=/output.
function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
