"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CartItem = {
  slug: string;
  name: string;
  price: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("stripCart") || "[]");
    setCart(savedCart);
  }, []);

  function updateCart(newCart: CartItem[]) {
    setCart(newCart);
    localStorage.setItem("stripCart", JSON.stringify(newCart));
  }

  function removeItem(slug: string) {
    updateCart(cart.filter((item) => item.slug !== slug));
  }

  function changeQuantity(slug: string, amount: number) {
    const updated = cart
      .map((item) =>
        item.slug === slug
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      );

    updateCart(updated);
  }

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price.replace("$", "")) * item.quantity;
  }, 0);

  return (
    <main className="section">
      <p className="eyebrow">STRIP CART</p>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <div className="card glass">
          <p>Your cart is empty.</p>
          <Link href="/products" className="primary">
            Shop Products
          </Link>
        </div>
      ) : (
        <>
          <div className="cartList">
            {cart.map((item) => (
              <div className="cartItem glass" key={item.slug}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>

                <div className="quantityControls">
                  <button onClick={() => changeQuantity(item.slug, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => changeQuantity(item.slug, 1)}>+</button>
                </div>

                <button onClick={() => removeItem(item.slug)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cartSummary glass">
            <h3>Total</h3>
            <h2>${total}</h2>
            <button>Checkout Coming Next</button>
          </div>
        </>
      )}
    </main>
  );
}