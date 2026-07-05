import Link from "next/link";

export default function ProvidersPage() {
  return (
    <main>
      <section className="providerHero">
        <p className="eyebrow">STRIP PROVIDER PORTAL</p>
        <h1>Built for clinics, providers, and wellness partners.</h1>
        <p>
          Access wholesale peptide strip ordering, provider resources, inventory
          support, certificates, and fulfillment tools through the STRIP partner
          portal.
        </p>

        <div className="buttons">
          <Link href="/provider-portal" className="primary">
            Enter Provider Portal
          </Link>
          <Link href="/contact" className="secondary">
            Apply for Access
          </Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">WHOLESALE PLATFORM</p>
        <h2>Everything providers need to scale peptide strip ordering.</h2>

        <div className="featureGrid">
          <div className="card glass">Wholesale pricing access</div>
          <div className="card glass">Bulk ordering</div>
          <div className="card glass">Order fulfillment tracking</div>
          <div className="card glass">Inventory support</div>
        </div>
      </section>

      <section className="section dark">
        <p className="eyebrow">PROVIDER BENEFITS</p>
        <h2>A premium strip platform for modern wellness clinics.</h2>

        <div className="steps">
          <div>
            <span>01</span>
            <h3>Apply</h3>
            <p>Providers request access to the STRIP wholesale portal.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Order</h3>
            <p>Approved providers can order peptide strips for clinic use.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Fulfill</h3>
            <p>Track orders, inventory status, and fulfillment updates.</p>
          </div>
        </div>
      </section>
    </main>
  );
}