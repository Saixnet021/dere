// Configuración global del sitio web 'Artículos para Hierbas' (Smoke Shop Perú 420)

export const STORE_CONFIG = {
  name: "Artículos para Hierbas",
  tagline: "Smoke Shop Cannábica 420 | Perú",
  description: "Smoke Shop especializado en parafernalia 420 en Perú. Bongs de borosilicato, vaporizadores de hierba seca, pipas de diseño, papelillos Raw, filtros de carbón y grinders con envíos discretos a todo el Perú.",
  // Número oficial de WhatsApp directo (Perú +51) sin dependencia de .env
  whatsappNumber: "51944104085",
  whatsappFormatted: "+51 944 104 085",
  currencySymbol: "S/",
  currencyCode: "PEN",
  freeShippingThreshold: 120, // Envío gratis a partir de S/ 120 en todo Perú
  contact: {
    phone: "+51 944 104 085",
    email: "contacto@articulosparahierbas.pe",
    city: "Lima, Perú",
    hours: "Lunes a Domingo: 10:00 AM - 10:00 PM"
  },
  categories: [
    { id: "todos", name: "Todos los productos 420", slug: "todos" },
    { id: "filtros", name: "Filtros & Boquillas", slug: "filtros" },
    { id: "rolling-papers", name: "Rolling Papers & Sedas", slug: "rolling-papers" },
    { id: "bongs", name: "Bongs & Percoladores", slug: "bongs" },
    { id: "pipas", name: "Pipas & Bubblers", slug: "pipas" },
    { id: "vapes", name: "Vaporizadores Herbales", slug: "vapes" },
    { id: "encendedores", name: "Sopletes & Encendedores", slug: "encendedores" },
    { id: "accesorios", name: "Grinders & Bandejas", slug: "accesorios" }
  ]
};

export function formatPrice(price: number): string {
  return `S/ ${price.toFixed(2)}`;
}
