import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <main className="section">
      <p className="eyebrow">STRIP PRODUCT CATALOG</p>

      <h2>Premium Peptide Strips</h2>

      <div className="productGrid">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            name={product.name}
            category={product.category}
            description={product.description}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </main>
  );
}