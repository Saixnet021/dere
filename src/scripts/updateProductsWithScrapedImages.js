import fs from 'fs';
import path from 'path';

const productsPath = path.resolve('src/data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

// Mapear con imágenes reales descargadas de buenoshumossmokeshop.com
const updates = {
  'bng-001': {
    name: 'Bong Straight Tube Roor Germany 45cm Borosilicato',
    image: '/images/products/bong-straight-tube-roor-germany-original-45cm-3.jpeg',
    price: 185.00,
    originalPrice: 220.00
  },
  'bng-002': {
    name: 'Bong Recycler Purple Wigwag con Triple Percolador',
    image: '/images/products/bong_recycler_purple_wigwag.jpeg',
    price: 165.00,
    originalPrice: 195.00
  },
  'bng-003': {
    name: 'Bong Beaker Love Rosa Borosilicato 30cm',
    image: '/images/products/bong_beaker_love_rosa.jpeg',
    price: 95.00,
    originalPrice: 120.00
  },
  'pip-001': {
    name: 'Mini Rig Matrix Pastel Violet Vidrio Grueso',
    image: '/images/products/mini_rig_matrix_Pastel_Violet.jpeg',
    price: 75.00,
    originalPrice: 90.00
  },
  'pip-002': {
    name: 'Mini Rig Matrix Blue Color con Difusor',
    image: '/images/products/mini_rig_matrix_blue_color.jpeg',
    price: 75.00,
    originalPrice: 90.00
  },
  'pip-003': {
    name: 'Bong Rig Vidrio Soplado Elefante Peruano 420',
    image: '/images/products/bong-rig-vidrio-soplado-elefante-peruano.jpeg',
    price: 85.00,
    originalPrice: 110.00
  },
  'rol-001': {
    name: 'Papelillos Bob Marley King Size Slim Organic Hemp',
    image: '/images/products/bob-marley-king-size-slim-organic-hemp-peru-2.jpg',
    price: 7.50,
    originalPrice: 9.00
  },
  'rol-002': {
    name: 'Papelillos Lion Rolling Circus Hemp Terpenos Saborizados',
    image: '/images/products/Hemp-Rolling-Paper-Orange-Peru.jpg',
    price: 8.50,
    originalPrice: 10.00
  },
  'rol-003': {
    name: 'Conos King Palm Real Berry Terps Pre-Rolados',
    image: '/images/products/KINGPALMBERRYTERPS.webp',
    price: 12.00,
    originalPrice: 15.00
  },
  'vap-001': {
    name: 'Set Slurper 710 Green Showerhead Espacial',
    image: '/images/products/set_slurper_710_green_showerhead.jpeg',
    price: 145.00,
    originalPrice: 180.00
  },
  'vap-002': {
    name: 'Set Matrix Diamond Loop Banger Cuarzo 710',
    image: '/images/products/set_matrix_diamond_loop_banger.jpeg',
    price: 135.00,
    originalPrice: 160.00
  },
  'acc-001': {
    name: 'Carb Cap OVNI Empire Glass Works Alien UV',
    image: '/images/products/carb_cap_ovni_empire_glass_works_uv_4.png',
    price: 55.00,
    originalPrice: 70.00
  },
  'acc-004': {
    name: 'Atrapa Cenizas Ash Catcher Borosilicato 14mm',
    image: '/images/products/ash-catcher-atrapa-ceniza-vidrio-soplado.jpeg',
    price: 45.00,
    originalPrice: 55.00
  },
  'enc-003': {
    name: 'Mecha de Cáñamo Orgánico Hemp Wick Perú 6m',
    image: '/images/products/hempwick-peru-2.png',
    price: 14.00,
    originalPrice: 18.00
  }
};

const updatedProducts = products.map(p => {
  if (updates[p.id]) {
    return { ...p, ...updates[p.id] };
  }
  return p;
});

fs.writeFileSync(productsPath, JSON.stringify(updatedProducts, null, 2), 'utf-8');
console.log('Successfully updated products.json with real images from Buenos Humos Smoke Shop Perú!');
