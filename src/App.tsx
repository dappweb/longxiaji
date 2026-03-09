import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Zap, 
  MessageSquare, 
  Cpu, 
  Wifi, 
  Lock, 
  Clock, 
  Gift, 
  ChevronRight, 
  CheckCircle2,
  Smartphone,
  Server,
  Briefcase,
  Image as ImageIcon,
  UserCheck,
  Globe,
  Mail,
  MessageCircle,
  Languages,
  LineChart,
  ShoppingBag,
  Video,
  Calculator,
  Download,
  Quote
} from 'lucide-react';
import { translations } from './translations';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const t = translations[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                🦞
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">龙虾机 <span className="text-red-600">LongXiaJi</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-red-600 transition-colors">{t.nav.features}</a>
              <a href="#how-it-works" className="hover:text-red-600 transition-colors">{t.nav.howItWorks}</a>
              <a href="#skills" className="hover:text-red-600 transition-colors">{t.nav.skills}</a>
              <a href="#skill-market" className="hover:text-red-600 transition-colors">{t.nav.skillMarket}</a>
              <a href="#cases" className="hover:text-red-600 transition-colors">{t.nav.cases}</a>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                title="Toggle Language"
              >
                <Languages className="w-4 h-4" />
                {lang === 'zh' ? 'EN' : '中文'}
              </button>
              <button className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.login}
              </button>
              <button className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-600/20">
                {t.nav.preorder}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-50 via-slate-50 to-slate-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-8"
            >
              <Globe className="w-4 h-4" />
              <span>{t.hero.badge}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
            >
              {t.hero.title1} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">{t.hero.title2}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed"
            >
              {t.hero.desc}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 group">
                {t.hero.btnPreorder} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                {t.hero.btnVideo}
              </button>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-4"
            >
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> {t.hero.guarantee1}</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> {t.hero.guarantee2}</span>
            </motion.p>
          </div>

          {/* Product Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-20 relative max-w-4xl mx-auto"
          >
            <div className="aspect-[16/9] bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-800 relative flex items-center justify-center">
              {/* Abstract representation of the device and UI */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl shadow-2xl shadow-red-500/20 flex items-center justify-center mb-8 border border-red-400/30">
                  <span className="text-6xl">🦞</span>
                </div>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-zinc-800/80 backdrop-blur rounded-full border border-zinc-700 text-zinc-300 text-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {t.hero.systemStatus}
                  </div>
                  <div className="px-4 py-2 bg-zinc-800/80 backdrop-blur rounded-full border border-zinc-700 text-zinc-300 text-sm flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    {t.hero.wechatStatus}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.features.title}</h2>
            <p className="text-lg text-slate-600">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-amber-500" />}
              title={t.features.items[0].title}
              description={t.features.items[0].desc}
            />
            <FeatureCard 
              icon={<Lock className="w-6 h-6 text-emerald-500" />}
              title={t.features.items[1].title}
              description={t.features.items[1].desc}
            />
            <FeatureCard 
              icon={<Clock className="w-6 h-6 text-blue-500" />}
              title={t.features.items[2].title}
              description={t.features.items[2].desc}
            />
            <FeatureCard 
              icon={<MessageSquare className="w-6 h-6 text-green-500" />}
              title={t.features.items[3].title}
              description={t.features.items[3].desc}
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-indigo-500" />}
              title={t.features.items[4].title}
              description={t.features.items[4].desc}
            />
            <FeatureCard 
              icon={<Gift className="w-6 h-6 text-rose-500" />}
              title={t.features.items[5].title}
              description={t.features.items[5].desc}
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.howItWorks.title}</h2>
            <p className="text-lg text-slate-400">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800 z-0" />
            
            <StepCard 
              number="1"
              title={t.howItWorks.steps[0].title}
              description={t.howItWorks.steps[0].desc}
              icon={<Wifi className="w-8 h-8 text-red-500" />}
            />
            <StepCard 
              number="2"
              title={t.howItWorks.steps[1].title}
              description={t.howItWorks.steps[1].desc}
              icon={<Smartphone className="w-8 h-8 text-red-500" />}
            />
            <StepCard 
              number="3"
              title={t.howItWorks.steps[2].title}
              description={t.howItWorks.steps[2].desc}
              icon={<Zap className="w-8 h-8 text-red-500" />}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.skills.title}</h2>
            <p className="text-lg text-slate-600">
              {t.skills.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <SkillCard 
              icon={<MessageSquare className="w-6 h-6 text-blue-500" />}
              title={t.skills.items[0].title}
              features={t.skills.items[0].features}
              value={t.skills.items[0].value}
            />
            <SkillCard 
              icon={<Briefcase className="w-6 h-6 text-emerald-500" />}
              title={t.skills.items[1].title}
              features={t.skills.items[1].features}
              value={t.skills.items[1].value}
            />
            <SkillCard 
              icon={<Clock className="w-6 h-6 text-amber-500" />}
              title={t.skills.items[2].title}
              features={t.skills.items[2].features}
              value={t.skills.items[2].value}
            />
            <SkillCard 
              icon={<ImageIcon className="w-6 h-6 text-purple-500" />}
              title={t.skills.items[3].title}
              features={t.skills.items[3].features}
              value={t.skills.items[3].value}
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">{t.skills.more}</p>
            <a href="#skill-market" className="text-red-600 font-medium hover:text-red-700 flex items-center justify-center gap-1 mx-auto">
              {t.skills.explore} <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Skill Market Section */}
      <section id="skill-market" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.skillMarket.title}</h2>
            <p className="text-lg text-slate-600">
              {t.skillMarket.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MarketSkillCard 
              icon={<LineChart className="w-6 h-6 text-white" />}
              iconBg="bg-blue-600"
              title={t.skillMarket.items[0].title}
              desc={t.skillMarket.items[0].desc}
              author={t.skillMarket.items[0].author}
              price={t.skillMarket.items[0].price}
            />
            <MarketSkillCard 
              icon={<ShoppingBag className="w-6 h-6 text-white" />}
              iconBg="bg-orange-500"
              title={t.skillMarket.items[1].title}
              desc={t.skillMarket.items[1].desc}
              author={t.skillMarket.items[1].author}
              price={t.skillMarket.items[1].price}
            />
            <MarketSkillCard 
              icon={<Video className="w-6 h-6 text-white" />}
              iconBg="bg-purple-600"
              title={t.skillMarket.items[2].title}
              desc={t.skillMarket.items[2].desc}
              author={t.skillMarket.items[2].author}
              price={t.skillMarket.items[2].price}
            />
            <MarketSkillCard 
              icon={<Calculator className="w-6 h-6 text-white" />}
              iconBg="bg-emerald-600"
              title={t.skillMarket.items[3].title}
              desc={t.skillMarket.items[3].desc}
              author={t.skillMarket.items[3].author}
              price={t.skillMarket.items[3].price}
            />
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.specs.title1}<br/>{t.specs.title2}</h2>
              <p className="text-lg text-slate-600 mb-8">
                {t.specs.desc}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Cpu className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t.specs.items[0].title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{t.specs.items[0].desc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Server className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t.specs.items[1].title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{t.specs.items[1].desc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Wifi className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t.specs.items[2].title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{t.specs.items[2].desc}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="aspect-square bg-slate-100 rounded-3xl border border-slate-200 p-8 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                {/* Device Mockup */}
                <div className="relative z-10 w-64 h-64 bg-zinc-900 rounded-3xl shadow-2xl border-t border-zinc-700 flex flex-col items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg shadow-red-600/40">
                    🦞
                  </div>
                  <div className="text-zinc-400 font-mono text-xs tracking-widest uppercase">LongXiaJi</div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                </div>
                
                {/* Size reference */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-slate-400 text-sm font-medium">
                  <span>{t.specs.size}</span>
                  <span>{t.specs.power}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.scenarios.title}</h2>
            <p className="text-lg text-slate-400">
              {t.scenarios.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <UserCheck className="w-8 h-8 text-red-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">{t.scenarios.items[0].title}</h3>
              <p className="text-slate-400 mb-6">
                {t.scenarios.items[0].desc}
              </p>
              <div className="text-sm font-medium text-slate-300 bg-slate-700/50 inline-block px-3 py-1 rounded-full">
                {t.scenarios.items[0].tag}
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <Briefcase className="w-8 h-8 text-red-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">{t.scenarios.items[1].title}</h3>
              <p className="text-slate-400 mb-6">
                {t.scenarios.items[1].desc}
              </p>
              <div className="text-sm font-medium text-slate-300 bg-slate-700/50 inline-block px-3 py-1 rounded-full">
                {t.scenarios.items[1].tag}
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <Gift className="w-8 h-8 text-red-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">{t.scenarios.items[2].title}</h3>
              <p className="text-slate-400 mb-6">
                {t.scenarios.items[2].desc}
              </p>
              <div className="text-sm font-medium text-slate-300 bg-slate-700/50 inline-block px-3 py-1 rounded-full">
                {t.scenarios.items[2].tag}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Cases Section */}
      <section id="cases" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.userCases.title}</h2>
            <p className="text-lg text-slate-600">
              {t.userCases.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.userCases.items.map((caseItem, idx) => (
              <UserCaseCard 
                key={idx}
                quote={caseItem.quote}
                name={caseItem.name}
                role={caseItem.role}
                avatar={caseItem.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.founders.title}</h2>
            <p className="text-lg text-slate-600">
              {t.founders.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {t.founders.items.map((founder, idx) => (
              <FounderCard key={idx} role={founder.role} desc={founder.desc} icon={founder.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.cta.title1}<br/>{t.cta.title2}
          </h2>
          <p className="text-xl text-red-100 mb-10">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all shadow-xl">
              {t.cta.btn1}
            </button>
            <button className="w-full sm:w-auto bg-red-700 text-white border border-red-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-red-800 transition-all">
              {t.cta.btn2}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center text-white text-xs">
                  🦞
                </div>
                <span className="font-bold text-white">龙虾机</span>
              </div>
              <p className="text-sm">{t.footer.desc}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.product}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.features}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.specs}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.skills}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.enterprise}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.support}</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300">微信: 552961</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300">QQ: 552961</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300">邮箱: 552961@qq.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.about}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.aboutUs}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.joinUs}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.privacy}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.terms}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 龙虾机 LongXiaJi. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> {t.footer.madeIn}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all group">
      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description, icon }: { number: string, title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="relative z-10 bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-slate-900 rounded-full border-4 border-slate-800 flex items-center justify-center mb-6 relative shadow-xl">
        {icon}
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-slate-800">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}

function SkillCard({ icon, title, features, value }: { icon: React.ReactNode, title: string, features: string[], value: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-slate-600">
            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
        <p className="text-sm font-medium text-slate-700 italic">{value}</p>
      </div>
    </div>
  );
}

function FounderCard({ role, desc, icon }: { role: string, desc: string, icon: string, key?: any }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-3xl mb-4 border border-slate-100 shadow-inner">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{role}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function MarketSkillCard({ icon, iconBg, title, desc, author, price }: { icon: React.ReactNode, iconBg: string, title: string, desc: string, author: string, price: string }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-red-200 transition-all flex flex-col h-full group">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${iconBg}`}>
          {icon}
        </div>
        <span className="bg-white px-2 py-1 rounded text-xs font-bold text-slate-700 border border-slate-200 shadow-sm">
          {price}
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-xs text-slate-500 mb-4">{author}</p>
      <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-6">{desc}</p>
      <button className="w-full bg-white border border-slate-200 text-slate-700 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 hover:border-slate-300 transition-colors flex items-center justify-center gap-2 group-hover:border-red-200 group-hover:text-red-600">
        <Download className="w-4 h-4" /> 订阅安装
      </button>
    </div>
  );
}

function UserCaseCard({ quote, name, role, avatar }: { quote: string, name: string, role: string, avatar: string, key?: any }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200" />
      <p className="text-slate-700 leading-relaxed mb-8 relative z-10 italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xl">
          {avatar}
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{name}</h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
