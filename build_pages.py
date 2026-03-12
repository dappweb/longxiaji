import re

with open('src/App_old.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract helper components
cards = re.search(r'(function FeatureCard.*)', text, re.DOTALL).group(1)

# Extract sections
# We need Hero, Features, Who is using (Cases), Founders, CTA.
hero_match = re.search(r'\{/\* Hero Section \*/\}(.*?)</section>', text, re.DOTALL)
features_match = re.search(r'<section id="features"(.*?)</section>', text, re.DOTALL)
howitworks_match = re.search(r'<section id="how-it-works"(.*?)</section>', text, re.DOTALL)
skills_match = re.search(r'<section id="skills"(.*?)</section>', text, re.DOTALL)
specs_match = re.search(r'<section id="specs"(.*?)</section>', text, re.DOTALL)
cases_match = re.search(r'<section className="py-24 bg-slate-900 text-white"(.*?)</section>', text, re.DOTALL)
founders_match = re.search(r'<section id="founders"(.*?)</section>', text, re.DOTALL)
cta_match = re.search(r'<section className="py-24 bg-red-600 relative overflow-hidden"(.*?)</section>', text, re.DOTALL)

home_content = f"""import React from 'react';
import {{ motion }} from 'motion/react';
import {{ useNavigate }} from 'react-router-dom';
import {{
  Shield, Zap, MessageSquare, Cpu, Wifi, Lock, Clock, Gift,
  ChevronRight, CheckCircle2, Smartphone, Server, Briefcase,
  Image as ImageIcon, UserCheck, Globe, Mail, MessageCircle
}} from 'lucide-react';

export default function Home() {{
  const navigate = useNavigate();
  return (
    <>
      {{/* Hero Section */}}
      {hero_match.group(0).replace('onClick={() => setShowQR(true)}', "onClick={() => navigate('/preorder')}")}

      <section id="features"{features_match.group(1)}</section>
      
      <section className="py-24 bg-slate-900 text-white"{cases_match.group(1)}</section>

      <section className="py-24 bg-red-600 relative overflow-hidden"{cta_match.group(1)}</section>
    </>
  );
}}

{cards}
"""

with open('src/pages/Home.tsx', 'w', encoding='utf-8') as f:
    f.write(home_content)

# Write Preorder.tsx based on the docx specs
preorder_content = """import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useOutletContext } from 'react-router-dom';
import { CheckCircle2, Shield, Truck, RotateCcw } from 'lucide-react';

export default function Preorder() {
  const { setShowQR } = useOutletContext<any>();
  const [soldCount, setSoldCount] = useState(0);
  const targetSold = 8347;

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = targetSold / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetSold) {
        setSoldCount(targetSold);
        clearInterval(timer);
      } else {
        setSoldCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0D0D1A] min-h-screen text-white pt-16 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">龙虾机 · 立即预定</h1>
          <p className="text-xl text-slate-400">全球首款开机即用的 AI 安全工作站</p>
        </div>

        {/* Product Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">AI 安全工作站 · 标准版</h2>
              <p className="text-slate-400 mb-4">16GB 内存 · 256GB 存储 · 预装 OpenClaw · 开机即用</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300">独立硬件</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300">数据隔离</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300">7x24运行</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300">免费AI额度</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-slate-500 line-through text-lg mb-1">AED 2,980</div>
              <div className="text-4xl font-extrabold text-red-500"><span className="text-2xl">¥</span>298<span className="text-xl text-slate-400">/台</span></div>
              <div className="text-xs text-slate-500 mt-1">发货前可随时全额退款</div>
            </div>
          </div>
        </div>

        {/* Stock Countdown */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 backdrop-blur-sm">
          <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            限量 10,000 台 · 实时库存
          </h3>
          
          <div className="h-4 bg-slate-800 rounded-full overflow-hidden mb-4">
            <motion.div 
              className="h-full bg-gradient-to-r from-red-600 to-orange-500"
              initial={{ width: "0%" }}
              animate={{ width: `${(soldCount / 10000) * 100}%` }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
          
          <div className="flex justify-between items-center font-mono">
            <div>
              <div className="text-slate-400 text-sm">已预定</div>
              <div className="text-2xl font-bold">{soldCount.toLocaleString()}</div>
            </div>
            <div className="text-right">
              <div className="text-slate-400 text-sm">剩余席位</div>
              <div className="text-2xl font-bold text-red-500">{(10000 - soldCount).toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button 
          onClick={() => setShowQR(true)}
          className="w-full bg-red-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-red-700 transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] mb-8"
        >
          立即预定 · ¥298
        </button>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-center gap-2 text-slate-400 bg-white/5 py-4 rounded-xl">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">独立安全硬件</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400 bg-white/5 py-4 rounded-xl">
            <Truck className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium">顺丰包邮</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400 bg-white/5 py-4 rounded-xl">
            <RotateCcw className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium">7天无理由退货</span>
          </div>
        </div>

      </div>
    </div>
  );
}
"""

with open('src/pages/Preorder.tsx', 'w', encoding='utf-8') as f:
    f.write(preorder_content)

print('Script components generated!')
