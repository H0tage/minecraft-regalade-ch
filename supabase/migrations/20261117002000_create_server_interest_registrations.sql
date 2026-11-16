create table public.server_interest_registrations (
  id bigint generated always as identity primary key,
  minecraft_username text not null,
  discovery_source text not null,
  created_at timestamptz not null default now(),
  constraint server_interest_username_format check (minecraft_username ~ '^[A-Za-z0-9_]{3,16}$'),
  constraint server_interest_source_length check (char_length(btrim(discovery_source)) between 2 and 120)
);

create unique index server_interest_username_unique
  on public.server_interest_registrations (lower(btrim(minecraft_username)));

alter table public.server_interest_registrations enable row level security;

revoke all on table public.server_interest_registrations from anon, authenticated;
grant select, insert on table public.server_interest_registrations to service_role;
grant usage, select on sequence public.server_interest_registrations_id_seq to service_role;

comment on table public.server_interest_registrations is
  'Intentions de participation affichées publiquement sur minecraft.regalade.ch.';
