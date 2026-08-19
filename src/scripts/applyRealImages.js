import fs from 'node:fs';
import path from 'node:path';

const brainDir = 'C:\\Users\\Anderson\\.gemini\\antigravity-ide\\brain\\9215a314-db96-4896-be52-5e87d590557a';
const productsDir = path.resolve('public/images/products');
const imagesDir = path.resolve('public/images');

// Copy generated photos
const copies = [
  {
    src: path.join(brainDir, 'bong_beaker_real_1787097352301.jpg'),
    dest: path.join(productsDir, 'bong-beaker-30cm.jpg')
  },
  {
    src: path.join(brainDir, 'grinder_aluminio_real_1787097366621.jpg'),
    dest: path.join(productsDir, 'grinder-aluminio-63mm.jpg')
  },
  {
    src: path.join(brainDir, 'filtros_actitube_real_1787097380970.jpg'),
    dest: path.join(productsDir, 'filtros-actitube.jpg')
  },
  {
    src: path.join(brainDir, 'hero_banner_real_1787097398291.jpg'),
    dest: path.join(imagesDir, 'hero-banner.jpg')
  }
];

for (const item of copies) {
  if (fs.existsSync(item.src)) {
    fs.copyFileSync(item.src, item.dest);
    console.log(`Copied ${item.src} -> ${item.dest}`);
  }
}

// Update products.json to point to .jpg images
const productsJsonPath = path.resolve('src/data/products.json');
const products = JSON.parse(fs.readFileSync(productsJsonPath, 'utf-8'));

for (const p of products) {
  p.image = p.image.replace('.svg', '.jpg');
}

fs.writeFileSync(productsJsonPath, JSON.stringify(products, null, 2));
console.log('Updated products.json with real image paths!');
