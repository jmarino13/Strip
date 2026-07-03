import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
export default function Catalog(){return <main className="container section"><h1>STRIP Catalog</h1><p className="muted">All products are configured for cart, checkout, inventory, and fulfillment tracking.</p><div className="grid">{products.map(p=><div id={p.slug} key={p.slug}><ProductCard product={p}/><div className="card"><b>Highlights</b><ul>{p.benefits.map(b=><li key={b}>{b}</li>)}</ul><p className="notice">{p.compliance}</p></div></div>)}</div></main>}
