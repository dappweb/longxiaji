// Cloudflare Pages Function for announcements CRUD
// GET  /api/announcements         — public, returns active non-expired announcements
// POST /api/announcements         — admin only, creates a new announcement

interface Env {
  DB: D1Database;
  ADMIN_KEY?: string;
}

interface Announcement {
  id: number;
  title_zh: string;
  title_en: string | null;
  content_zh: string | null;
  content_en: string | null;
  type: string;
  link: string | null;
  link_text_zh: string | null;
  link_text_en: string | null;
  is_active: number;
  created_at: string;
  expires_at: string | null;
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key',
  };
}

function isAuthorized(request: Request, env: Env): boolean {
  const adminKey = env.ADMIN_KEY;
  if (!adminKey) return false; // key must be configured
  const provided = request.headers.get('X-Admin-Key');
  return provided === adminKey;
}

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, { status: 204, headers: corsHeaders() });
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const url = new URL(context.request.url);
    const requestAll = url.searchParams.get('all') === '1';
    const canReadAll = requestAll && isAuthorized(context.request, context.env);

    const result = canReadAll
      ? await context.env.DB.prepare(
          `SELECT * FROM announcements ORDER BY created_at DESC`
        ).all<Announcement>()
      : await context.env.DB.prepare(
          `SELECT * FROM announcements
           WHERE is_active = 1
             AND (expires_at IS NULL OR expires_at > ?)
           ORDER BY created_at DESC`
        )
          .bind(new Date().toISOString())
          .all<Announcement>();

    return Response.json(
      { success: true, announcements: result.results ?? [] },
      { headers: corsHeaders() }
    );
  } catch (error) {
    return Response.json(
      { success: false, error: 'Failed to fetch announcements', announcements: [] },
      { status: 500, headers: corsHeaders() }
    );
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  if (!isAuthorized(context.request, context.env)) {
    return Response.json({ success: false, error: 'Unauthorized' }, { status: 401, headers: corsHeaders() });
  }

  let body: Partial<Announcement>;
  try {
    body = await context.request.json();
  } catch {
    return Response.json({ success: false, error: 'Invalid JSON' }, { status: 400, headers: corsHeaders() });
  }

  if (!body.title_zh) {
    return Response.json({ success: false, error: 'title_zh is required' }, { status: 400, headers: corsHeaders() });
  }

  try {
    const result = await context.env.DB.prepare(
      `INSERT INTO announcements
         (title_zh, title_en, content_zh, content_en, type, link, link_text_zh, link_text_en, is_active, expires_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        body.title_zh,
        body.title_en ?? null,
        body.content_zh ?? null,
        body.content_en ?? null,
        body.type ?? 'info',
        body.link ?? null,
        body.link_text_zh ?? null,
        body.link_text_en ?? null,
        body.is_active ?? 1,
        body.expires_at ?? null
      )
      .run();

    return Response.json(
      { success: true, id: result.meta.last_row_id },
      { status: 201, headers: corsHeaders() }
    );
  } catch (error) {
    return Response.json(
      { success: false, error: 'Database error' },
      { status: 500, headers: corsHeaders() }
    );
  }
};
