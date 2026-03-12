import re
import os

with open('src/App_old.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Create directories
os.makedirs('src/pages', exist_ok=True)
os.makedirs('src/components', exist_ok=True)

layout = """import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { MessageCircle, Mail, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Layout() {
  const [showQR, setShowQR] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900 flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">龙虾机</span>
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
              <button onClick={() => navigate('/preorder')} className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-600/20">
                立即预定
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet context={{ setShowQR }} />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-white text-lg">龙虾机 longxiaji.com</span>
              </div>
              <p className="text-sm border-l-2 border-red-600 pl-3">全球首款开机即用的 AI 安全工作站</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">快速链接</h4>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li><Link to="/product" className="hover:text-white transition-colors">产品介绍</Link></li>
                <li><Link to="/support" className="hover:text-white transition-colors">售后支持</Link></li>
                <li><Link to="/skills" className="hover:text-white transition-colors">技能市场</Link></li>
                <li><Link to="/cases" className="hover:text-white transition-colors">用户案例</Link></li>
                <li><Link to="/news" className="hover:text-white transition-colors">新闻资讯</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">联系我们</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">联系方式</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300">客服微信: w17702521191</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300">龙虾族交流群</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300">商务合作: 552961@qq.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 龙虾机 LongXiaJi. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> 深圳智造 · 全球首发</span>
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
"""

with open('src/components/Layout.tsx', 'w', encoding='utf-8') as f:
    f.write(layout)

# Write app router
app_router = """import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Skills from './pages/Skills';
import Cases from './pages/Cases';
import News from './pages/News';
import Contact from './pages/Contact';
import Preorder from './pages/Preorder';
import Support from './pages/Support';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="skills" element={<Skills />} />
        <Route path="cases" element={<Cases />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="preorder" element={<Preorder />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
}
"""

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(app_router)

# Utility dummy page
def get_dummy(name):
    return f"""import React from 'react';
import {{ useNavigate }} from 'react-router-dom';

export default function {name}() {{
  const navigate = useNavigate();
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[50vh]">
      <h1 className="text-4xl font-bold mb-8">{name}</h1>
      <p className="text-lg text-slate-600 mb-12">该模块内容正在建设中...</p>
      <button onClick={{() => navigate('/preorder')}} className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg">
        立即预定
      </button>
    </div>
  );
}}
"""

for page in ['Product', 'Support', 'Skills', 'Cases', 'News', 'Contact']:
    with open(f'src/pages/{page}.tsx', 'w', encoding='utf-8') as f:
        f.write(get_dummy(page))

print("Scaffold done")
