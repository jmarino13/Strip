import { products } from "@/lib/products";

export default function ProviderPortalPage() {
  return (
    <main className="section">
      <p className="eyebrow">PROVIDER DASHBOARD</p>
      <h2>Wholesale Ordering Portal</h2>

      <div className="dashboardGrid">
        <div className="card glass">
          <h3>Pending Orders</h3>
          <p>0</p>
        </div>

        <div className="card glass">
          <h3>Inventory Alerts</h3>
          <p>0</p>
        </div>

        <div className="card glass">
          <h3>Wholesale Account</h3>
          <p>Pending approval</p>
        </div>
      </div>

      <section style={{ marginTop: "60px" }}>
        <p className="eyebrow">WHOLESALE CATALOG</p>
        <h2>Available Provider Products</h2>

        <div className="productGrid">
          {products.map((product) => (
            <div className="productCard glass" key={product.slug}>
              <p className="eyebrow">{product.category}</p>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h2>{product.price}</h2>
              <button>Request Wholesale Order</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}