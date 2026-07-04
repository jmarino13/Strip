import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/products'

export default function Home(){
 return <main>
  <section className="hero">
   <div><div className="eyebrow">The future of peptide wellness</div><h1>Beyond injection. Beyond capsules.</h1><p>STRIP is a premium peptide wellness platform built around dissolvable sublingual strips designed to enter through the mouth and bypass stomach acid. Positioned as more effective than capsules and easier than injections.</p><div className="actions"><Link className="btn" href="/products">Shop Products</Link><Link className="btn secondary" href="/compliance">Review Compliance</Link></div></div>
   <div className="hero-card"><Image src="/images/strip-hero.jpeg" alt="STRIP peptide strip brand" width={900} height={900}/></div>
  </section>
  <section className="section"><h2>Premium strip technology</h2><p className="muted">Medical grade branding, online ordering, Stripe checkout, customer accounts, inventory tracking, order fulfillment, and a Supabase-ready admin dashboard.</p><div className="grid"><div className="card"><h3>Sublingual Delivery</h3><p className="muted">Designed to dissolve orally and support absorption through the salivary pathway.</p></div><div className="card"><h3>Luxury Experience</h3><p className="muted">Black, gold, and purple premium brand system built for national wellness positioning.</p></div><div className="card"><h3>Admin Backend</h3><p className="muted">Track inventory, orders, fulfillment status, and export operations from the dashboard.</p></div></div></section>
  <section className="section"><h2>Featured products</h2><div className="product-grid">{products.slice(0,4).map(p=><Link className="product" href={`/products/${p.slug}`} key={p.slug}><Image src={p.image} alt={p.name} width={500} height={400}/><div className="product-content"><span className="badge">{p.category}</span><h3>{p.name}</h3><p className="muted">{p.description}</p><div className="price">${p.price}</div></div></Link>)}</div></section>
 </main>
}
