create table public.site_admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.site_admins enable row level security;

revoke all on table public.site_admins from anon, authenticated;
grant select on table public.site_admins to service_role;

insert into public.site_admins (user_id)
values ('6eec3a14-463c-401e-aec2-efe188d52e09');

comment on table public.site_admins is
  'Comptes autorisés à administrer les inscriptions publiques du site Régalade.';
