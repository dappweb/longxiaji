import React, { useEffect, useState } from 'react';
import { X, ChevronRight, Megaphone, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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

const TYPE_STYLES: Record<string, string> = {
  promotion: 'bg-gradient-to-r from-red-600 to-orange-500 text-white',
  warning:   'bg-amber-400 text-amber-900',
  success:   'bg-emerald-500 text-white',
  info:      'bg-blue-600 text-white',
};

const TYPE_ICON: Record<string, React.ReactElement> = {
  promotion: <Megaphone className="w-4 h-4 shrink-0" />,
  warning:   <AlertTriangle className="w-4 h-4 shrink-0" />,
  success:   <CheckCircle className="w-4 h-4 shrink-0" />,
  info:      <Info className="w-4 h-4 shrink-0" />,
};

const DISMISS_KEY = 'dismissed_announcements';

function getDismissed(): Set<number> {
  try {
    const raw = sessionStorage.getItem(DISMISS_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveDismissed(ids: Set<number>) {
  try {
    sessionStorage.setItem(DISMISS_KEY, JSON.stringify([...ids]));
  } catch {
    // ignore
  }
}

export default function AnnouncementBar() {
  const { i18n } = useTranslation();
  const isZh = i18n.language !== 'en';

  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [dismissed, setDismissed] = useState<Set<number>>(getDismissed);

  useEffect(() => {
    fetch('/api/announcements')
      .then(r => r.json())
      .then((data: { success: boolean; announcements: Announcement[] }) => {
        if (data.success) setAnnouncements(data.announcements);
      })
      .catch(() => { /* silent fail – announcements are non-critical */ });
  }, []);

  const visible = announcements.filter(a => !dismissed.has(a.id));
  if (visible.length === 0) return null;

  // Show only the newest one
  const item = visible[0];
  const title   = isZh ? item.title_zh   : (item.title_en   || item.title_zh);
  const content = isZh ? item.content_zh : (item.content_en || item.content_zh);
  const linkText = isZh ? item.link_text_zh : (item.link_text_en || item.link_text_zh);
  const barStyle = TYPE_STYLES[item.type] ?? TYPE_STYLES.info;
  const icon     = TYPE_ICON[item.type]   ?? TYPE_ICON.info;

  const handleDismiss = () => {
    const next = new Set(dismissed);
    next.add(item.id);
    setDismissed(next);
    saveDismissed(next);
  };

  return (
    <div className={`${barStyle} text-sm font-medium`} role="alert">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-3">
        {icon}
        <span className="flex-1 truncate">
          <span className="font-semibold">{title}</span>
          {content && <span className="hidden sm:inline opacity-85"> — {content}</span>}
        </span>
        {item.link && linkText && (
          <a
            href={item.link}
            className="flex items-center gap-0.5 underline-offset-2 underline hover:no-underline whitespace-nowrap shrink-0 opacity-90 hover:opacity-100 transition-opacity"
          >
            {linkText}
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        )}
        <button
          onClick={handleDismiss}
          aria-label="关闭公告"
          className="shrink-0 p-1 rounded-full opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
