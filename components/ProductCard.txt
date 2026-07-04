type ProductProps = {
  name: string;
  category: string;
  description: string;
  price: string;
};

export default function ProductCard({
  name,
  category,
  description,
  price,
}: ProductProps) {
  return (
    <div className="productCard">
      <div className="stripIcon" />

      <p className="eyebrow">{category}</p>

      <h3>{name}</h3>

      <p>{description}</p>

      <div className="price">{price}</div>

      <button>Add to Cart</button>
    </div>
  );
}