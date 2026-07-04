import Link from 'next/link'
export default function Cart(){return <main className="section"><h2>Your Cart</h2><div className="card"><p className="muted">Cart functionality is scaffolded. Use the product pages to start checkout. A full persistent cart can be connected to Supabase or local storage.</p><Link className="btn" href="/products">Continue Shopping</Link></div></main>}
