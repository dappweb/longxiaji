import React from 'react';
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
  Globe
} from 'lucide-react';

export default function App() {
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
              <a href="#features" className="hover:text-red-600 transition-colors">核心特性</a>
              <a href="#how-it-works" className="hover:text-red-600 transition-colors">三步上手</a>
              <a href="#skills" className="hover:text-red-600 transition-colors">技能中心</a>
              <a href="#specs" className="hover:text-red-600 transition-colors">硬件规格</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                登录
              </button>
              <button className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-600/20">
                立即预定
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
              <span>迪拜首发，全球火爆 —— 中国智造 AI 硬件</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
            >
              把 AI 助理 <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">请回你的桌面</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed"
            >
              预装 OpenClaw 系统的消费级 AI 硬件平台。告别翻墙、API Key 和繁琐配置。开机即用，三步连通微信，你的 24 小时私人 AI 助理。
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 group">
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
                    OpenClaw 系统运行中
                  </div>
                  <div className="px-4 py-2 bg-zinc-800/80 backdrop-blur rounded-full border border-zinc-700 text-zinc-300 text-sm flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    微信已连接
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">不需要你懂电脑，它懂你</h2>
            <p className="text-lg text-slate-600">
              解决“用不用得上 AI”的问题。把翻墙、配置、支付、注册四道门槛全部消除。
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
              description="一次买断硬件，API 费用透明可控。每天不到一块钱，比请一个实习生还便宜，且不会请假离职。"
            />
            <FeatureCard 
              icon={<Gift className="w-6 h-6 text-rose-500" />}
              title="送长辈的科技礼"
              description="父母也能用的高科技。用微信问天气、查菜谱、读新闻摘要，复购率和口碑传播极强。"
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">三步上手，全程不超过 3 分钟</h2>
            <p className="text-lg text-slate-400">
              不需要任何技术背景，收到机器后跟着引导界面走完三步，立即体验 AI。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800 z-0" />
            
            <StepCard 
              number="1"
              title="连网 + 激活"
              description="插网线或连 WiFi，屏幕显示二维码，手机扫码自动激活。激活即送初始 API 额度，足够体验数天。"
              icon={<Wifi className="w-8 h-8 text-red-500" />}
            />
            <StepCard 
              number="2"
              title="绑定 IM 账号"
              description="支持微信、钉钉、飞书、QQ。点击图标扫码授权，龙虾助手自动出现在你的会话列表中。"
              icon={<Smartphone className="w-8 h-8 text-red-500" />}
            />
            <StepCard 
              number="3"
              title="体验引导"
              description="在微信中发送第一条消息给助手，自动推送 3 个开箱任务示例，点击即可执行，秒速上手。"
              icon={<Zap className="w-8 h-8 text-red-500" />}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">预装 Skills，开箱即用</h2>
            <p className="text-lg text-slate-600">
              硬件是入口，Skills 是灵魂。满足从日常闲聊到深度办公的全方位需求。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <SkillCard 
              icon={<MessageSquare className="w-6 h-6 text-blue-500" />}
              title="智能对话"
              features={['多模型一键切换 (GPT, Claude, 通义千问等)', '精准翻译与长文摘要', '高质量文案写作']}
              value="“比 ChatGPT 还方便，不用翻墙”"
            />
            <SkillCard 
              icon={<Briefcase className="w-6 h-6 text-emerald-500" />}
              title="办公助手"
              features={['Excel 复杂公式生成', 'PPT 大纲一键生成', '中英文邮件自动起草']}
              value="“在微信里说一句就能用”"
            />
            <SkillCard 
              icon={<Clock className="w-6 h-6 text-amber-500" />}
              title="生活工具"
              features={['智能日程管理与提醒', '个性化天气预报', '每日新闻摘要推送']}
              value="“每天早上收到专属 AI 早报”"
            />
            <SkillCard 
              icon={<ImageIcon className="w-6 h-6 text-purple-500" />}
              title="图片/视频处理"
              features={['精准图片识别与分析', '一句话文字转图', '基础视频脚本处理']}
              value="“拍照片就能翻译，一句话出图”"
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">未来更将开放 Skills 市场，支持量化交易、电商运营等高级订阅服务。</p>
            <button className="text-red-600 font-medium hover:text-red-700 flex items-center justify-center gap-1 mx-auto">
              探索更多 Skills <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">纯云端代理架构<br/>本地零推理</h2>
              <p className="text-lg text-slate-600 mb-8">
                龙虾机不做本地模型推理。所有大模型调用均通过云端 API 聚合层完成，本地硬件专注于运行 OpenClaw 系统、任务调度和存储用户私密数据。
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Cpu className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">16 GB 内存</h4>
                    <p className="text-slate-600 text-sm mt-1">足够支撑多任务并发与多个 IM 客户端同时在线，运行流畅不卡顿。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Server className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">256 GB / 512 GB 存储</h4>
                    <p className="text-slate-600 text-sm mt-1">系统约占 30-40 GB，剩余空间用于存储你的私密文件、聊天记录和 Skills 数据。支持云盘扩容。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Wifi className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">有线 + WiFi 双网络</h4>
                    <p className="text-slate-600 text-sm mt-1">云端代理架构下网络连接是核心依赖，提供稳定可靠的网络接入方案。</p>
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
                  <span>≤ Mac mini 尺寸</span>
                  <span>低功耗 / 无风扇</span>
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
                “每天不到一块钱，拥有一个 24 小时在线的私人 AI 助理。不用折腾翻墙账号，微信里直接问，效率翻倍。”
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

      {/* CTA Section */}
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
              <p className="text-sm">预装 OpenClaw 系统的消费级 AI 硬件平台。</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">核心特性</a></li>
                <li><a href="#" className="hover:text-white transition-colors">硬件规格</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Skills 市场</a></li>
                <li><a href="#" className="hover:text-white transition-colors">企业定制</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">支持</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">使用指南</a></li>
                <li><a href="#" className="hover:text-white transition-colors">常见问题</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API 文档</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系客服</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">关于</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">加入开发者</a></li>
                <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
                <li><a href="#" className="hover:text-white transition-colors">服务条款</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 龙虾机 LongXiaJi. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> 中国智造，全球首发</span>
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
