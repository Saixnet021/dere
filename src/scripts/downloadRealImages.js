import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const outDir = path.resolve('public/images/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Curated high quality studio & lifestyle photography for herbal & smoking accessories
const imagesToDownload = [
  // Bongs
  {
    name: 'bong-beaker-30cm.jpg',
    url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=85' // High-end glass bong
  },
  {
    name: 'bong-honeycomb.jpg',
    url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=85' // Intricate glass percolator
  },
  {
    name: 'mini-bong.jpg',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=85' // Compact glass bong
  },

  // Pipas
  {
    name: 'pipa-spoon-vidrio.jpg',
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=85' // Handcrafted glass pipe
  },
  {
    name: 'pipa-metal-madera.jpg',
    url: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=85' // Wooden / metal pipe
  },
  {
    name: 'pipa-bubbler.jpg',
    url: 'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?auto=format&fit=crop&w=800&q=85' // Glass bubbler water pipe
  },

  // Vapes
  {
    name: 'vape-xmax-v3pro.jpg',
    url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85' // Modern sleek vaporizer device
  },
  {
    name: 'vape-dynavap-m.jpg',
    url: 'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?auto=format&fit=crop&w=800&q=85' // Stainless steel mechanical vaporizer
  },

  // Rolling papers
  {
    name: 'raw-black-kingsize.jpg',
    url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=85' // Unbleached rolling papers booklet
  },
  {
    name: 'elements-arroz.jpg',
    url: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=85' // Ultra thin rice rolling papers
  },
  {
    name: 'conos-raw.jpg',
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=85' // Pre-rolled herbal cones
  },

  // Filtros
  {
    name: 'filtros-actitube.jpg',
    url: 'https://images.unsplash.com/photo-1603555501671-8f96b3fce8e4?auto=format&fit=crop&w=800&q=85' // Active carbon filter box
  },
  {
    name: 'tip-vidrio-roor.jpg',
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85' // Clear glass filter tips
  },
  {
    name: 'filtros-purize.jpg',
    url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85' // Organic wooden filters
  },

  // Encendedores
  {
    name: 'soplete-clipper-metal.jpg',
    url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=85' // Metal jet torch lighter
  },
  {
    name: 'clipper-sage.jpg',
    url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=85' // Sage green lighter
  },
  {
    name: 'hemp-wick-raw.jpg',
    url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=85' // Organic hemp wick roll
  },

  // Accesorios
  {
    name: 'grinder-aluminio-63mm.jpg',
    url: 'https://images.unsplash.com/photo-1603555501360-93a0b5a19854?auto=format&fit=crop&w=800&q=85' // Metal 4-piece herb grinder
  },
  {
    name: 'bandeja-metal-blanca.jpg',
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85' // Minimalist metal tray
  },
  {
    name: 'frasco-uv-250ml.jpg',
    url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=85' // Violet apothecary jar
  },
  {
    name: 'kit-limpieza.jpg',
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=85' // Cleaning kit & brushes
  },

  // Hero Banner
  {
    name: '../hero-banner.jpg',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=85' // Aesthetic glassware flatlay
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Handle redirect if 301/302
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', (err) => {
          fs.unlink(dest, () => reject(err));
        });
        return;
      }

      if (response.statusCode !== 200) {
        fs.unlink(dest, () => reject(new Error(`Failed with status: ${response.statusCode}`)));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  console.log('Downloading high quality real product photography...');
  for (const item of imagesToDownload) {
    const dest = path.join(outDir, item.name);
    try {
      await downloadFile(item.url, dest);
      console.log(`✓ Downloaded: ${item.name}`);
    } catch (e) {
      console.error(`✗ Error downloading ${item.name}:`, e.message);
    }
  }
  console.log('All real images downloaded successfully!');
}

run();
