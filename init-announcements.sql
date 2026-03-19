-- Announcements table for sitewide notices/banners
CREATE TABLE IF NOT EXISTS announcements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title_zh TEXT NOT NULL,
  title_en TEXT,
  content_zh TEXT,
  content_en TEXT,
  type TEXT DEFAULT 'info',         -- info | warning | success | promotion
  link TEXT,                        -- optional URL
  link_text_zh TEXT,                -- optional link button label (zh)
  link_text_en TEXT,                -- optional link button label (en)
  is_active INTEGER DEFAULT 1,      -- 1 = visible, 0 = hidden
  created_at TEXT DEFAULT (datetime('now')),
  expires_at TEXT                   -- NULL = never expires
);

-- Sample announcement
INSERT INTO announcements (title_zh, title_en, content_zh, content_en, type, link, link_text_zh, link_text_en)
VALUES (
  '龙虾机首批预定正式开启！限量 10,000 台，先到先得。',
  'LongXiaJi Pre-Order is Now Open! Limited to 10,000 units.',
  '首批预定用户专享早鸟价及优先发货权益。',
  'Early-bird pricing and priority shipping for the first batch.',
  'promotion',
  '/preorder',
  '立即预定',
  'Pre-Order Now'
);
