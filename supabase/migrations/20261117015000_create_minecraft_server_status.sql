create table public.minecraft_server_status (
  id smallint primary key default 1,
  state text not null default 'unknown',
  players integer,
  max_players integer,
  updated_at timestamptz not null default now(),
  constraint minecraft_server_status_single_row check (id = 1),
  constraint minecraft_server_status_state check (state in ('offline', 'starting', 'online', 'unknown')),
  constraint minecraft_server_status_players check (players is null or players >= 0),
  constraint minecraft_server_status_max_players check (max_players is null or max_players >= 0),
  constraint minecraft_server_status_player_count check (
    players is null or max_players is null or players <= max_players
  )
);

insert into public.minecraft_server_status (id, state, players, max_players)
values (1, 'unknown', null, null);

alter table public.minecraft_server_status enable row level security;

revoke all on table public.minecraft_server_status from anon, authenticated;
grant select, insert, update on table public.minecraft_server_status to service_role;

comment on table public.minecraft_server_status is
  'Dernier état épuré du serveur Minecraft transmis par le reporter Crafty local.';
