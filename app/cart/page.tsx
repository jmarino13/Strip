import { getCart } from "@/lib/cart";

export default function CartPage() {
  const cart = getCart();

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price.replace("$", "")) * item.quantity;
  }, 0);

  return (
    <main className="section">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.slug} className="productCard">
              <h3>{item.name}</h3>
              <p>{item.quantity} × {item.price}</p>
            </div>
          ))}

          <h2>Total: ${total}</h2>

          <button>Checkout (Stripe coming next)</button>
        </>
      )}
    </main>
  );
}