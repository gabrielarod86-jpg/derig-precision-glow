import fs from "node:fs/promises";
import path from "node:path";

const sourceDir = "C:/Users/gabri/OneDrive/Desktop/Derig/Imagens";
const outputDir = path.resolve("src/assets/kits");

const files = [
  "kit-cirurgico-cilindrico.png",
  "kit-cirurgico-conico.png",
  "kit-de-brocas-kort.png",
  "kit-derig-guide.png",
  "kit-protetico.png",
];

await fs.mkdir(outputDir, { recursive: true });

for (const filename of files) {
  await fs.copyFile(path.join(sourceDir, filename), path.join(outputDir, filename));
  console.log(`Importado: ${filename}`);
}
