const sharp = require('sharp');
const path = require('path');

async function checkImages() {
  const logo = await sharp(path.join(process.cwd(), 'public', 'logo.png')).metadata();
  const manifest = await sharp(path.join(process.cwd(), 'public', 'web-app-manifest-512x512.png')).metadata();
  
  console.log('logo.png:', logo.width, 'x', logo.height, 'format:', logo.format, 'size:', logo.size);
  console.log('manifest:', manifest.width, 'x', manifest.height, 'format:', manifest.format, 'size:', manifest.size);
}

checkImages().catch(console.error);
