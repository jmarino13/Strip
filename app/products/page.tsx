import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'
export default function Products(){return <main className="section"><h2>STRIP Catalog</h2><p className="muted">All products are set up for Stripe checkout and inventory tracking.</p><div className="product-grid">{products.map(p=><Link className="product" href={`/products/${p.slug}`} key={p.slug}><Image src={p.image} alt={p.name} width={500} height={400}/><div className="product-content"><span className="badge">{p.category}</span><h3>{p.name}</h3><p className="muted">{p.description}</p><div className="price">${p.price}</div></div></Link>)}</div></main>}
