import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle, Mail, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [showQR, setShowQR] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
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
                <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">龙虾机</span>
                <span className="text-[10px] text-slate-500 font-mono mt-1 leading-none">longxiaji.com</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link to="/" className="hover:text-red-600 transition-colors">首页</Link>
              <Link to="/product" className="hover:text-red-600 transition-colors">产品介绍</Link>
              <Link to="/support" className="hover:text-red-600 transition-colors">售后支持</Link>
              <Link to="/skills" className="hover:text-red-600 transition-colors">技能市场</Link>
              <Link to="/cases" className="hover:text-red-600 transition-colors">用户案例</Link>
              <Link to="/news" className="hover:text-red-600 transition-colors">新闻资讯</Link>
              <Link to="/contact" className="hover:text-red-600 transition-colors">联系我们</Link>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <button onClick={() => navigate('/preorder')} className="hidden sm:block bg-red-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-600/20">
                立即预定
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
              className="md:hidden overflow-hidden bg-white border-b border-slate-200"
            >
              <div className="px-4 py-4 flex flex-col gap-4 text-sm font-medium text-slate-600">
                <Link to="/" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">首页</Link>
                <Link to="/product" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">产品介绍</Link>
                <Link to="/support" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">售后支持</Link>
                <Link to="/skills" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">技能市场</Link>
                <Link to="/cases" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">用户案例</Link>
                <Link to="/news" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">新闻资讯</Link>
                <Link to="/contact" className="hover:text-red-600 p-2 rounded-lg hover:bg-slate-50">联系我们</Link>
                <button 
                  onClick={() => { navigate('/preorder'); setMobileMenuOpen(false); }} 
                  className="w-full bg-red-600 text-white px-5 py-3 rounded-xl text-center text-sm font-bold shadow-sm mt-2"
                >
                  立即预定
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet context={{ setShowQR: handleQR }} />
            </motion.div>
          </AnimatePresence>        </main>
      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white/10 p-1">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-bold text-white text-xl block">龙虾机</span>
                  <span className="text-xs text-slate-500 font-mono">longxiaji.com</span>
                </div>
              </div>
              <p className="text-sm border-l-2 border-red-600 pl-3 leading-relaxed max-w-sm">
                全球首款开机即用的 AI 硬件终端。<br />
                致力于打破技术壁垒，让每一个普通人都能以最自然的方式，享受到先进的人工智能服务。
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">网站导航</h4>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                <li><Link to="/product" className="hover:text-red-400 transition-colors">产品介绍</Link></li>
                <li><Link to="/support" className="hover:text-red-400 transition-colors">售后支持</Link></li>
                <li><Link to="/skills" className="hover:text-red-400 transition-colors">技能市场</Link></li>
                <li><Link to="/cases" className="hover:text-red-400 transition-colors">用户案例</Link></li>
                <li><Link to="/news" className="hover:text-red-400 transition-colors">新闻资讯</Link></li>
                <li><Link to="/contact" className="hover:text-red-400 transition-colors">创始团队</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">联系我们</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3 group cursor-pointer" onClick={handleQR}>
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-green-900 group-hover:text-green-400 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">客服微信</p>
                    <p className="text-xs text-slate-500">w17702521191</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-blue-400 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">商务合作</p>
                    <p className="text-xs text-slate-500">552961@qq.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800/80 text-sm flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-slate-500">
              <p>© {new Date().getFullYear()} 龙虾机 LongXiaJi. 保留所有权利.</p>
              <div className="hidden md:block w-px h-4 bg-slate-700"></div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-slate-300 transition-colors">隐私政策</a>
                <a href="#" className="hover:text-slate-300 transition-colors">服务条款</a>
                <a href="#" className="hover:text-slate-300 transition-colors">粤ICP备********号</a>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-slate-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <Globe className="w-3.5 h-3.5" /> 深圳智造 · 全球服务
              </span>
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
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">添加客服微信</h3>
            <p className="text-slate-600 mb-6">获取首批预定资格与专属优惠</p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6 flex justify-center items-center">
              <div className="w-48 h-48 bg-white border border-slate-200 rounded-xl overflow-hidden p-2">
                <img src="/qrcode_wecom.png" alt="WeChat QR" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="text-sm font-medium text-slate-700 bg-slate-100 py-2 px-4 rounded-lg inline-flex items-center gap-2">
              微信号: <span className="text-red-600 select-all">w17702521191</span>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              扫码添加客服，注明“龙虾机预定”
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
