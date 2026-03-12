// Cloudflare Pages Function for handling pre-order inventory with D1

interface Env {
  // Binding to D1 Database
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    // We assume an inventory table with id = 1 holds our preorder data
    const query = await context.env.DB.prepare(
      'SELECT sold_count FROM inventory WHERE id = 1'
    ).first();
    
    // Default to 8347 if not initialized to keep the initial illusion
    const soldCount = query?.sold_count ?? 8347;

    return Response.json({ success: true, soldCount });
  } catch (error) {
    return Response.json({ success: false, error: 'Failed to fetch inventory', soldCount: 8347 }, { status: 500 });
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    // Increase sold_count by 1, but cap it at 10000
    await context.env.DB.prepare(
      'UPDATE inventory SET sold_count = sold_count + 1 WHERE id = 1 AND sold_count < 10000'
    ).run();

    // Fetch the updated count
    const query = await context.env.DB.prepare(
      'SELECT sold_count FROM inventory WHERE id = 1'
    ).first();

    const soldCount = query?.sold_count ?? 8347;

    return Response.json({ success: true, soldCount });
  } catch (error) {
    return Response.json({ success: false, error: 'Database error' }, { status: 500 });
  }
};