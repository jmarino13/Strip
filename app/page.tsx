import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <section className="premiumHero">
        <div className="heroContent">
          <p className="eyebrow">THE FUTURE OF PEPTIDE WELLNESS</p>
          <h1>Beyond Injection.</h1>
          <p>
            Medical-grade dissolvable peptide strips designed for sublingual
            delivery, modern wellness, and a premium needle-free experience.
          </p>

          <div className="buttons">
            <Link href="/products" className="primary">Shop Strips</Link>
            <Link href="/technology" className="secondary">Learn the Technology</Link>
          </div>
        </div>

        <div className="heroImage">
          <Image
            src="/images/strip-hero.jpeg"
            alt="STRIP peptide wellness brand"
            width={900}
            height={900}
            priority
          />
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">WHY STRIP</p>
        <h2>Medical-grade oral strip technology.</h2>

        <div className="featureGrid">
          <div className="card glass">
            <h3>Needle-Free</h3>
            <p>A premium peptide experience without injections.</p>
          </div>

          <div className="card glass">
            <h3>Sublingual Delivery</h3>
            <p>Designed to dissolve under the tongue using oral strip technology.</p>
          </div>

          <div className="card glass">
            <h3>Modern Wellness</h3>
            <p>Simple, discreet, and built for daily routines.</p>
          </div>

          <div className="card glass">
            <h3>Premium Quality</h3>
            <p>Built around clean branding, consistency, and patient compliance.</p>
          </div>
        </div>
      </section>

      <section className="section dark">
        <p className="eyebrow">FEATURED PRODUCTS</p>
        <h2>Premium peptide strips for targeted wellness goals.</h2>

        <div className="productGrid">
          {products.slice(0, 4).map((product) => (
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
      </section>

      <section className="splitSection">
        <div>
          <p className="eyebrow">THE TECHNOLOGY</p>
          <h2>Sublingual delivery, redesigned.</h2>
          <p>
            STRIP was created around dissolvable oral strip technology —
            offering a sleek, convenient alternative to capsules and injections.
          </p>
          <Link href="/technology" className="primary">Explore Technology</Link>
        </div>

        <div className="visualPanel">
          <div className="floatingStrip"></div>
        </div>
      </section>

      <section className="section providerBand">
        <p className="eyebrow">FOR CLINICS</p>
        <h2>Become a STRIP Provider.</h2>
        <p>
          Give your clinic access to a premium peptide strip platform with
          wholesale ordering, provider resources, inventory visibility, and
          fulfillment support.
        </p>

        <div className="featureGrid">
          <div className="card glass">Wholesale Pricing</div>
          <div className="card glass">Bulk Ordering</div>
          <div className="card glass">Marketing Materials</div>
          <div className="card glass">Provider Dashboard</div>
        </div>

        <div className="buttons">
          <Link href="/providers" className="primary">Apply as Provider</Link>
          <Link href="/provider-portal" className="secondary">View Portal</Link>
        </div>
      </section>

      <section className="section dark">
        <p className="eyebrow">PATIENT JOURNEY</p>
        <h2>From selection to delivery.</h2>

        <div className="steps">
          <div>
            <span>01</span>
            <h3>Choose Product</h3>
            <p>Select the peptide strip that fits your wellness goal.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Complete Intake</h3>
            <p>Submit required information and consent forms before fulfillment.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Provider Review</h3>
            <p>Orders can be reviewed through the STRIP provider workflow.</p>
          </div>

          <div>
            <span>04</span>
            <h3>Ships to Door</h3>
            <p>Fulfillment tracking will connect to the customer and admin portals.</p>
          </div>
        </div>
      </section>

      <section className="section trustSection">
        <p className="eyebrow">TRUST & QUALITY</p>
        <h2>Built for a premium wellness experience.</h2>

        <div className="featureGrid">
          <div className="card glass">Medical Grade Positioning</div>
          <div className="card glass">Third-Party Testing Ready</div>
          <div className="card glass">USA Manufacturing Focus</div>
          <div className="card glass">Secure Checkout Ready</div>
        </div>
      </section>
    </main>
  );
}