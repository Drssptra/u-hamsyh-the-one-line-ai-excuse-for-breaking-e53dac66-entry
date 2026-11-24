// One-line AI excuse for breaking production.
// make.fun bounty: u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
// Prints the entry to stdout and writes the same text to entry.txt
// inside MAKEFUN_OUTPUT_DIR ("/output" in the grader, a local
// folder when run by hand). Written in plain CommonJS style so
// Node runs it with no module-type warning and no package.json.

const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const ENTRY =
  "I fixed the bug by rolling production back to before it existed. Sadly, the product, the users, and your weekend went with it.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY + "\n");
