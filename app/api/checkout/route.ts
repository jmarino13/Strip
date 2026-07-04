import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { products } from '@/lib/products'

export async function POST(req: Request) {
  const form = await req.formData()
  const slug = String(form.get('slug') || '')
  const product = products.find(p => p.slug === slug) || products[0]
  const secret = process.env.STRIPE_SECRET_KEY
  if (!secret) {
    return NextResponse.json({ message: 'Stripe is not connected yet. Add STRIPE_SECRET_KEY to Vercel environment variables.' }, { status: 200 })
  }
  const stripe = new Stripe(secret)
  const origin = req.headers.get('origin') || 'http://localhost:3000'
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [{ price_data: { currency: 'usd', product_data: { name: product.name }, unit_amount: Number(product.price.replace("$", "")) * 100 }, quantity: 1 }],
    success_url: `${origin}/account?success=true`,
    cancel_url: `${origin}/products/${product.slug}`,
    metadata: { product_slug: product.slug }
  })
  return NextResponse.redirect(session.url || origin, 303)
}
