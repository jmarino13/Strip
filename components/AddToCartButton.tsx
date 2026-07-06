"use client";

type Props = {
  slug: string;
  name: string;
  price: string;
};

export default function AddToCartButton({ slug, name, price }: Props) {
  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("stripCart") || "[]");

    const existing = cart.find((item: any) => item.slug === slug);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ slug, name, price, quantity: 1 });
    }

    localStorage.setItem("stripCart", JSON.stringify(cart));
    alert("Added to cart");
  }

  return <button onClick={addToCart}>Add to Cart</button>;
}