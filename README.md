# STRIP Website

Premium Next.js ecommerce website for STRIP — Beyond Injection.

## Built in this starter
- Luxury black/gold/purple STRIP branding
- Product catalog
- Stripe Checkout route
- Supabase-ready backend tables for inventory and fulfillment
- Admin dashboard page scaffold
- Consent/waiver language before fulfillment

## Important hosting note
GitHub Pages can host a static site, but secure payments and inventory updates require server-side functions. Put the code in GitHub, then deploy from GitHub to Vercel or Netlify so the Stripe checkout API route can run securely.

## Setup
1. Create a GitHub repo named `strip-website`.
2. Upload all files in this folder.
3. Create a Supabase project and run `supabase/schema.sql`.
4. Create a Stripe account and get your secret key.
5. Copy `.env.example` to `.env.local` and fill in keys.
6. Run locally:
   ```bash
   npm install
   npm run dev
   ```
7. Deploy to Vercel from GitHub and add the same environment variables.
