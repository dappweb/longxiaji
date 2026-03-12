import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  Shield, Zap, MessageSquare, Cpu, Wifi, Lock, Clock, Gift,
  ChevronRight, CheckCircle2, Smartphone, Server, Briefcase,
  Image as ImageIcon, UserCheck, Globe, Mail, MessageCircle
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
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
              <span>全球首款开机即用的 AI 安全工作站</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
            >
              把 AI 助理请回你的桌面 <br className="hidden sm:block" />
              <span className="text-red-600">别让它住在你的电脑里</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed"
            >
              AI 需要你电脑的完整 Root 权限——你的银行密码、聊天记录、工作文件全部暴露。给它一台独立的机器，别拿你的电脑冒险。插电即用，3 分钟上手。
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button onClick={() => navigate('/preorder')} className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 group">
                抢先预定 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                观看演示视频
              </button>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-4"
            >
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> 七天无理由退货</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> 开箱即用承诺</span>
            </motion.p>
          </div>

          {/* Product Image section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-20 relative max-w-4xl mx-auto"
          >
            <div className="rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 relative flex items-center justify-center bg-white">
                <img src="/box/5050e13500344491bce2018ece160efd.png" alt="产品实拍图" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">不需要你懂电脑，它懂你</h2>
            <p className="text-lg text-slate-600">
              解决“用不用得上 AI”的问题。把配置、支付、注册等门槛全部消除。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-amber-500" />}
              title="零门槛开机即用"
              description="别人用 AI 需要打代码、配置环境、安装包——龙虾机插电开机就能用，和用微波炉一样简单。"
            />
            <FeatureCard 
              icon={<Lock className="w-6 h-6 text-emerald-500" />}
              title="数据只在你家里"
              description="你的聊天记录、银行密码、工作文件放心交给云端吗？龙虾机物理隔离，数据不出家门，拔电即断网。"
            />
            <FeatureCard 
              icon={<Clock className="w-6 h-6 text-blue-500" />}
              title="7×24 永不下班"
              description="白天你上班，它在家帮你整理邮件、撰写报告。晚上你睡觉，它还在跑量化交易策略。"
            />
            <FeatureCard 
              icon={<MessageSquare className="w-6 h-6 text-green-500" />}
              title="无缝接入微信/钉钉"
              description="不需要下载新 App，扫码绑定后，AI 助手直接出现在你的微信聊天列表中，随时随地发语音使唤它。"
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-indigo-500" />}
              title="费用透明可控"
              description="一次买断硬件，API 费用透明可控。比请一个实习生还划算，且不会请假离职。"
            />
            <FeatureCard 
              icon={<Gift className="w-6 h-6 text-rose-500" />}
              title="送长辈的科技礼"
              description="父母也能用的高科技。用微信问天气、查菜谱、读新闻摘要，复购率和口碑传播极强。"
            />
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">谁在用龙虾机？</h2>
            <p className="text-lg text-slate-400">
              从个人助理到企业数字员工，满足不同场景的 AI 需求。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <UserCheck className="w-8 h-8 text-red-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">个人用户 / 职场新人</h3>
              <p className="text-slate-400 mb-6">
                “拥有一个 24 小时在线的私人 AI 助理。微信里直接问，效率翻倍。”
              </p>
              <div className="text-sm font-medium text-slate-300 bg-slate-700/50 inline-block px-3 py-1 rounded-full">
                典型场景：日常问答、邮件起草
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <Briefcase className="w-8 h-8 text-red-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">中小企业 / 工作室</h3>
              <p className="text-slate-400 mb-6">
                “一台龙虾机的月费，还不到一个实习生的交通补贴。但它不会请假、不会离职、不会累，数据还绝对安全。”
              </p>
              <div className="text-sm font-medium text-slate-300 bg-slate-700/50 inline-block px-3 py-1 rounded-full">
                典型场景：客服自动回复、文案生成
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <Gift className="w-8 h-8 text-red-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">长辈 / 父母</h3>
              <p className="text-slate-400 mb-6">
                “它不仅仅是你的工具，也是给爸妈的一份 AI 礼物。父母用微信语音问天气、查菜谱，比智能音箱聪明多了。”
              </p>
              <div className="text-sm font-medium text-slate-300 bg-slate-700/50 inline-block px-3 py-1 rounded-full">
                典型场景：生活百科、健康食谱
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            别人还在学怎么用 AI<br/>你的龙虾机已经在帮你干活了
          </h2>
          <p className="text-xl text-red-100 mb-10">
            首批限量发售，抢先体验零门槛的桌面 AI 助理。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all shadow-xl">
              立即预定抢首发
            </button>
            <button className="w-full sm:w-auto bg-red-700 text-white border border-red-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-red-800 transition-all">
              联系企业采购
            </button>
          </div>
        </div>
      </section>
    </>
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

function FounderCard({ role, desc, icon }: { role: string, desc: string, icon: string }) {
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


