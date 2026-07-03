import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { products } from '@/lib/products';
import { supabaseAdmin } from '@/lib/supabase';

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.acceptedConsent) return NextResponse.json({ error: 'Consent acknowledgement is required.' }, { status: 400 });
    const items = body.items || [];
    if (!items.length) return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
    const line_items = items.map((item: any) => {
      const product = products.find(p => p.slug === item.slug);
      if (!product) throw new Error('Invalid product');
      return { quantity: item.quantity, price_data: { currency: 'usd', unit_amount: product.price * 100, product_data: { name: product.name, description: product.subtitle, images: [] } } };
    });
    const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    if (!stripe) {
      const order = { customer_email: 'test@example.com', status: 'pending_setup', total_cents: line_items.reduce((s:any,i:any)=>s+i.price_data.unit_amount*i.quantity,0), items };
      if (supabaseAdmin) await supabaseAdmin.from('orders').insert(order);
      return NextResponse.json({ error: 'Stripe is not configured yet. Add STRIPE_SECRET_KEY in Vercel.' }, { status: 500 });
    }
    const session = await stripe.checkout.sessions.create({ mode: 'payment', line_items, success_url: `${site}/success?session_id={CHECKOUT_SESSION_ID}`, cancel_url: `${site}/cancel`, consent_collection: { terms_of_service: 'required' }, metadata: { acceptedConsent: 'true' } });
    if (supabaseAdmin) await supabaseAdmin.from('orders').insert({ stripe_session_id: session.id, status: 'checkout_created', total_cents: session.amount_total || 0, items });
    return NextResponse.json({ url: session.url });
  } catch (e:any) { return NextResponse.json({ error: e.message }, { status: 500 }); }
}
