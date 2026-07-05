import { NextResponse } from "next/server";
import { addToCart } from "@/lib/cart";

export async function POST(req: Request) {
  const body = await req.json();

  const cart = addToCart(body);

  return NextResponse.json({ success: true, cart });
}