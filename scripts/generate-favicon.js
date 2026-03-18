const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createRoundedIcon() {
  const inputPath = path.join(process.cwd(), 'public', 'web-app-manifest-512x512.png');
  const size = 512;
  const padding = 64; // Padding inside the circle
  const iconSize = size - padding * 2;
  const strokeWidth = 8; // Border thickness

  // Read the original logo
  const logoBuffer = await sharp(inputPath)
    .resize(iconSize, iconSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toBuffer();

  // Create an SVG for the rounded background with a border
  const svgCircle = `
    <svg width="${size}" height="${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - strokeWidth / 2}" fill="#ffffff" stroke="#e5e7eb" stroke-width="${strokeWidth}" />
    </svg>
  `;

  // Composite them together
  const finalImage = await sharp(Buffer.from(svgCircle))
    .composite([
      { input: logoBuffer, top: padding, left: padding }
    ])
    .png()
    .toBuffer();

  // Write the outputs
  fs.writeFileSync(path.join(process.cwd(), 'src', 'app', 'icon.png'), finalImage);
  fs.writeFileSync(path.join(process.cwd(), 'src', 'app', 'apple-icon.png'), finalImage);
  
  // Create a smaller version for standard favicon.ico
  const faviconIco = await sharp(finalImage)
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(process.cwd(), 'src', 'app', 'favicon.ico'), faviconIco);
  if (fs.existsSync(path.join(process.cwd(), 'public', 'favicon.ico'))) {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'favicon.ico'), faviconIco);
  }

  console.log("Successfully generated rounded icons.");
}

createRoundedIcon().catch(console.error);
