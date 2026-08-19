import { atom } from 'nanostores';

export interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  categoryName: string;
  quantity: number;
}

const STORAGE_KEY = 'aph_cart_v1';

// Initial state from localStorage if running in browser
function getInitialCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Error reading cart from localStorage', e);
    return [];
  }
}

export const $cart = atom<CartItem[]>([]);
export const $isCartOpen = atom<boolean>(false);

// Initialize on client
if (typeof window !== 'undefined') {
  $cart.set(getInitialCart());
  
  $cart.subscribe((items) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      // Dispatch custom event for vanilla scripts
      window.dispatchEvent(new CustomEvent('cart-changed', { detail: { items } }));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  });
}

export function addToCart(product: { id: string; name: string; slug: string; price: number; image: string; categoryName: string }, quantity = 1) {
  const currentItems = $cart.get();
  const existingIndex = currentItems.findIndex((item) => item.id === product.id);

  if (existingIndex > -1) {
    const updated = [...currentItems];
    updated[existingIndex] = {
      ...updated[existingIndex],
      quantity: updated[existingIndex].quantity + quantity
    };
    $cart.set(updated);
  } else {
    $cart.set([
      ...currentItems,
      {
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        image: product.image,
        categoryName: product.categoryName,
        quantity: Math.max(1, quantity)
      }
    ]);
  }

  // Open drawer and trigger toast
  $isCartOpen.set(true);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cart-toast', { 
      detail: { name: product.name, quantity } 
    }));
  }
}

export function removeFromCart(productId: string) {
  const currentItems = $cart.get();
  $cart.set(currentItems.filter((item) => item.id !== productId));
}

export function updateQuantity(productId: string, quantity: number) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  const currentItems = $cart.get();
  $cart.set(
    currentItems.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    )
  );
}

export function clearCart() {
  $cart.set([]);
}

export function getCartTotal(): number {
  return $cart.get().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartCount(): number {
  return $cart.get().reduce((sum, item) => sum + item.quantity, 0);
}
