// Reports legal-page seller details that are still empty (they render as [INSERT ...] placeholders).
// Default: prints a warning and exits 0 so local dev and normal builds are never blocked.
// --strict: exits 1 when anything is unresolved. Use it before a production publish.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const file = fileURLToPath(new URL("../src/config/legal.ts", import.meta.url));
const src = readFileSync(file, "utf8");
const block = src.match(/LEGAL_INFO[^=]*=\s*\{([\s\S]*?)\};/);
if (!block) {
  console.error("check-placeholders: could not find LEGAL_INFO in src/config/legal.ts");
  process.exit(2);
}

const missing = [...block[1].matchAll(/^\s*(\w+):\s*"(.*?)"\s*,?\s*$/gm)]
  .filter(([, , value]) => value.trim() === "")
  .map(([, key]) => key);

if (missing.length === 0) {
  console.log("check-placeholders: all legal details are filled in.");
  process.exit(0);
}

console.warn(
  `\ncheck-placeholders: ${missing.length} legal detail(s) still unresolved in src/config/legal.ts:\n` +
    missing.map((k) => `  - ${k}`).join("\n") +
    "\nThe legal pages show highlighted [INSERT ...] placeholders until these are filled.\n",
);
process.exit(process.argv.includes("--strict") ? 1 : 0);
