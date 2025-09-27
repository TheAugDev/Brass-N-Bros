const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '..', 'assets', 'img', 'favicon.svg');
const outDir = path.join(__dirname, '..', 'assets', 'img');

const sizes = [16, 32, 180];

(async () => {
  try {
    if (!fs.existsSync(input)) throw new Error('Input SVG not found: ' + input);
    for (const size of sizes) {
      const out = path.join(outDir, `favicon-${size}.png`);
      await sharp(input)
        .resize(size, size)
        .png({ quality: 90 })
        .toFile(out);
      console.log('Generated', out);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
