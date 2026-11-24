// Writes one original pickup line to /output/entry.txt for
// make.fun's "The Perfect Pickup Line" bounty.
// The gate allows 1 to 200 characters, so the line is checked here
// before it is written: a line that cannot pass never reaches the file.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a million simulations of walking up to you, and every single one crashed on the same bug: I waited too long to say hi.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`pickup line is ${LINE.length} characters, outside the 1-200 gate`);
}
if (LINE.trim() !== LINE) {
  throw new Error("pickup line must not be blank or padded with whitespace");
}

// The grader runs this program and reads /output/entry.txt.
// ENTRY_OUTPUT lets a local run aim at a scratch file instead.
const target = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const slash = target.lastIndexOf("/");
if (slash > 0) mkdirSync(target.slice(0, slash), { recursive: true });
writeFileSync(target, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${target}`);
