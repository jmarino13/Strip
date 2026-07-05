type CartItem = {
  slug: string;
  name: string;
  price: string;
  quantity: number;
};

let cart: CartItem[] = [];

export function getCart() {
  return cart;
}

export function addToCart(item: Omit<CartItem, "quantity">) {
  const existing = cart.find((i) => i.slug === item.slug);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  return cart;
}

export function removeFromCart(slug: string) {
  cart = cart.filter((item) => item.slug !== slug);
  return cart;
}

export function clearCart() {
  cart = [];
  return cart;
}