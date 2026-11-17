import { createClient } from 'npm:@supabase/supabase-js@2';

const allowedOrigins = new Set(['https://minecraft.regalade.ch']);
const allowedStates = new Set(['offline', 'starting', 'online']);
const staleAfterMilliseconds = 120_000;

function isAllowedOrigin(origin: string | null) {
  if (!origin) return true;
  return allowedOrigins.has(origin) || /^http:\/\/(?:127\.0\.0\.1|localhost):\d+$/.test(origin);
}

function corsHeaders(origin: string | null) {
  return {
    'Access-Control-Allow-Origin': origin && isAllowedOrigin(origin) ? origin : 'https://minecraft.regalade.ch',
    'Access-Control-Allow-Headers': 'content-type, x-reporter-secret',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    Vary: 'Origin',
  };
}

function jsonResponse(body: unknown, status: number, origin: string | null) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(origin),
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function isValidCount(value: unknown) {
  return Number.isInteger(value) && Number(value) >= 0 && Number(value) <= 10_000;
}

Deno.serve(async (request) => {
  const origin = request.headers.get('Origin');

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: isAllowedOrigin(origin) ? 204 : 403, headers: corsHeaders(origin) });
  }
  if (!isAllowedOrigin(origin)) return jsonResponse({ message: 'Origine refusée.' }, 403, origin);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({ message: 'Le service de statut est mal configuré.' }, 500, origin);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  if (request.method === 'GET') {
    const { data, error } = await supabase
      .from('minecraft_server_status')
      .select('state, players, max_players, updated_at')
      .eq('id', 1)
      .single();

    if (error || !data) return jsonResponse({ message: 'Le statut est momentanément indisponible.' }, 503, origin);

    const updatedAt = new Date(data.updated_at);
    const stale = !Number.isFinite(updatedAt.getTime()) || Date.now() - updatedAt.getTime() > staleAfterMilliseconds;

    return jsonResponse(
      {
        state: stale ? 'unknown' : data.state,
        players: stale ? null : data.players,
        maxPlayers: stale ? null : data.max_players,
        updatedAt: data.updated_at,
      },
      200,
      origin,
    );
  }

  if (request.method !== 'POST') return jsonResponse({ message: 'Méthode refusée.' }, 405, origin);

  const reporterSecret = Deno.env.get('STATUS_REPORTER_SECRET');
  if (!reporterSecret || request.headers.get('X-Reporter-Secret') !== reporterSecret) {
    return jsonResponse({ message: 'Reporter refusé.' }, 401, origin);
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch (_) {
    return jsonResponse({ message: 'Données invalides.' }, 400, origin);
  }

  const state = typeof payload.state === 'string' ? payload.state : '';
  const players = payload.players;
  const maxPlayers = payload.maxPlayers;

  if (!allowedStates.has(state) || !isValidCount(players) || !isValidCount(maxPlayers)) {
    return jsonResponse({ message: 'Statut invalide.' }, 400, origin);
  }
  if (Number(players) > Number(maxPlayers)) {
    return jsonResponse({ message: 'Nombre de joueurs invalide.' }, 400, origin);
  }

  const { error } = await supabase.from('minecraft_server_status').upsert({
    id: 1,
    state,
    players,
    max_players: maxPlayers,
    updated_at: new Date().toISOString(),
  });

  if (error) return jsonResponse({ message: 'Le statut n’a pas pu être enregistré.' }, 500, origin);
  return jsonResponse({ ok: true }, 200, origin);
});
