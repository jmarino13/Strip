# STRIP Premium Website V2

This is the rebuilt STRIP website with the correct Next.js folder structure for GitHub and Vercel.

## Upload to GitHub
Upload the contents of this folder so the top level of your repo shows:

- app/
- components/
- lib/
- public/
- supabase/
- package.json
- next.config.js
- tsconfig.json
- README.md

Do not upload the ZIP itself.

## Deploy on Vercel
1. Import the GitHub repo into Vercel.
2. Framework should auto-detect as Next.js.
3. Build command: `npm run build`.
4. Install command: `npm install`.
5. Deploy.

## Connect Stripe
Add these Vercel environment variables:

- STRIPE_SECRET_KEY
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

## Connect Supabase
Create a Supabase project, open SQL Editor, and run `supabase/schema.sql`.
Then add:

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

## Important Compliance Note
Before launching payments for medical or peptide products, confirm all claims, prescribing, pharmacy, shipping, consent, telehealth, and payment processor requirements with qualified legal and clinical leadership.
