import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { products } from '@/lib/products';
import { supabaseAdmin } from '@/lib/supabase';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-06-20' as any });
export async function POST(req:Request){
 try{
  const {id,qty=1}=await req.json(); const p=products.find(x=>x.id===id); if(!p) return NextResponse.json({error:'Product not found'},{status:404});
  await supabaseAdmin.from('orders').insert({product_id:p.id,product_name:p.name,quantity:qty,total_cents:p.price*qty,status:'pending_payment'});
  const session=await stripe.checkout.sessions.create({mode:'payment',line_items:[{price_data:{currency:'usd',product_data:{name:p.name,description:p.description},unit_amount:p.price},quantity:qty}],success_url:`${process.env.NEXT_PUBLIC_SITE_URL}/success`,cancel_url:`${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,metadata:{product_id:p.id,quantity:String(qty)}});
  return NextResponse.json({url:session.url});
 }catch(e:any){return NextResponse.json({error:e.message},{status:500})}
}
