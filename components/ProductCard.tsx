"use client";

type Props = {
  name: string;
  category: string;
  description: string;
  price: string;
  slug: string;
};

export default function ProductCard({
  name,
  category,
  description,
  price,
  slug,
}: Props) {
  return (
    <div className="productCard glass">
      <div style={{ fontSize: 12, color: "#9b5cff" }}>{category}</div>

      <h3>{name}</h3>

      <p style={{ color: "#aaa" }}>{description}</p>

      <h2 style={{ color: "#d4af37" }}>{price}</h2>

      <button
  onClick={async () => {
    await fetch("/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug,
        name,
        price,
      }),
    });

    alert("Added to cart");
  }}
>
  Add to Cart
</button>
    </div>
  );
}