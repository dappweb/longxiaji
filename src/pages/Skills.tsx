import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MessageSquare, Image as ImageIcon, Briefcase, Zap, ChevronRight, Clock,
  Search, Download, Flame, Video, ShoppingCart, Share2, Code2, TrendingUp,
  Headphones, Scale, UserCircle2
} from 'lucide-react';

const SKILL_ICONS: Record<number, { icon: React.ReactNode; color: string }> = {
  1:  { icon: <MessageSquare className="w-6 h-6" />, color: 'text-blue-500 bg-blue-50' },
  2:  { icon: <Briefcase className="w-6 h-6" />, color: 'text-emerald-500 bg-emerald-50' },
  3:  { icon: <Clock className="w-6 h-6" />, color: 'text-amber-500 bg-amber-50' },
  4:  { icon: <ImageIcon className="w-6 h-6" />, color: 'text-purple-500 bg-purple-50' },
  5:  { icon: <Video className="w-6 h-6" />, color: 'text-pink-500 bg-pink-50' },
  6:  { icon: <ShoppingCart className="w-6 h-6" />, color: 'text-orange-500 bg-orange-50' },
  7:  { icon: <Share2 className="w-6 h-6" />, color: 'text-cyan-500 bg-cyan-50' },
  8:  { icon: <Code2 className="w-6 h-6" />, color: 'text-slate-600 bg-slate-100' },
  9:  { icon: <TrendingUp className="w-6 h-6" />, color: 'text-red-500 bg-red-50' },
  10: { icon: <Headphones className="w-6 h-6" />, color: 'text-teal-500 bg-teal-50' },
  11: { icon: <Scale className="w-6 h-6" />, color: 'text-indigo-500 bg-indigo-50' },
  12: { icon: <UserCircle2 className="w-6 h-6" />, color: 'text-violet-500 bg-violet-50' },
};

const SKILL_CATS: Record<number, string> = {
  1: 'office', 2: 'office', 3: 'life', 4: 'design', 5: 'design', 6: 'ecom',
  7: 'ecom', 8: 'dev', 9: 'finance', 10: 'office', 11: 'finance', 12: 'design',
};

export default function Skills() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => { document.title = `${t('nav.skills', '技能市场')} · ${t('nav.logo', '龙虾机')}`; }, [t]);

  const [activeCat, setActiveCat] = useState('all');
  const [search, setSearch] = useState('');

  const catKeys = ['all', 'office', 'life', 'design', 'ecom', 'dev', 'finance'] as const;
  const skillIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const filteredSkills = useMemo(() => {
    return skillIds.filter(id => {
      const catMatch = activeCat === 'all' || SKILL_CATS[id] === activeCat;
      if (!catMatch) return false;
      if (!search.trim()) return true;
      const title = t(`skills.items.${id}.title`, '');
      const desc = t(`skills.items.${id}.desc`, '');
      const q = search.toLowerCase();
      return title.toLowerCase().includes(q) || desc.toLowerCase().includes(q);
    });
  }, [activeCat, search, t]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{t('skills.title')}</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">{t('skills.subtitle')}</p>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t('skills.search')}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white/15 transition-all"
            />
          </div>
          <p className="text-sm text-slate-400 mt-4">{t('skills.skill_count', { count: skillIds.length })}</p>
        </div>
      </section>

      {/* Category Tabs + Grid */}
      <section className="py-12 md:py-16 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            {catKeys.map(key => (
              <button
                key={key}
                onClick={() => setActiveCat(key)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCat === key
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-red-300 hover:text-red-600'
                }`}
              >
                {t(`skills.cat.${key}`)}
              </button>
            ))}
          </div>

          {filteredSkills.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredSkills.map(id => {
                const { icon, color } = SKILL_ICONS[id] || SKILL_ICONS[1];
                const isHot = t(`skills.items.${id}.hot`, '') === 'true';
                return (
                  <div key={id} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-red-200 transition-all group relative">
                    {isHot && (
                      <span className="absolute top-4 right-4 bg-red-50 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Flame className="w-3 h-3" /> {t('skills.hot')}
                      </span>
                    )}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                      {icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t(`skills.items.${id}.title`)}</h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">{t(`skills.items.${id}.desc`)}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Download className="w-3.5 h-3.5" />
                        <span>{t(`skills.items.${id}.installs`)}</span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">{t('skills.free')}</span>
                    </div>
                    <p className="text-xs text-slate-400 italic mt-3 border-t border-slate-100 pt-3">{t(`skills.items.${id}.val`)}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <Zap className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('skills.empty')}</h3>
              <p className="text-slate-500 mb-6">{t('skills.empty_sub')}</p>
              <button
                onClick={() => navigate('/about')}
                className="text-red-600 font-medium hover:text-red-700 inline-flex items-center gap-2"
              >
                {t('skills.contact')} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">{t('skills.future')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-12 pb-24 bg-slate-50">
        <button onClick={() => navigate('/preorder')} className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg">
          {t('product.preorder', '立即预定')}
        </button>
      </div>
    </>
  );
}
