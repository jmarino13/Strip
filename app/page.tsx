const products = [
  "Tirzepatide",
  "Semaglutide",
  "NAD+",
  "PT-141 / Oxytocin",
  "BPC-157",
  "GHK-Cu",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <div className="brand">STRIP</div>
          <div className="navLinks">
            <a>Technology</a>
            <a>Products</a>
            <a>Providers</a>
            <a>Login</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">THE FUTURE OF PEPTIDE WELLNESS</p>
            <h1>Beyond Injection.</h1>
            <p className="heroText">
              Premium dissolvable peptide strips designed for sublingual
              delivery — bypassing stomach acid for better absorption than
              capsules, without the needle.
            </p>
            <div className="buttons">
              <a className="primary">Shop Strips</a>
              <a className="secondary">Explore Technology</a>
            </div>
          </div>

          <div className="productVisual">
            <div className="glowRing"></div>
            <div className="pack">
              <div className="packLogo">STRIP</div>
              <div className="packTag">BEYOND INJECTION.</div>
              <div className="label">REJUVENATE<br />NAD+</div>
              <small>30 ORAL STRIPS</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">PRECISION. PURITY. PERFORMANCE.</p>
        <h2>Medical grade peptide strips built for modern wellness.</h2>
        <div className="featureGrid">
          <div className="card">Bypasses stomach acid</div>
          <div className="card">Sublingual delivery</div>
          <div className="card">No injections required</div>
          <div className="card">Designed for compliance</div>
        </div>
      </section>

      <section className="section dark">
        <p className="eyebrow">HOW IT WORKS</p>
        <h2>Place. Dissolve. Absorb.</h2>
        <div className="steps">
          <div><span>01</span><h3>Place Strip</h3><p>Place the dissolvable strip under the tongue.</p></div>
          <div><span>02</span><h3>Dissolve</h3><p>The strip dissolves quickly through oral strip technology.</p></div>
          <div><span>03</span><h3>Absorb</h3><p>Designed for sublingual delivery through the oral mucosa.</p></div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">FEATURED PRODUCTS</p>
        <h2>Premium strips for targeted wellness goals.</h2>
        <div className="productGrid">
          {products.map((product) => (
            <div className="productCard" key={product}>
              <div className="stripIcon"></div>
              <h3>{product}</h3>
              <p>Medical grade dissolvable peptide strip.</p>
              <button>View Product</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
