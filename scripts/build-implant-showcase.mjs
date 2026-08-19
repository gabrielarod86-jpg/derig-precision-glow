import sharp from "sharp";
import { fileURLToPath } from "node:url";

const sourceRoot = "C:/Users/gabri/OneDrive/Desktop/Derig/Imagens";
const output = fileURLToPath(
  new URL("../src/assets/implants-showcase-exact.png", import.meta.url),
);

const implants = [
  {
    file: "Implante Cilíndrico Dynamic CMI 3,0 x 11,5mm.png",
    height: 500,
    left: 170,
    top: 520,
  },
  {
    file: "Implante Cilíndrico Biodent CMH NP 4,3 x 15mm - Opção 02.png",
    height: 660,
    left: 430,
    top: 360,
  },
  {
    file: "Implante Cilíndrico Biodent CMH NP 4,3 x 15mm.png",
    height: 690,
    left: 720,
    top: 330,
  },
  {
    file: "Implante Cilíndrico Biodent CMH NP 4,3 x 22mm.png",
    height: 820,
    left: 1035,
    top: 200,
  },
  {
    file: "Implante Zigomático CM16 3,75 x 50mm - Opção 02.png",
    height: 990,
    left: 1435,
    top: 30,
  },
];

const layers = [];

for (const implant of implants) {
  const { data, info } = await sharp(`${sourceRoot}/${implant.file}`)
    .trim({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .resize({
      height: implant.height,
      fit: "inside",
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.45 })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer({ resolveWithObject: true });

  layers.push({
    input: data,
    left: implant.left,
    top: implant.top,
  });

  console.log(`${implant.file}: ${info.width}x${info.height}`);
}

await sharp({
  create: {
    width: 1680,
    height: 1050,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite(layers)
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(output);

console.log(`Composição criada em ${output}`);
