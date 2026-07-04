import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <main className="section">
      <p className="eyebrow">
        STRIP PRODUCT CATALOG
      </p>

      <h2>Premium Peptide Strips</h2>

      <div className="productGrid">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            {...product}
          />
        ))}
      </div>
    </main>
  );
}