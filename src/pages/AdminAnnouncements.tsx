import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';

type AnnouncementType = 'info' | 'warning' | 'success' | 'promotion';

interface Announcement {
  id: number;
  title_zh: string;
  title_en: string | null;
  content_zh: string | null;
  content_en: string | null;
  type: AnnouncementType;
  link: string | null;
  link_text_zh: string | null;
  link_text_en: string | null;
  is_active: number;
  created_at: string;
  expires_at: string | null;
}

interface AnnouncementForm {
  title_zh: string;
  title_en: string;
  content_zh: string;
  content_en: string;
  type: AnnouncementType;
  link: string;
  link_text_zh: string;
  link_text_en: string;
  is_active: boolean;
  expires_at: string;
}

const ADMIN_KEY_STORAGE = 'admin_key';

const emptyForm: AnnouncementForm = {
  title_zh: '',
  title_en: '',
  content_zh: '',
  content_en: '',
  type: 'info',
  link: '',
  link_text_zh: '',
  link_text_en: '',
  is_active: true,
  expires_at: '',
};

function toNullable(value: string): string | null {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function toInputDateTime(value: string | null): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}

function toIsoDateTime(value: string): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString();
}

export default function AdminAnnouncements() {
  const [adminKey, setAdminKey] = useState(() => localStorage.getItem(ADMIN_KEY_STORAGE) ?? '');
  const [form, setForm] = useState<AnnouncementForm>(emptyForm);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  const resetForm = useCallback(() => {
    setEditingId(null);
    setForm(emptyForm);
  }, []);

  const fetchAnnouncements = useCallback(async () => {
    if (!adminKey.trim()) {
      setAnnouncements([]);
      setError('请先输入管理员密钥后加载公告。');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/announcements?all=1', {
        headers: {
          'X-Admin-Key': adminKey.trim(),
        },
      });
      const data = await response.json() as { success: boolean; announcements?: Announcement[]; error?: string };
      if (!response.ok || !data.success) {
        setError(data.error ?? '获取公告失败');
        setAnnouncements([]);
        return;
      }
      setAnnouncements(data.announcements ?? []);
    } catch {
      setError('网络错误，无法获取公告列表。');
      setAnnouncements([]);
    } finally {
      setLoading(false);
    }
  }, [adminKey]);

  useEffect(() => {
    if (!adminKey.trim()) return;
    void fetchAnnouncements();
  }, [adminKey, fetchAnnouncements]);

  const sortedAnnouncements = useMemo(() => {
    return [...announcements].sort((a, b) => {
      const t1 = new Date(a.created_at).getTime();
      const t2 = new Date(b.created_at).getTime();
      return t2 - t1;
    });
  }, [announcements]);

  const startEdit = (item: Announcement) => {
    setEditingId(item.id);
    setStatus('');
    setForm({
      title_zh: item.title_zh,
      title_en: item.title_en ?? '',
      content_zh: item.content_zh ?? '',
      content_en: item.content_en ?? '',
      type: item.type,
      link: item.link ?? '',
      link_text_zh: item.link_text_zh ?? '',
      link_text_en: item.link_text_en ?? '',
      is_active: item.is_active === 1,
      expires_at: toInputDateTime(item.expires_at),
    });
  };

  const saveAdminKey = () => {
    localStorage.setItem(ADMIN_KEY_STORAGE, adminKey.trim());
    setStatus('管理员密钥已保存。');
    setError('');
    void fetchAnnouncements();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!adminKey.trim()) {
      setError('请先输入管理员密钥。');
      return;
    }
    if (!form.title_zh.trim()) {
      setError('中文标题为必填项。');
      return;
    }

    const payload = {
      title_zh: form.title_zh.trim(),
      title_en: toNullable(form.title_en),
      content_zh: toNullable(form.content_zh),
      content_en: toNullable(form.content_en),
      type: form.type,
      link: toNullable(form.link),
      link_text_zh: toNullable(form.link_text_zh),
      link_text_en: toNullable(form.link_text_en),
      is_active: form.is_active ? 1 : 0,
      expires_at: toIsoDateTime(form.expires_at),
    };

    setSaving(true);
    setError('');
    setStatus('');

    const method = editingId === null ? 'POST' : 'PATCH';
    const endpoint = editingId === null ? '/api/announcements' : `/api/announcements/${editingId}`;

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Key': adminKey.trim(),
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json() as { success: boolean; error?: string };
      if (!response.ok || !data.success) {
        setError(data.error ?? '保存失败');
        return;
      }

      setStatus(editingId === null ? '公告发布成功。' : '公告更新成功。');
      resetForm();
      await fetchAnnouncements();
    } catch {
      setError('网络错误，提交失败。');
    } finally {
      setSaving(false);
    }
  };

  const toggleActive = async (item: Announcement) => {
    if (!adminKey.trim()) {
      setError('请先输入管理员密钥。');
      return;
    }

    setError('');
    setStatus('');

    try {
      const response = await fetch(`/api/announcements/${item.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Key': adminKey.trim(),
        },
        body: JSON.stringify({ is_active: item.is_active === 1 ? 0 : 1 }),
      });
      const data = await response.json() as { success: boolean; error?: string };
      if (!response.ok || !data.success) {
        setError(data.error ?? '状态更新失败');
        return;
      }
      setStatus('公告状态已更新。');
      await fetchAnnouncements();
    } catch {
      setError('网络错误，状态更新失败。');
    }
  };

  const deleteAnnouncement = async (item: Announcement) => {
    if (!adminKey.trim()) {
      setError('请先输入管理员密钥。');
      return;
    }

    const confirmed = window.confirm(`确认删除公告：${item.title_zh}？`);
    if (!confirmed) return;

    setError('');
    setStatus('');

    try {
      const response = await fetch(`/api/announcements/${item.id}`, {
        method: 'DELETE',
        headers: {
          'X-Admin-Key': adminKey.trim(),
        },
      });
      const data = await response.json() as { success: boolean; error?: string };
      if (!response.ok || !data.success) {
        setError(data.error ?? '删除失败');
        return;
      }
      setStatus('公告已删除。');
      if (editingId === item.id) {
        resetForm();
      }
      await fetchAnnouncements();
    } catch {
      setError('网络错误，删除失败。');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h1 className="text-2xl font-bold text-slate-900">公告管理后台</h1>
          <p className="text-sm text-slate-500 mt-2">用于发布、编辑、下线和删除站点公告。</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto] items-end">
            <label className="text-sm font-medium text-slate-700">
              管理员密钥
              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="输入 ADMIN_KEY"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
              />
            </label>
            <button
              onClick={saveAdminKey}
              className="rounded-xl bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 hover:bg-slate-800 transition-colors"
            >
              保存并加载
            </button>
          </div>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
          {status && <p className="mt-4 text-sm text-emerald-600">{status}</p>}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                中文标题 *
                <input
                  type="text"
                  value={form.title_zh}
                  onChange={(e) => setForm((prev) => ({ ...prev, title_zh: e.target.value }))}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                />
              </label>

              <label className="text-sm font-medium text-slate-700">
                英文标题
                <input
                  type="text"
                  value={form.title_en}
                  onChange={(e) => setForm((prev) => ({ ...prev, title_en: e.target.value }))}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                中文内容
                <textarea
                  value={form.content_zh}
                  onChange={(e) => setForm((prev) => ({ ...prev, content_zh: e.target.value }))}
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                />
              </label>

              <label className="text-sm font-medium text-slate-700">
                英文内容
                <textarea
                  value={form.content_en}
                  onChange={(e) => setForm((prev) => ({ ...prev, content_en: e.target.value }))}
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="text-sm font-medium text-slate-700">
                公告类型
                <select
                  value={form.type}
                  onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value as AnnouncementType }))}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                >
                  <option value="info">info</option>
                  <option value="warning">warning</option>
                  <option value="success">success</option>
                  <option value="promotion">promotion</option>
                </select>
              </label>

              <label className="text-sm font-medium text-slate-700">
                过期时间
                <input
                  type="datetime-local"
                  value={form.expires_at}
                  onChange={(e) => setForm((prev) => ({ ...prev, expires_at: e.target.value }))}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                />
              </label>

              <label className="text-sm font-medium text-slate-700 flex items-end gap-2 pb-2">
                <input
                  type="checkbox"
                  checked={form.is_active}
                  onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
                  className="w-4 h-4"
                />
                发布后立即生效
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="text-sm font-medium text-slate-700 md:col-span-2">
                跳转链接
                <input
                  type="text"
                  value={form.link}
                  onChange={(e) => setForm((prev) => ({ ...prev, link: e.target.value }))}
                  placeholder="例如 /preorder 或 https://example.com"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                />
              </label>

              <label className="text-sm font-medium text-slate-700">
                中文按钮文案
                <input
                  type="text"
                  value={form.link_text_zh}
                  onChange={(e) => setForm((prev) => ({ ...prev, link_text_zh: e.target.value }))}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                />
              </label>
            </div>

            <label className="text-sm font-medium text-slate-700 block">
              英文按钮文案
              <input
                type="text"
                value={form.link_text_en}
                onChange={(e) => setForm((prev) => ({ ...prev, link_text_en: e.target.value }))}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
              />
            </label>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-red-600 text-white text-sm font-semibold px-5 py-2.5 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {saving ? '提交中...' : editingId === null ? '发布公告' : '保存修改'}
              </button>

              {editingId !== null && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold px-5 py-2.5 hover:bg-slate-100 transition-colors"
                >
                  取消编辑
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900">公告列表</h2>
            <button
              onClick={() => void fetchAnnouncements()}
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
            >
              刷新
            </button>
          </div>

          {loading && <p className="mt-4 text-sm text-slate-500">加载中...</p>}
          {!loading && sortedAnnouncements.length === 0 && (
            <p className="mt-4 text-sm text-slate-500">暂无公告数据。</p>
          )}

          <div className="mt-4 space-y-3 max-h-[70vh] overflow-auto pr-1">
            {sortedAnnouncements.map((item) => (
              <article key={item.id} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-slate-900 truncate">{item.title_zh}</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      ID {item.id} | {item.type} | {item.is_active === 1 ? '生效中' : '已下线'}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">创建时间: {new Date(item.created_at).toLocaleString()}</p>
                    {item.expires_at && (
                      <p className="text-xs text-slate-500 mt-1">过期时间: {new Date(item.expires_at).toLocaleString()}</p>
                    )}
                  </div>
                </div>

                {item.content_zh && <p className="text-sm text-slate-600 mt-3 line-clamp-2">{item.content_zh}</p>}

                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => startEdit(item)}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    编辑
                  </button>
                  <button
                    onClick={() => void toggleActive(item)}
                    className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 hover:bg-amber-100 transition-colors"
                  >
                    {item.is_active === 1 ? '下线' : '上线'}
                  </button>
                  <button
                    onClick={() => void deleteAnnouncement(item)}
                    className="rounded-lg border border-red-300 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100 transition-colors"
                  >
                    删除
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
