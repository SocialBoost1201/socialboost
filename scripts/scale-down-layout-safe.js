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
      
      // Spacing
      content = content.replace(/\bpy-32\b/g, 'py-20');
      content = content.replace(/\bmd:py-32\b/g, 'md:py-20');
      content = content.replace(/\bpy-28\b/g, 'py-16');
      content = content.replace(/\bmd:py-28\b/g, 'md:py-16');

      // Typography
      content = content.replace(/\b(text|md:text|lg:text|xl:text)-7xl\b/g, '$1-5xl');
      content = content.replace(/\b(text|md:text|lg:text|xl:text)-6xl\b/g, '$1-4xl');
      content = content.replace(/\b(text|md:text|lg:text|xl:text)-5xl\b/g, '$1-4xl');

      fs.writeFileSync(fullPath, content, 'utf-8');
    }
  }
}

processDir(path.join(process.cwd(), 'src'));
console.log("Safely scaled down typography and padding.");
