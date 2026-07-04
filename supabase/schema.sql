create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text,
  price numeric not null,
  inventory integer default 0,
  active boolean default true,
  created_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  customer_email text,
  product_slug text,
  quantity integer default 1,
  amount numeric,
  stripe_session_id text,
  payment_status text default 'pending',
  fulfillment_status text default 'new',
  shipping_name text,
  shipping_address jsonb,
  created_at timestamptz default now()
);

create table if not exists inventory_events (
  id uuid primary key default gen_random_uuid(),
  product_slug text not null,
  change integer not null,
  reason text,
  created_at timestamptz default now()
);

insert into products (slug,name,category,price,inventory) values
('tirzepatide','Tirzepatide Strip','Metabolic',399,100),
('pt141-oxytocin','PT-141 / Oxytocin Strip','Intimacy',249,100),
('nad','NAD+ Strip','Energy',229,100),
('bpc157','BPC-157 Strip','Recovery',199,100),
('ghk-cu','GHK-Cu Strip','Beauty',199,100),
('cjc1295','CJC-1295 Strip','Performance',229,100)
on conflict (slug) do nothing;
