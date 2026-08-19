import sharp from "sharp";
import { fileURLToPath } from "node:url";

const sourceRoot = "C:/Users/gabri/OneDrive/Desktop/Derig/Imagens";
const output = fileURLToPath(
  new URL("../src/assets/components-showcase-exact.png", import.meta.url),
);

const components = [
  {
    file: "Pilar Temporário Coping CAD CAM.png",
    height: 320,
    left: 130,
    top: 80,
  },
  {
    file: "Cicatrizador Estético MPC NE C5,5.png",
    height: 330,
    left: 150,
    top: 690,
  },
  {
    file: "Análogo do MPC Digital.png",
    height: 560,
    left: 1390,
    top: 45,
  },
  {
    file: "Transfer para escaneamento MPC.png",
    height: 500,
    left: 1375,
    top: 520,
  },
  {
    file: "Mini Pilar Cônico NE 45° CM16 C5,5.png",
    height: 720,
    left: 470,
    top: 300,
  },
  {
    file: "Mini Pilar Cônico NE 45° CM16 C6,5.png",
    height: 800,
    left: 760,
    top: 220,
  },
  {
    file: "Mini Pilar Cônico NE 45° CM16 C7,5.png",
    height: 880,
    left: 1060,
    top: 140,
  },
];

const layers = [];

for (const component of components) {
  const { data, info } = await sharp(`${sourceRoot}/${component.file}`)
    .trim({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .resize({
      height: component.height,
      fit: "inside",
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.45 })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer({ resolveWithObject: true });

  layers.push({ input: data, left: component.left, top: component.top });
  console.log(`${component.file}: ${info.width}x${info.height}`);
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
