import { createClient } from 'npm:@supabase/supabase-js@2';

const allowedOrigins = new Set(['https://minecraft.regalade.ch']);

function isAllowedOrigin(origin: string | null) {
  if (!origin) return true;
  return allowedOrigins.has(origin) || /^http:\/\/(?:127\.0\.0\.1|localhost):\d+$/.test(origin);
}

function corsHeaders(origin: string | null) {
  return {
    'Access-Control-Allow-Origin': origin && isAllowedOrigin(origin) ? origin : 'https://minecraft.regalade.ch',
    'Access-Control-Allow-Headers': 'authorization, apikey, content-type',
    'Access-Control-Allow-Methods': 'GET, DELETE, OPTIONS',
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
  const authorization = request.headers.get('Authorization');
  const accessToken = authorization?.startsWith('Bearer ') ? authorization.slice(7) : '';
  if (!supabaseUrl || !serviceRoleKey || !accessToken) {
    return jsonResponse({ message: 'Connexion administrateur requise.' }, 401, origin);
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const {
    data: { user },
    error: userError,
  } = await supabaseAdmin.auth.getUser(accessToken);
  if (userError || !user) return jsonResponse({ message: 'La session administrateur est invalide.' }, 401, origin);

  const { data: administrator, error: administratorError } = await supabaseAdmin
    .from('site_admins')
    .select('user_id')
    .eq('user_id', user.id)
    .maybeSingle();
  if (administratorError) return jsonResponse({ message: 'La vérification administrateur a échoué.' }, 500, origin);
  if (!administrator)
    return jsonResponse({ message: 'Ce compte n’est pas autorisé à administrer le site.' }, 403, origin);

  if (request.method === 'GET') {
    const { data, error } = await supabaseAdmin
      .from('server_interest_registrations')
      .select('id, minecraft_username, discovery_source, created_at')
      .order('created_at', { ascending: true })
      .limit(500);
    if (error) return jsonResponse({ message: 'La liste est momentanément indisponible.' }, 500, origin);
    return jsonResponse({ registrations: data }, 200, origin);
  }

  if (request.method !== 'DELETE') return jsonResponse({ message: 'Méthode refusée.' }, 405, origin);

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch (_) {
    return jsonResponse({ message: 'La demande de suppression est invalide.' }, 400, origin);
  }
  const id = Number(payload.id);
  if (!Number.isSafeInteger(id) || id < 1) {
    return jsonResponse({ message: 'L’inscription demandée est invalide.' }, 400, origin);
  }

  const { data, error } = await supabaseAdmin
    .from('server_interest_registrations')
    .delete()
    .eq('id', id)
    .select('id, minecraft_username')
    .maybeSingle();
  if (error) return jsonResponse({ message: 'La suppression a échoué.' }, 500, origin);
  if (!data) return jsonResponse({ message: 'Cette inscription n’existe plus.' }, 404, origin);

  return jsonResponse({ deleted: data }, 200, origin);
});
