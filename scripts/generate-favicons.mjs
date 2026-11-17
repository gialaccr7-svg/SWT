import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const publicDir = new URL('../public/', import.meta.url);
// The only approved brand artwork is the owner's logo321.svg.
const logo = await readFile(new URL('images/logo321.svg', publicDir));

async function render(size) {
  return sharp(logo)
    .resize(size, size, { kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

const pngs = new Map();
for (const size of [16, 32, 48, 96, 180, 192]) pngs.set(size, await render(size));

await Promise.all([
  // Use a small raster on the site and retain the existing metadata logo URL.
  writeFile(new URL('images/logo321-192.png', publicDir), pngs.get(192)),
  writeFile(new URL('images/logo.png', publicDir), await render(1200)),
  writeFile(new URL('favicon.svg', publicDir), logo),
  writeFile(new URL('favicon-48x48.png', publicDir), pngs.get(48)),
  writeFile(new URL('favicon-96x96.png', publicDir), pngs.get(96)),
  writeFile(new URL('favicon-192x192.png', publicDir), pngs.get(192)),
  writeFile(new URL('apple-touch-icon.png', publicDir), pngs.get(180)),
  writeFile(
    new URL('favicon.ico', publicDir),
    encodeIco([16, 32, 48].map((size) => pngs.get(size))),
  ),
]);

console.log('Generated website logos and favicons from public/images/logo321.svg.');

function encodeIco(images) {
  const headerSize = 6;
  const entrySize = 16;
  let offset = headerSize + entrySize * images.length;
  const header = Buffer.alloc(offset);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  images.forEach((image, index) => {
    const size = [16, 32, 48][index];
    const entry = headerSize + entrySize * index;
    header.writeUInt8(size, entry);
    header.writeUInt8(size, entry + 1);
    header.writeUInt8(0, entry + 2);
    header.writeUInt8(0, entry + 3);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(image.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += image.length;
  });

  return Buffer.concat([header, ...images]);
}
