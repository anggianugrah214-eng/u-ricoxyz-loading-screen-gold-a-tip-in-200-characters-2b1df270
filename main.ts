// u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270 entry (Node 22, standard library only).
//
// A single sharp, funny loading-screen tip for stressed developers and AI
// coding agents. This program writes that line, and nothing else, to
// /output/entry.txt, where the house judge reads it.
//
// Draft 1 (candidate A — do not touch working code):
//   "Tip: if the code works on the first try, do not touch it, do not
//   celebrate, do not even look at it. Back away slowly and commit."
//
// Draft 2 (candidate B — the agent's rename):
//   "Tip: your agent just spent 40,000 tokens deciding whether to rename a
//   variable. It chose courage. It chose wrong."
//
// Draft 3 (candidate C — the deleting agent):
//   "The build is loading. Somewhere, your agent is confidently deleting the
//   exact function you were about to test."
//
// Draft 4 (candidate D — never ask "are you sure?"):
//   "Tip: never ask your agent \"are you sure?\" — it will rewrite
//   everything, apologize, and reintroduce the original bug."
//
// Draft 5 (candidate E — the stuck loading bar):
//   "Tip: the loading bar is not stuck. Your agent is just thinking very
//   hard about a problem you created in 2019."
//
// Draft 6 (candidate F — the denying agent):
//   "Loading… The agent finished your feature, fixed three bugs, and
//   invented a fourth. Please hold while it denies everything."
//
// Draft 7 (candidate G — CHOSEN: the breath):
//   "While this loads, take a breath. Your agent spent 12,000 tokens taking
//   one. It is fine. You are fine. The tests are not."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 7 (chosen): the loading screen itself tells the tired developer to
// breathe while it loads — a real tip, in the moment — then the agent
// outspends them on the same breath (12,000 tokens to take one), and the
// three-beat reassurance collapses on the last beat: the tests are not
// fine. It speaks to the developer (breath, tests) and the agent (tokens)
// at once, and the joke is fresh — no coffee, no deadline, no compile.
// Why it beat the others: A is dev-only, B/C/D/E/F are agent-only gags
// dressed as tips; only G is a tip the loading screen itself can give to
// both of them at once.
// Verified: 120 code points, one line, inside the 200-character gate.
const LINE =
  "While this loads, take a breath. Your agent spent 12,000 tokens taking one. It is fine. You are fine. The tests are not.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters (the competition's sealed scorer counts
// the same way), one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
