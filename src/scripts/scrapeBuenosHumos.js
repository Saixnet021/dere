import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const TARGET_URL = 'https://buenoshumossmokeshop.com/';
const OUTPUT_DIR = path.resolve('public/images/products');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(downloadFile(res.headers.location, dest));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Fetching Buenos Humos Smoke Shop HTML...');
  const html = await fetchUrl(TARGET_URL);
  
  // Extraer todas las imágenes de productos (wp-content/uploads/...)
  const imgRegex = /https:\/\/buenoshumossmokeshop\.com\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/[^"'\s)]+\.(jpg|jpeg|png|webp)/gi;
  const matches = [...new Set(html.match(imgRegex) || [])];
  
  console.log(`Found ${matches.length} image URLs`);

  // Filtrar imágenes relevantes de productos (sin logos ni icons de plugins)
  const productImgs = matches.filter(url => {
    const lower = url.toLowerCase();
    return !lower.includes('cropped-bhicon') && 
           !lower.includes('logo') && 
           !lower.includes('slider') && 
           !lower.includes('banner-') &&
           !lower.includes('32x32') &&
           !lower.includes('180x180') &&
           !lower.includes('192x192');
  });

  console.log(`Found ${productImgs.length} candidate product images.`);

  let downloaded = 0;
  for (let i = 0; i < productImgs.length; i++) {
    const imgUrl = productImgs[i];
    const filename = path.basename(imgUrl.split('?')[0]);
    const destPath = path.join(OUTPUT_DIR, filename);
    
    try {
      console.log(`[${i+1}/${productImgs.length}] Downloading ${filename}...`);
      await downloadFile(imgUrl, destPath);
      downloaded++;
    } catch (err) {
      console.error(`Failed to download ${imgUrl}:`, err.message);
    }
  }

  console.log(`Successfully downloaded ${downloaded} real product images from Buenos Humos Smoke Shop Perú!`);
}

run().catch(console.error);
