import { createClient } from 'npm:@supabase/supabase-js@2';

const allowedOrigins = new Set(['https://minecraft.regalade.ch']);
const usernamePattern = /^[A-Za-z0-9_]{3,16}$/;

function isAllowedOrigin(origin: string | null) {
  if (!origin) return true;
  return allowedOrigins.has(origin) || /^http:\/\/(?:127\.0\.0\.1|localhost):\d+$/.test(origin);
}

function corsHeaders(origin: string | null) {
  return {
    'Access-Control-Allow-Origin': origin && isAllowedOrigin(origin) ? origin : 'https://minecraft.regalade.ch',
    'Access-Control-Allow-Headers': 'content-type',
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

Deno.serve(async (request) => {
  const origin = request.headers.get('Origin');

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: isAllowedOrigin(origin) ? 204 : 403, headers: corsHeaders(origin) });
  }
  if (!isAllowedOrigin(origin)) return jsonResponse({ message: 'Origine refusée.' }, 403, origin);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({ message: 'Le service d’inscription est mal configuré.' }, 500, origin);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  if (request.method === 'GET') {
    const { data, error } = await supabase
      .from('server_interest_registrations')
      .select('minecraft_username, discovery_source, created_at')
      .order('created_at', { ascending: true })
      .limit(500);

    if (error) return jsonResponse({ message: 'La liste est momentanément indisponible.' }, 500, origin);
    return jsonResponse({ registrations: data }, 200, origin);
  }

  if (request.method !== 'POST') return jsonResponse({ message: 'Méthode refusée.' }, 405, origin);

  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > 2048) return jsonResponse({ message: 'Les données envoyées sont trop longues.' }, 413, origin);

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch (_) {
    return jsonResponse({ message: 'Les données envoyées sont invalides.' }, 400, origin);
  }

  if (typeof payload.website === 'string' && payload.website.trim()) {
    return jsonResponse({ message: 'Ton pseudo a bien été ajouté.' }, 201, origin);
  }

  const minecraftUsername = typeof payload.minecraftUsername === 'string' ? payload.minecraftUsername.trim() : '';
  const discoverySource = typeof payload.discoverySource === 'string' ? payload.discoverySource.trim() : '';

  if (!usernamePattern.test(minecraftUsername)) {
    return jsonResponse({ message: 'Le pseudo doit contenir 3 à 16 lettres, chiffres ou _.' }, 400, origin);
  }
  if (discoverySource.length < 2 || discoverySource.length > 120) {
    return jsonResponse({ message: 'Indique en quelques mots comment tu as découvert le projet.' }, 400, origin);
  }

  const { error } = await supabase.from('server_interest_registrations').insert({
    minecraft_username: minecraftUsername,
    discovery_source: discoverySource,
  });

  if (error?.code === '23505') {
    return jsonResponse({ message: 'Ce pseudo est déjà inscrit.' }, 409, origin);
  }
  if (error) return jsonResponse({ message: 'L’inscription n’a pas pu être enregistrée.' }, 500, origin);

  return jsonResponse({ message: 'Ton pseudo a bien été ajouté.' }, 201, origin);
});
