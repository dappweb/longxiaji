import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle, Mail, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Layout() {
  const { t, i18n } = useTranslation();
  const [showQR, setShowQR] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Debounce for QR
  const handleQR = () => {
    if(!showQR) setShowQR(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900 flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">{t('nav.logo', '龙虾机')}</span>
                <span className="text-[10px] text-slate-500 font-mono mt-1 leading-none">longxiaji.com</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link to="/" className="hover:text-red-600 transition-colors">{t('nav.home', '首页')}</Link>
              <Link to="/product" className="hover:text-red-600 transition-colors">{t('nav.product', '产品介绍')}</Link>
              <Link to="/support" className="hover:text-red-600 transition-colors">{t('nav.support', '售后支持')}</Link>
              <Link to="/skills" className="hover:text-red-600 transition-colors">{t('nav.skills', '技能市场')}</Link>
              <Link to="/cases" className="hover:text-red-600 transition-colors">{t('nav.cases', '用户案例')}</Link>
              <Link to="/news" className="hover:text-red-600 transition-colors">{t('nav.news', '新闻资讯')}</Link>
              <Link to="/contact" className="hover:text-red-600 transition-colors">{t('nav.contact', '联系我们')}</Link>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLanguage}
                className="hidden sm:flex items-center justify-center p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                title={i18n.language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-semibold ml-1">{i18n.language === 'en' ? 'EN' : '中'}</span>
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <button onClick={() => navigate('/preorder')} className="hidden sm:block bg-red-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-600/20">
                {t('nav.preorder', '立即预定')}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-y-auto max-h-[calc(100vh-4rem)] bg-white border-b border-slate-200 shadow-xl"
            >
              <div className="px-4 py-4 flex flex-col gap-4 text-sm font-medium text-slate-600">
                <div className="flex justify-between items-center mb-2 px-2">
                  <span className="text-slate-400 font-normal">{t('nav.lang', '切换语言')}</span>
                  <button 
                    onClick={toggleLanguage}
                    className="flex items-center justify-center p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    <span className="text-xs font-bold">{i18n.language === 'en' ? 'English' : '简体中文'}</span>
                  </button>
                </div>
                <div className="h-px bg-slate-100 mb-2"></div>
                <Link to="/" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">{t('nav.home', '首页')}</Link>
                <Link to="/product" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">{t('nav.product', '产品介绍')}</Link>
                <Link to="/support" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">{t('nav.support', '售后支持')}</Link>
                <Link to="/skills" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">{t('nav.skills', '技能市场')}</Link>
                <Link to="/cases" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">{t('nav.cases', '用户案例')}</Link>
                <Link to="/news" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">{t('nav.news', '新闻资讯')}</Link>
                <Link to="/contact" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">{t('nav.contact', '联系我们')}</Link>
                <button
                  onClick={() => { navigate('/preorder'); setMobileMenuOpen(false); }}
                  className="w-full bg-red-600 text-white px-5 py-3 rounded-xl text-center text-sm font-bold shadow-sm mt-2"
                >
                  {t('nav.preorder', '立即预定')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
        <main className="flex-1 overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            >
              <Outlet context={{ setShowQR: handleQR }} />
            </motion.div>
          </AnimatePresence>        </main>
      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white/10 p-1">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-bold text-white text-xl block">{t('nav.logo', '龙虾机')}</span>
                  <span className="text-xs text-slate-500 font-mono">longxiaji.com</span>
                </div>
              </div>
              <p className="text-sm border-l-2 border-red-600 pl-3 leading-relaxed max-w-sm">
                {t("footer.desc1", "全球首款开机即用的 AI 硬件终端。")}<br />{t("footer.desc2", "致力于打破技术壁垒，让每一个普通人都能以最自然的方式，享受到先进的人工智能服务。")}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">{t('nav.sitemap', '网站导航')}</h4>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                <li><Link to="/product" className="hover:text-red-400 transition-colors">{t('nav.product', '产品介绍')}</Link></li>
                <li><Link to="/support" className="hover:text-red-400 transition-colors">{t('nav.support', '售后支持')}</Link></li>
                <li><Link to="/skills" className="hover:text-red-400 transition-colors">{t('nav.skills', '技能市场')}</Link></li>
                <li><Link to="/cases" className="hover:text-red-400 transition-colors">{t('nav.cases', '用户案例')}</Link></li>
                <li><Link to="/news" className="hover:text-red-400 transition-colors">{t('nav.news', '新闻资讯')}</Link></li>
                <li><Link to="/contact" className="hover:text-red-400 transition-colors">{t('nav.contact', '团队与联系')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">{t('footer.contact', '商务合作')}</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-blue-400 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">{t('footer.contact', '商务合作')}</p>
                    <p className="text-xs text-slate-500">support@longxiaji.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800/80 text-sm flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-slate-500">
              <p>© {new Date().getFullYear()} {t("footer.rights_text", "龙虾机 LongXiaJi. 保留所有权利.")}</p>
              <div className="hidden md:block w-px h-4 bg-slate-700"></div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-slate-300 transition-colors">{t("footer.privacy", "隐私政策")}</a>
                <a href="#" className="hover:text-slate-300 transition-colors">{t("footer.terms", "服务条款")}</a>

              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-slate-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <Globe className="w-3.5 h-3.5" /> {t("footer.sz", "深圳智造 · 全球服务")} </span>
            </div>
          </div>
        </div>
      </footer>

      {showQR && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" onClick={() => setShowQR(false)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-sm w-full relative overflow-hidden text-center shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="fill" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden p-2">
              <img src="/logo.png" className="w-full h-full object-contain" alt="Logo" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('modal.title', '接收预定通知')}</h3>
            <p className="text-slate-600 mb-6">{t('modal.subtitle', '获取首批预定资格与首发专属优惠')}</p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6 text-center">
               <img src="/qrcode_wecom.png" alt="WeCom QR Code" className="w-48 h-48 mx-auto mix-blend-multiply" />
               <p className="text-sm text-slate-500 mt-4">{t('modal.desc1', '获取专人顾问支持')}</p>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              {t('modal.desc2', '长按或扫码添加企业微信，注明“龙虾机预定”')}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
