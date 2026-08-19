import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('public/images/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Function to generate fine-line minimalist SVGs (STRICTLY NO GRADIENTS)
const svgTemplates = {
  'filtros-actitube': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Box Outline -->
        <rect x="110" y="110" width="180" height="180" rx="4" fill="#F9FAFB"/>
        <line x1="110" y1="160" x2="290" y2="160" stroke="#2D5A3D"/>
        <!-- Carbon Filter details -->
        <rect x="140" y="190" width="120" height="36" rx="18" fill="#FFFFFF" stroke="#2D5A3D"/>
        <line x1="170" y1="190" x2="170" y2="226"/>
        <line x1="230" y1="190" x2="230" y2="226"/>
        <circle cx="155" cy="208" r="4" fill="#2D5A3D"/>
        <circle cx="245" cy="208" r="4" fill="#2D5A3D"/>
        <!-- Dots for carbon -->
        <circle cx="190" cy="205" r="2" fill="#2D5A3D"/>
        <circle cx="205" cy="210" r="2" fill="#2D5A3D"/>
        <circle cx="215" cy="204" r="2" fill="#2D5A3D"/>
        <circle cx="180" cy="211" r="2" fill="#2D5A3D"/>
        <text x="200" y="142" font-family="sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="#2D5A3D" text-anchor="middle" stroke="none">ACTITUBE</text>
        <text x="200" y="260" font-family="sans-serif" font-size="10" letter-spacing="1.5" fill="#4B5563" text-anchor="middle" stroke="none">8MM ACTIVE CARBON</text>
      </g>
    </svg>`,

  'tip-vidrio-roor': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Glass Tips -->
        <rect x="130" y="130" width="140" height="40" rx="8" fill="#F4F8F5" stroke="#2D5A3D"/>
        <line x1="160" y1="130" x2="160" y2="170" stroke-dasharray="3 3"/>
        <path d="M220 142 L230 150 L220 158" fill="none"/>
        <rect x="130" y="190" width="140" height="40" rx="8" fill="#F4F8F5" stroke="#2D5A3D"/>
        <line x1="160" y1="190" x2="160" y2="230" stroke-dasharray="3 3"/>
        <path d="M220 202 L230 210 L220 218" fill="none"/>
        <rect x="130" y="250" width="140" height="40" rx="8" fill="#F4F8F5" stroke="#2D5A3D"/>
        <line x1="160" y1="250" x2="160" y2="290" stroke-dasharray="3 3"/>
        <path d="M220 262 L230 270 L220 278" fill="none"/>
        <text x="200" y="105" font-family="sans-serif" font-size="11" font-weight="600" letter-spacing="2" fill="#2D5A3D" text-anchor="middle" stroke="none">BOROSILICATE GLASS</text>
      </g>
    </svg>`,

  'filtros-purize': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <path d="M120 120 C120 100 280 100 280 120 L270 290 C270 300 130 300 130 290 Z" fill="#F9FAFB"/>
        <line x1="120" y1="140" x2="280" y2="140"/>
        <circle cx="200" cy="200" r="30" fill="#FFFFFF" stroke="#2D5A3D"/>
        <text x="200" y="205" font-family="sans-serif" font-size="11" font-weight="700" letter-spacing="1" fill="#2D5A3D" text-anchor="middle" stroke="none">PURIZE</text>
        <text x="200" y="250" font-family="sans-serif" font-size="9" letter-spacing="2" fill="#6B7280" text-anchor="middle" stroke="none">ORGANIC WOOD</text>
      </g>
    </svg>`,

  'raw-black-kingsize': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Booklet -->
        <rect x="100" y="140" width="200" height="120" rx="4" fill="#111827" stroke="#111827"/>
        <rect x="106" y="146" width="188" height="108" rx="2" fill="#1F2937" stroke="#374151" stroke-width="1"/>
        <text x="200" y="200" font-family="sans-serif" font-size="28" font-weight="900" letter-spacing="3" fill="#E5E7EB" text-anchor="middle" stroke="none">RAW</text>
        <text x="200" y="222" font-family="sans-serif" font-size="11" font-weight="700" letter-spacing="4" fill="#4A7C59" text-anchor="middle" stroke="none">BLACK</text>
        <text x="200" y="240" font-family="sans-serif" font-size="8" letter-spacing="2" fill="#9CA3AF" text-anchor="middle" stroke="none">EXTRA FINE - KING SIZE</text>
      </g>
    </svg>`,

  'elements-arroz': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <rect x="100" y="140" width="200" height="120" rx="4" fill="#F4F8F5" stroke="#2D5A3D"/>
        <line x1="100" y1="170" x2="300" y2="170"/>
        <text x="200" y="210" font-family="sans-serif" font-size="20" font-weight="800" letter-spacing="2" fill="#2D5A3D" text-anchor="middle" stroke="none">ELEMENTS</text>
        <text x="200" y="235" font-family="sans-serif" font-size="9" letter-spacing="2" fill="#4B5563" text-anchor="middle" stroke="none">RICE ROLLING PAPERS</text>
        <circle cx="200" cy="155" r="4" fill="#2D5A3D"/>
      </g>
    </svg>`,

  'conos-raw': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Cones -->
        <polygon points="140,110 260,110 220,300 180,300" fill="#F9FAFB" stroke="#2D5A3D"/>
        <line x1="180" y1="260" x2="220" y2="260"/>
        <line x1="150" y1="130" x2="250" y2="130"/>
        <text x="200" y="180" font-family="sans-serif" font-size="14" font-weight="800" fill="#2D5A3D" text-anchor="middle" stroke="none">RAW</text>
        <text x="200" y="200" font-family="sans-serif" font-size="9" letter-spacing="1.5" fill="#4B5563" text-anchor="middle" stroke="none">CLASSIC CONES</text>
        <text x="200" y="285" font-family="sans-serif" font-size="8" fill="#2D5A3D" text-anchor="middle" stroke="none">1 1/4</text>
      </g>
    </svg>`,

  'bong-beaker-30cm': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Bong Neck -->
        <path d="M185 80 L215 80 L215 220 L275 310 C280 320 270 330 260 330 L140 330 C130 330 120 320 125 310 L185 220 Z" fill="#F4F8F5"/>
        <!-- Mouthpiece ring -->
        <rect x="180" y="75" width="40" height="8" rx="4" fill="#2D5A3D" stroke="none"/>
        <!-- Ice Catcher pinches -->
        <path d="M185 170 L195 175 L185 180" fill="none"/>
        <path d="M215 170 L205 175 L215 180" fill="none"/>
        <!-- Downstem and Bowl -->
        <line x1="225" y1="240" x2="260" y2="205" stroke="#2D5A3D" stroke-width="2.5"/>
        <circle cx="265" cy="200" r="10" fill="#FFFFFF" stroke="#2D5A3D" stroke-width="2"/>
        <!-- Water Level Indicator -->
        <line x1="145" y1="300" x2="255" y2="300" stroke="#4A7C59" stroke-dasharray="4 3"/>
      </g>
    </svg>`,

  'bong-honeycomb': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Straight Cylinder Bong -->
        <rect x="175" y="80" width="50" height="240" rx="4" fill="#F4F8F5"/>
        <rect x="140" y="320" width="120" height="15" rx="4" fill="#FFFFFF" stroke="#2D5A3D"/>
        <!-- Double Honeycomb Discs -->
        <rect x="175" y="240" width="50" height="8" fill="#2D5A3D"/>
        <rect x="175" y="270" width="50" height="8" fill="#2D5A3D"/>
        <!-- Joint & Bowl -->
        <path d="M225 285 L260 260" stroke="#2D5A3D" stroke-width="2.5"/>
        <circle cx="265" cy="255" r="11" fill="#FFFFFF" stroke="#2D5A3D"/>
        <!-- Splashguard -->
        <path d="M190 150 L200 140 L210 150" fill="none"/>
        <text x="200" y="65" font-family="sans-serif" font-size="10" font-weight="700" letter-spacing="1.5" fill="#2D5A3D" text-anchor="middle" stroke="none">HONEYCOMB 35CM</text>
      </g>
    </svg>`,

  'mini-bong': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <path d="M185 120 L215 120 L215 220 C235 230 250 250 250 280 C250 310 225 330 200 330 C175 330 150 310 150 280 C150 250 165 230 185 220 Z" fill="#F4F8F5"/>
        <rect x="180" y="115" width="40" height="8" rx="4" fill="#2D5A3D" stroke="none"/>
        <line x1="215" y1="240" x2="255" y2="210" stroke="#2D5A3D" stroke-width="2"/>
        <circle cx="260" cy="205" r="8" fill="#FFFFFF" stroke="#2D5A3D"/>
      </g>
    </svg>`,

  'pipa-spoon-vidrio': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Glass Spoon Pipe Profile -->
        <path d="M100 200 C100 170 140 160 170 180 L280 190 C295 190 300 200 300 205 C300 210 295 220 280 220 L170 230 C140 250 100 240 100 200 Z" fill="#F4F8F5"/>
        <!-- Bowl indentation -->
        <ellipse cx="135" cy="195" rx="20" ry="15" fill="#FFFFFF" stroke="#2D5A3D"/>
        <!-- Carb hole -->
        <circle cx="115" cy="180" r="4" fill="#2D5A3D"/>
        <!-- Mouthpiece hole -->
        <circle cx="295" cy="205" r="3" fill="#2D5A3D"/>
        <text x="200" y="270" font-family="sans-serif" font-size="10" font-weight="600" letter-spacing="2" fill="#4B5563" text-anchor="middle" stroke="none">SPOON CLASSIC 10CM</text>
      </g>
    </svg>`,

  'pipa-metal-madera': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Metal Body -->
        <rect x="110" y="170" width="180" height="60" rx="8" fill="#111827" stroke="#111827"/>
        <!-- Wood Inlay -->
        <rect x="130" y="180" width="90" height="40" rx="4" fill="#78350F" stroke="#B45309" stroke-width="1"/>
        <circle cx="260" cy="200" r="14" fill="#374151" stroke="#E5E7EB"/>
        <circle cx="260" cy="200" r="4" fill="#111827"/>
        <line x1="110" y1="200" x2="100" y2="200" stroke="#111827" stroke-width="3"/>
        <text x="200" y="265" font-family="sans-serif" font-size="10" font-weight="600" letter-spacing="1.5" fill="#4B5563" text-anchor="middle" stroke="none">MAGNETIC FOLDABLE PIPE</text>
      </g>
    </svg>`,

  'pipa-bubbler': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="190" cy="240" rx="50" ry="45" fill="#F4F8F5"/>
        <path d="M190 195 L190 140 C190 130 205 130 205 140 L205 170" fill="none"/>
        <circle cx="198" cy="135" r="14" fill="#FFFFFF" stroke="#2D5A3D"/>
        <!-- Bent Neck -->
        <path d="M230 220 C260 200 270 170 260 140" fill="none" stroke-width="2"/>
        <line x1="160" y1="285" x2="220" y2="285" stroke-width="3"/>
      </g>
    </svg>`,

  'vape-xmax-v3pro': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Vape Body -->
        <rect x="160" y="90" width="80" height="230" rx="10" fill="#111827" stroke="#111827"/>
        <rect x="175" y="70" width="50" height="25" rx="5" fill="#374151" stroke="#4B5563"/>
        <!-- OLED Screen -->
        <rect x="175" y="160" width="50" height="70" rx="3" fill="#030712" stroke="#374151"/>
        <text x="200" y="185" font-family="monospace" font-size="12" font-weight="700" fill="#2D5A3D" text-anchor="middle" stroke="none">200°C</text>
        <text x="200" y="205" font-family="monospace" font-size="9" fill="#9CA3AF" text-anchor="middle" stroke="none">SESSION</text>
        <circle cx="200" cy="125" r="10" fill="#1F2937" stroke="#4B5563"/>
        <rect x="185" y="250" width="12" height="12" rx="2" fill="#1F2937"/>
        <rect x="203" y="250" width="12" height="12" rx="2" fill="#1F2937"/>
        <text x="200" y="305" font-family="sans-serif" font-size="8" letter-spacing="1" fill="#6B7280" text-anchor="middle" stroke="none">XMAX V3 PRO</text>
      </g>
    </svg>`,

  'vape-dynavap-m': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Surgical Steel Body -->
        <rect x="185" y="70" width="30" height="260" rx="4" fill="#F3F4F6" stroke="#2D5A3D"/>
        <!-- Captive Cap with fin cuts -->
        <rect x="183" y="70" width="34" height="45" rx="3" fill="#E5E7EB" stroke="#2D5A3D"/>
        <line x1="183" y1="82" x2="217" y2="82"/>
        <line x1="183" y1="94" x2="217" y2="94"/>
        <line x1="183" y1="106" x2="217" y2="106"/>
        <!-- Textured stem -->
        <line x1="185" y1="150" x2="215" y2="150"/>
        <line x1="185" y1="165" x2="215" y2="165"/>
        <line x1="185" y1="180" x2="215" y2="180"/>
        <circle cx="200" cy="220" r="3" fill="#2D5A3D"/>
        <text x="200" y="355" font-family="sans-serif" font-size="10" font-weight="700" letter-spacing="1.5" fill="#2D5A3D" text-anchor="middle" stroke="none">DYNAVAP "M" PLUS</text>
      </g>
    </svg>`,

  'soplete-clipper-metal': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <rect x="170" y="130" width="60" height="170" rx="8" fill="#F4F8F5" stroke="#2D5A3D"/>
        <!-- Burner head -->
        <path d="M175 130 L175 90 L210 90 L225 130 Z" fill="#E5E7EB" stroke="#2D5A3D"/>
        <circle cx="200" cy="110" r="5" fill="#2D5A3D"/>
        <!-- Lever -->
        <path d="M210 95 L245 110 L225 130" fill="#2D5A3D" stroke="none"/>
        <text x="200" y="220" font-family="sans-serif" font-size="12" font-weight="800" fill="#2D5A3D" text-anchor="middle" stroke="none">CLIPPER</text>
        <text x="200" y="240" font-family="sans-serif" font-size="9" letter-spacing="2" fill="#4B5563" text-anchor="middle" stroke="none">METAL TORCH</text>
      </g>
    </svg>`,

  'clipper-sage': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <rect x="175" y="140" width="50" height="160" rx="10" fill="#4A7C59" stroke="#2D5A3D"/>
        <rect x="180" y="100" width="40" height="40" rx="4" fill="#D1D5DB" stroke="#2D5A3D"/>
        <circle cx="190" cy="115" r="8" fill="#4B5563"/>
        <text x="200" y="220" font-family="sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle" stroke="none">CLIPPER</text>
        <text x="200" y="330" font-family="sans-serif" font-size="10" letter-spacing="1.5" fill="#4A7C59" text-anchor="middle" stroke="none">MATTE SAGE</text>
      </g>
    </svg>`,

  'hemp-wick-raw': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="200" cy="200" rx="80" ry="80" fill="#F4F8F5" stroke="#2D5A3D"/>
        <ellipse cx="200" cy="200" rx="40" ry="40" fill="#FFFFFF" stroke="#2D5A3D"/>
        <path d="M200 120 C240 120 270 155 270 200 C270 240 240 270 200 270 C160 270 130 240 130 200" stroke="#B45309" stroke-width="2" stroke-dasharray="3 3"/>
        <text x="200" y="195" font-family="sans-serif" font-size="12" font-weight="800" fill="#2D5A3D" text-anchor="middle" stroke="none">RAW</text>
        <text x="200" y="212" font-family="sans-serif" font-size="8" letter-spacing="1" fill="#4B5563" text-anchor="middle" stroke="none">HEMP WICK 6M</text>
      </g>
    </svg>`,

  'grinder-aluminio-63mm': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- 4-Piece Grinder Stack -->
        <rect x="110" y="130" width="180" height="35" rx="6" fill="#1F2937" stroke="#111827"/>
        <rect x="110" y="170" width="180" height="40" fill="#374151" stroke="#111827"/>
        <rect x="110" y="215" width="180" height="25" fill="#4B5563" stroke="#111827"/>
        <rect x="110" y="245" width="180" height="35" rx="6" fill="#1F2937" stroke="#111827"/>
        <!-- Grip notches -->
        <line x1="125" y1="135" x2="125" y2="160" stroke="#9CA3AF"/>
        <line x1="140" y1="135" x2="140" y2="160" stroke="#9CA3AF"/>
        <line x1="260" y1="135" x2="260" y2="160" stroke="#9CA3AF"/>
        <line x1="275" y1="135" x2="275" y2="160" stroke="#9CA3AF"/>
        <circle cx="200" cy="148" r="4" fill="#2D5A3D"/>
        <text x="200" y="310" font-family="sans-serif" font-size="11" font-weight="700" letter-spacing="2" fill="#2D5A3D" text-anchor="middle" stroke="none">AEROSPACE ALUMINUM 63MM</text>
      </g>
    </svg>`,

  'bandeja-metal-blanca': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <rect x="70" y="120" width="260" height="160" rx="16" fill="#F9FAFB" stroke="#2D5A3D" stroke-width="2"/>
        <rect x="85" y="135" width="230" height="130" rx="10" fill="#FFFFFF" stroke="#E5E7EB"/>
        <!-- Minimal Leaf in Center -->
        <path d="M200 170 C190 185 190 205 200 220 C210 205 210 185 200 170 Z" fill="#F4F8F5" stroke="#2D5A3D"/>
        <line x1="200" y1="178" x2="200" y2="218" stroke="#2D5A3D"/>
        <text x="200" y="245" font-family="sans-serif" font-size="9" font-weight="600" letter-spacing="3" fill="#6B7280" text-anchor="middle" stroke="none">ARTÍCULOS PARA HIERBAS</text>
      </g>
    </svg>`,

  'frasco-uv-250ml': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Jar Lid -->
        <rect x="135" y="100" width="130" height="30" rx="4" fill="#111827" stroke="#111827"/>
        <!-- Violet Glass Body -->
        <rect x="125" y="130" width="150" height="170" rx="8" fill="#1E1B4B" stroke="#2D5A3D"/>
        <rect x="145" y="160" width="110" height="110" rx="4" fill="#FFFFFF" stroke="#E5E7EB"/>
        <text x="200" y="205" font-family="sans-serif" font-size="11" font-weight="700" letter-spacing="1" fill="#2D5A3D" text-anchor="middle" stroke="none">UV GLASS</text>
        <text x="200" y="225" font-family="sans-serif" font-size="9" letter-spacing="1.5" fill="#4B5563" text-anchor="middle" stroke="none">250 ML / AIRTIGHT</text>
      </g>
    </svg>`,

  'kit-limpieza': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#FFFFFF"/>
      <rect x="20" y="20" width="360" height="360" rx="6" stroke="#E5E7EB" stroke-width="1"/>
      <g stroke="#2D5A3D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Cleaning bottle -->
        <rect x="120" y="150" width="90" height="150" rx="6" fill="#F4F8F5" stroke="#2D5A3D"/>
        <rect x="145" y="110" width="40" height="40" rx="3" fill="#FFFFFF" stroke="#2D5A3D"/>
        <line x1="145" y1="125" x2="185" y2="125"/>
        <text x="165" y="210" font-family="sans-serif" font-size="10" font-weight="700" letter-spacing="1" fill="#2D5A3D" text-anchor="middle" stroke="none">BIO</text>
        <text x="165" y="230" font-family="sans-serif" font-size="8" fill="#4B5563" text-anchor="middle" stroke="none">CLEAN</text>
        <!-- Brushes -->
        <line x1="260" y1="100" x2="260" y2="300" stroke="#111827" stroke-width="2"/>
        <rect x="250" y="110" width="20" height="70" rx="4" fill="#2D5A3D" stroke="none"/>
        <line x1="285" y1="130" x2="285" y2="300" stroke="#111827" stroke-width="1.5"/>
        <rect x="278" y="140" width="14" height="50" rx="3" fill="#4A7C59" stroke="none"/>
      </g>
    </svg>`
};

for (const [key, content] of Object.entries(svgTemplates)) {
  const filePath = path.join(outDir, `${key}.svg`);
  fs.writeFileSync(filePath, content.trim());
  console.log(`Generated ${filePath}`);
}

console.log('All SVGs generated successfully.');
