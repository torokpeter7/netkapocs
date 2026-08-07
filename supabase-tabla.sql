-- Futtasd le a Supabase projekted SQL Editor-jában
-- (Dashboard → SQL Editor → New query)

create table public.uzenetek (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  tipus text not null check (tipus in ('kapcsolat', 'arajanlat')),
  nev text not null,
  email text not null,
  telefon text,
  szolgaltatas text,
  ingatlan_tipus text,
  uzenet text not null
);

-- Row Level Security bekapcsolása
alter table public.uzenetek enable row level security;

-- Engedélyezzük, hogy a weboldal látogatói (anon kulcs) új sort tudjanak beszúrni,
-- de ne tudjanak semmit olvasni, módosítani vagy törölni.
create policy "Publikus insert engedélyezése"
  on public.uzenetek
  for insert
  to anon
  with check (true);

-- A beérkezett üzeneteket a Supabase Dashboard → Table Editor felületén,
-- vagy a saját (bejelentkezett) admin fiókoddal tudod majd megnézni.
