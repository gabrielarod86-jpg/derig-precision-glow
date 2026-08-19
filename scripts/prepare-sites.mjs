import { cp, mkdir, rm, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, ".output");
const dist = join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, "client"), { recursive: true });
await mkdir(join(dist, "server"), { recursive: true });

await cp(join(output, "public"), join(dist, "client"), { recursive: true });
await cp(join(output, "server"), join(dist, "server"), { recursive: true });
await copyFile(join(output, "server", "index.mjs"), join(dist, "server", "index.js"));

console.log("Sites deployment output prepared in dist/client and dist/server.");
