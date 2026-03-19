// Cloudflare Pages Function for single announcement operations
// PATCH  /api/announcements/:id  — update fields (admin only)
// DELETE /api/announcements/:id  — delete announcement (admin only)

interface Env {
  DB: D1Database;
  ADMIN_KEY?: string;
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
  if (!adminKey) return false;
  const provided = request.headers.get('X-Admin-Key');
  return provided === adminKey;
}

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, { status: 204, headers: corsHeaders() });
};

export const onRequestPatch: PagesFunction<Env> = async (context) => {
  if (!isAuthorized(context.request, context.env)) {
    return Response.json({ success: false, error: 'Unauthorized' }, { status: 401, headers: corsHeaders() });
  }

  const id = Number((context.params as Record<string, string>).id);
  if (isNaN(id)) {
    return Response.json({ success: false, error: 'Invalid id' }, { status: 400, headers: corsHeaders() });
  }

  let body: Record<string, unknown>;
  try {
    body = await context.request.json();
  } catch {
    return Response.json({ success: false, error: 'Invalid JSON' }, { status: 400, headers: corsHeaders() });
  }

  const allowed = ['title_zh', 'title_en', 'content_zh', 'content_en', 'type', 'link', 'link_text_zh', 'link_text_en', 'is_active', 'expires_at'];
  const sets: string[] = [];
  const values: unknown[] = [];

  for (const key of allowed) {
    if (key in body) {
      sets.push(`${key} = ?`);
      values.push(body[key]);
    }
  }

  if (sets.length === 0) {
    return Response.json({ success: false, error: 'No fields to update' }, { status: 400, headers: corsHeaders() });
  }

  values.push(id);

  try {
    await context.env.DB.prepare(
      `UPDATE announcements SET ${sets.join(', ')} WHERE id = ?`
    )
      .bind(...values)
      .run();

    return Response.json({ success: true }, { headers: corsHeaders() });
  } catch (error) {
    return Response.json({ success: false, error: 'Database error' }, { status: 500, headers: corsHeaders() });
  }
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
  if (!isAuthorized(context.request, context.env)) {
    return Response.json({ success: false, error: 'Unauthorized' }, { status: 401, headers: corsHeaders() });
  }

  const id = Number((context.params as Record<string, string>).id);
  if (isNaN(id)) {
    return Response.json({ success: false, error: 'Invalid id' }, { status: 400, headers: corsHeaders() });
  }

  try {
    await context.env.DB.prepare('DELETE FROM announcements WHERE id = ?').bind(id).run();
    return Response.json({ success: true }, { headers: corsHeaders() });
  } catch (error) {
    return Response.json({ success: false, error: 'Database error' }, { status: 500, headers: corsHeaders() });
  }
};
