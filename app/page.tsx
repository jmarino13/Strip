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
        <h2>Premium peptide delivery without the needle.</h2>

        <div className="featureGrid">
          <div className="card glass">Sublingual strip technology</div>
          <div className="card glass">Designed to bypass stomach acid</div>
          <div className="card glass">Needle-free wellness experience</div>
          <div className="card glass">Built for patient compliance</div>
        </div>
      </section>

      <section className="section dark">
        <p className="eyebrow">FEATURED PRODUCTS</p>
        <h2>Medical-grade peptide strips.</h2>

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
    </main>
  );
}