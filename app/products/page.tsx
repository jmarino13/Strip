const products = [
  {
    name: "Tirzepatide Strip",
    category: "Metabolic Support",
    price: "$399",
    description: "A premium dissolvable peptide strip designed for modern metabolic wellness programs."
  },
  {
    name: "Semaglutide Strip",
    category: "Weight Management",
    price: "$349",
    description: "Sublingual strip delivery for patients seeking an alternative to capsules and injections."
  },
  {
    name: "NAD+ Strip",
    category: "Longevity",
    price: "$199",
    description: "Designed to support cellular energy, wellness, and healthy aging routines."
  },
  {
    name: "PT-141 / Oxytocin Strip",
    category: "Performance",
    price: "$249",
    description: "A dissolvable strip formulated for intimacy, mood, and performance-focused wellness."
  },
  {
    name: "BPC-157 Strip",
    category: "Recovery",
    price: "$199",
    description: "Designed for recovery-focused wellness and active lifestyle support."
  },
  {
    name: "GHK-Cu Strip",
    category: "Beauty + Repair",
    price: "$199",
    description: "A premium peptide strip for skin, beauty, and rejuvenation-focused protocols."
  }
];

export default function ProductsPage() {
  return (
    <main>
      <section className="section">
        <p className="eyebrow">STRIP PRODUCT CATALOG</p>
        <h2>Premium dissolvable peptide strips.</h2>

        <div className="productGrid">
          {products.map((product) => (
            <div className="productCard" key={product.name}>
              <div className="stripIcon"></div>
              <p className="eyebrow">{product.category}</p>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h3>{product.price}</h3>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
