import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Shield, Zap, MessageSquare, Lock, Clock, Gift,
  ChevronRight, Briefcase, Play,
  UserCheck, Globe, CheckCircle2, ArrowDown,
  HardDrive, Fan, Puzzle,
  Image as ImageIcon, Video, Mic, PenTool, ShoppingBag, Bot
} from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';

const CAN_ICONS = [ImageIcon, Video, Bot, Mic, PenTool, ShoppingBag];

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const productRef = useRef<HTMLDivElement>(null);
  useEffect(() => { document.title = t('nav.logo', '龙虾机') + ' · ' + t('hero.badge', '全球首款开机即用的 AI 安全工作站'); }, [t]);

  const scrollToProduct = () => {
    productRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden">
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
              <span>{t('hero.badge', '全球首款开机即用的 AI 安全工作站')}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
            >
              {t('hero.title1', '把 AI 助理请回你的桌面')} <br className="hidden sm:block" />
              <span className="text-red-600">{t('hero.title2', '别让它住在你的电脑里')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed"
            >
              {t('hero.desc', 'AI 需要你电脑的完整 Root 权限——你的银行密码、聊天记录、工作文件全部暴露。给它一台独立的机器，别拿你的电脑冒险。插电即用，3 分钟上手。')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button onClick={() => navigate('/preorder')} className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 group">
                {t('hero.preorder', '抢先预定')} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={scrollToProduct} className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5" /> {t('hero.video', '观看演示视频')}
              </button>
              <button onClick={() => navigate('/admin/announcements')} className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
                {t('hero.publish_announcement', '发布公告')} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-4"
            >
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> {t('hero.guarantee1', '七天无理由退货')}</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> {t('hero.guarantee2', '开箱即用承诺')}</span>
            </motion.p>
          </div>

          {/* Product Image */}
          <motion.div 
            ref={productRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-20 relative max-w-4xl mx-auto"
          >
            <div className="rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 relative flex items-center justify-center bg-white">
                <img src="/box/5050e13500344491bce2018ece160efd.png" alt={t('product.img_alt')} className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-red-600">{t('home.stats.skills', '12+')}</p>
              <p className="text-sm text-slate-500 mt-1">{t('home.stats.skills_label', '预装 AI 技能')}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-red-600">{t('home.stats.setup', '3 min')}</p>
              <p className="text-sm text-slate-500 mt-1">{t('home.stats.setup_label', '开机到上手')}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-red-600">{t('home.stats.offices', '8')}</p>
              <p className="text-sm text-slate-500 mt-1">{t('home.stats.offices_label', '全球办事处')}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-red-600">{t('home.stats.uptime', '24/7')}</p>
              <p className="text-sm text-slate-500 mt-1">{t('home.stats.uptime_label', '全天候运行')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t("home.sec1.title", "不需要你懂电脑，它懂你")}</h2>
            <p className="text-lg text-slate-600">
              {t('home.sec1.sub', '解决\u201c用不用得上 AI\u201d的问题。把配置、支付、注册等门槛全部消除。')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-amber-500" />}
              title={t("home.sec1.f1.title", "零门槛开机即用")}
              description={t("home.sec1.f1.desc", "别人用 AI 需要打代码、配置环境、安装包——龙虾机插电开机就能用，和用微波炉一样简单。")}
            />
            <FeatureCard 
              icon={<Lock className="w-6 h-6 text-emerald-500" />}
              title={t("home.sec1.f2.title", "数据只在你家里")}
              description={t("home.sec1.f2.desc", "你的聊天记录、银行密码、工作文件放心交给云端吗？龙虾机物理隔离，数据不出家门，拔电即断网。")}
            />
            <FeatureCard 
              icon={<Clock className="w-6 h-6 text-blue-500" />}
              title={t("home.sec1.f3.title", "7×24 永不下班")}
              description={t("home.sec1.f3.desc", "白天你上班，它在家帮你整理邮件、撰写报告。晚上你睡觉，它还在跑量化交易策略。")}
            />
            <FeatureCard 
              icon={<MessageSquare className="w-6 h-6 text-green-500" />}
              title={t("home.sec1.f4.title", "无缝接入微信/钉钉")}
              description={t("home.sec1.f4.desc", "不需要下载新 App，扫码绑定后，AI 助手直接出现在你的微信聊天列表中，随时随地发语音使唤它。")}
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-indigo-500" />}
              title={t("home.sec1.f5.title", "费用透明可控")}
              description={t("home.sec1.f5.desc", "一次买断硬件，API 费用透明可控。比请一个实习生还划算，且不会请假离职。")}
            />
            <FeatureCard 
              icon={<Gift className="w-6 h-6 text-rose-500" />}
              title={t("home.sec1.f6.title", "送长辈的科技礼")}
              description={t("home.sec1.f6.desc", "父母也能用的高科技。用微信问天气、查菜谱、读新闻摘要，复购率和口碑传播极强。")}
            />
          </div>
        </div>
      </section>
      
      {/* Story: Intro + Ready (merged) */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{t('home.story.title')}</h2>
          <p className="text-2xl text-slate-200 font-medium">{t('home.story.intro1')}</p>
          <p className="text-lg text-slate-400">{t('home.story.intro2')}</p>
          <p className="text-base text-slate-500 font-mono">{t('home.story.intro3')}</p>
          <p className="text-xl font-bold text-slate-400">{t('home.story.intro4')}</p>
          <div className="pt-6 space-y-2">
            <p className="text-lg text-slate-300">{t('home.story.intro5')}</p>
            <p className="text-2xl md:text-3xl font-bold text-white">{t('home.story.intro6')}</p>
          </div>
          <div className="pt-8 border-t border-slate-700 mt-8 space-y-2">
            <p className="text-xl text-red-400 font-semibold">{t('home.story.intro7')}</p>
            <p className="text-lg text-slate-400">{t('home.story.intro8')}</p>
          </div>
          <div className="pt-10 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">{t('home.story.ready_title')}</h3>
            <p className="text-lg text-slate-400">{t('home.story.ready1')}</p>
            <p className="text-lg text-slate-400">{t('home.story.ready2')}</p>
            <p className="text-2xl md:text-3xl font-extrabold text-red-400 mt-4">{t('home.story.ready_steps')}</p>
          </div>
        </div>
      </section>

      {/* Story: Your Own Device + Privacy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{t('home.story.own_title')}</h3>
          <p className="text-lg text-slate-600">{t('home.story.own1')}</p>
          <p className="text-lg text-slate-600">{t('home.story.own2')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-700 font-medium">{t('home.story.own_f1')}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
              <Lock className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-700 font-medium">{t('home.story.own_f2')}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
              <Zap className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-700 font-medium">{t('home.story.own_f3')}</span>
            </div>
          </div>
          <p className="text-xl font-bold text-slate-900 pt-4">{t('home.story.own4')}</p>
        </div>
      </section>

      {/* Capabilities Grid (with icons) */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('home.story.can_title')}</h3>
            <p className="text-lg text-slate-600">{t('home.story.can1')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(['can_f1', 'can_f2', 'can_f3', 'can_f4', 'can_f5', 'can_f6'] as const).map((key, idx) => {
              const Icon = CAN_ICONS[idx];
              return (
                <div key={key} className="bg-white rounded-2xl p-6 text-center border border-slate-200 hover:shadow-md hover:border-red-200 transition-all">
                  <Icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
                  <p className="font-semibold text-slate-900">{t(`home.story.${key}`)}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12 space-y-2">
            <p className="text-lg text-slate-600">{t('home.story.can2')}</p>
            <p className="text-2xl font-bold text-red-600">{t('home.story.can4')}</p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => navigate('/preorder')}
            className="bg-red-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 inline-flex items-center gap-2 group"
          >
            {t('hero.preorder', '抢先预定')} <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* Who Uses + Era + Hardware (merged, replaces old story.who + sec2) */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.sec2.title", "谁在用龙虾机？")}</h2>
            <p className="text-lg text-slate-400">
              {t("home.sec2.sub", "从个人助理到企业数字员工，满足不同场景的 AI 需求。")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <UserCheck className="w-8 h-8 text-red-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">{t("home.sec2.c1.title", "个人用户 / 职场新人")}</h3>
              <p className="text-slate-400 mb-6">
                {t('home.sec2.c1.q', '\u201c拥有一个 24 小时在线的私人 AI 助理。微信里直接问，效率翻倍。\u201d')}
              </p>
              <div className="text-sm font-medium text-slate-300 bg-slate-700/50 inline-block px-3 py-1 rounded-full">
                {t("home.sec2.c1.scene", "典型场景：日常问答、邮件起草")}
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <Briefcase className="w-8 h-8 text-red-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">{t("home.sec2.c2.title", "中小企业 / 工作室")}</h3>
              <p className="text-slate-400 mb-6">
                {t('home.sec2.c2.q', '\u201c一台龙虾机的月费，还不到一个实习生的交通补贴。但它不会请假、不会离职、不会累，数据还绝对安全。\u201d')}
              </p>
              <div className="text-sm font-medium text-slate-300 bg-slate-700/50 inline-block px-3 py-1 rounded-full">
                {t("home.sec2.c2.scene", "典型场景：客服自动回复、文案生成")}
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <Gift className="w-8 h-8 text-red-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">{t("home.sec2.c3.title", "长辈 / 父母")}</h3>
              <p className="text-slate-400 mb-6">
                {t('home.sec2.c3.q', '\u201c它不仅仅是你的工具，也是给爸妈的一份 AI 礼物。父母用微信语音问天气、查菜谱，比智能音箱聪明多了。\u201d')}
              </p>
              <div className="text-sm font-medium text-slate-300 bg-slate-700/50 inline-block px-3 py-1 rounded-full">
                {t("home.sec2.c3.scene", "典型场景：生活百科、健康食谱")}
              </div>
            </div>
          </div>

          {/* Era + Hardware (inline) */}
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold">{t('home.story.era_title')}</h3>
              <p className="text-lg text-slate-400">{t('home.story.era1')}</p>
              <p className="text-lg text-slate-300">{t('home.story.era2')}</p>
              <p className="text-2xl font-bold text-red-400 pt-2">{t('home.story.era3')}</p>
            </div>

            <div className="text-center space-y-6 border-t border-slate-800 pt-12">
              <h3 className="text-2xl md:text-3xl font-bold">{t('home.story.hw_title')}</h3>
              <p className="text-lg text-slate-400">{t('home.story.hw1')}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                <div className="flex items-center gap-3 bg-slate-800 px-6 py-4 rounded-2xl border border-slate-700">
                  <HardDrive className="w-6 h-6 text-red-400" />
                  <span className="text-slate-200 font-medium">{t('home.story.hw_f1')}</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800 px-6 py-4 rounded-2xl border border-slate-700">
                  <Fan className="w-6 h-6 text-red-400" />
                  <span className="text-slate-200 font-medium">{t('home.story.hw_f2')}</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800 px-6 py-4 rounded-2xl border border-slate-700">
                  <Puzzle className="w-6 h-6 text-red-400" />
                  <span className="text-slate-200 font-medium">{t('home.story.hw_f3')}</span>
                </div>
              </div>
              <p className="text-lg text-slate-400">{t('home.story.hw2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — no external texture */}
      <section className="py-16 md:py-24 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("home.sec3.t1", "别人还在学怎么用 AI")}<br/>{t("home.sec3.t2", "你的龙虾机已经在帮你干活了")}
          </h2>
          <p className="text-xl text-red-100 mb-10">
            {t("home.sec3.sub", "首批限量发售，抢先体验零门槛的桌面 AI 助理。")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/preorder')}
              className="w-full sm:w-auto bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all shadow-xl"
            >
              {t("home.sec3.btn1", "立即预定抢首发")}
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="w-full sm:w-auto bg-red-700 text-white border border-red-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-red-800 transition-all"
            >
              {t("home.sec3.btn2", "联系企业采购")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
