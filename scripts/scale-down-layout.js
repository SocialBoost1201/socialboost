const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      // Scale down massive vertical padding
      content = content.replace(/py-24 md:py-32/g, 'py-16 md:py-24');
      content = content.replace(/py-32/g, 'py-24');
      content = content.replace(/py-20 md:py-28/g, 'py-14 md:py-20');
      content = content.replace(/py-28/g, 'py-20');
      content = content.replace(/py-24/g, 'py-16');

      // Scale down massive text sizes
      // Replace text-6xl or 7xl with smaller ones
      content = content.replace(/text-7xl/g, 'text-5xl');
      content = content.replace(/text-6xl/g, 'text-4xl');

      // text-5xl -> text-4xl
      content = content.replace(/text-5xl/g, 'text-4xl');
      
      // text-4xl -> text-3xl
      content = content.replace(/text-4xl/g, 'text-3xl lg:text-4xl');

      // Reduce lg:text-[2.75rem] or similar huge manual sizes
      content = content.replace(/text-\[2\.75rem\]/g, 'text-[2.25rem]');
      content = content.replace(/text-\[2\.5rem\]/g, 'text-[2rem]');
      
      // Ensure we don't accidentally create weird duplication like text-3xl lg:text-3xl lg:text-4xl
      content = content.replace(/text-3xl lg:text-3xl lg:text-4xl/g, 'text-3xl lg:text-4xl');

      fs.writeFileSync(fullPath, content, 'utf-8');
    }
  }
}

processDir(path.join(process.cwd(), 'src'));
console.log("Successfully scaled down padding and typography in all src/ files.");
