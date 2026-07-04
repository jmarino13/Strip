import { NextResponse } from 'next/server'
export async function GET(){return NextResponse.json({orders:[],message:'Connect Supabase to store and retrieve live orders.'})}
