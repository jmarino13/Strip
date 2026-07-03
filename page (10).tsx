import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { products } from '@/lib/products';
function authorized(req: Request){ return req.headers.get('x-admin-password') === process.env.ADMIN_PASSWORD; }
export async function GET(req: Request){ if(!authorized(req)) return NextResponse.json({error:'Unauthorized'}, {status:401}); if(!supabaseAdmin) return NextResponse.json({inventory: products.map(p=>({sku:p.slug,name:p.name,on_hand:100,reorder_level:20})), warning:'Supabase not configured yet.'}); const {data,error}=await supabaseAdmin.from('inventory').select('*').order('name'); if(error) return NextResponse.json({error:error.message},{status:500}); return NextResponse.json({inventory:data}); }
export async function PATCH(req: Request){ if(!authorized(req)) return NextResponse.json({error:'Unauthorized'}, {status:401}); const item=await req.json(); if(!supabaseAdmin) return NextResponse.json({ok:false,error:'Supabase not configured'}); const {error}=await supabaseAdmin.from('inventory').upsert(item,{onConflict:'sku'}); if(error) return NextResponse.json({error:error.message},{status:500}); return NextResponse.json({ok:true}); }
