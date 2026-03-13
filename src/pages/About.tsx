import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  MapPin, Shield, Zap, Clock, MessageSquare
} from 'lucide-react';

export default function About() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => { document.title = `${t('nav.contact', '\u5173\u4e8e\u6211\u4eec')} \u00b7 ${t('nav.logo', '\u9f99\u867e\u673a')}`; }, [t]);
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{t('about.title')}</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">{t('about.tagline')}</p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-red-600">2024</p>
              <p className="text-sm text-slate-500 mt-1">{t('about.stats.founded', '\u6210\u7acb\u5e74\u4efd')}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-red-600">6</p>
              <p className="text-sm text-slate-500 mt-1">{t('about.stats.founders', '\u8054\u5408\u521b\u59cb\u4eba')}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-red-600">8</p>
              <p className="text-sm text-slate-500 mt-1">{t('about.stats.offices', '\u5168\u7403\u529e\u4e8b\u5904')}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-red-600">12+</p>
              <p className="text-sm text-slate-500 mt-1">{t('about.stats.skills', '\u9884\u88c5 AI \u6280\u80fd')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Intro — Card Layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('about.slogan1')}</h2>
            <p className="text-lg text-slate-600">{t('about.p1')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <Zap className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('about.card1_title', '\u5f00\u673a\u5373\u7528\uff0c\u96f6\u95e8\u69db')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('about.p2')}</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <Shield className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('about.card2_title', '\u6570\u636e\u5b89\u5168\uff0c\u7269\u7406\u9694\u79bb')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('about.p3')}</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <MessageSquare className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('about.card3_title', '\u5fae\u4fe1\u63a5\u5165\uff0c\u968f\u65f6\u8c03\u7528')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('about.p4')}</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <Clock className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('about.card4_title', '24/7 \u4e0d\u95f4\u65ad\u8fd0\u884c')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('about.p5')}</p>
            </div>
          </div>

          {/* Slogans */}
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-xl font-bold text-slate-900 border-l-4 border-red-600 pl-4 text-left">{t('about.slogan2')}</p>
            <p className="text-slate-600 leading-relaxed text-left">{t('about.p6')}</p>
            <p className="text-slate-600 leading-relaxed text-left">{t('about.p7')}</p>
            <p className="text-slate-600 leading-relaxed text-left">{t('about.p8')}</p>
            <p className="text-slate-600 leading-relaxed text-left">{t('about.p9')}</p>
            <div className="pt-6">
              <p className="text-2xl font-bold text-slate-900">{t('about.brand')}</p>
              <p className="text-xl font-bold text-red-600 mt-2">{t('about.slogan3')}</p>
              <p className="text-sm text-slate-400 mt-2">www.longxiaji.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('contact.founders.title', '\u6700\u63a5\u5730\u6c14\u7684\u8de8\u754c\u521b\u59cb\u56e2\u961f')}</h2>
            <p className="text-lg text-slate-600">
              {t('contact.founders.sub', '\u516d\u4e2a\u4ece\u9f99\u867e\u4ea7\u4e1a\u8d70\u51fa\u6765\u7684\u4eba\uff0c\u56e0\u4e3a\u540c\u4e00\u4e2a\u76ee\u6807\u8d70\u5230\u4e86\u4e00\u8d77\uff1a\u8ba9\u6bcf\u4e2a\u4eba\u90fd\u80fd\u96f6\u95e8\u69db\u7528\u4e0a AI\u3002')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FounderCard
              role={t('team.role.4550575672377453511', '大厨')}
              title={t('team.title.1976178603107875118', 'CEO · 产品与战略')}
              quote={t('team.quote.8657062610553757863', '火候到了，所有的食材都会说话。')}
              desc={t('team.desc.8252663906765583088', '曾在传统水产行业深耕十几年，经营过连锁龙虾馆。对商业模式和用户需求有着极其敏锐的直觉。在转型科技行业后，他将打磨菜品的苛刻标准延续至硬件产品的研发中。凭借对草根痛点的深刻理解与出色的产品定义能力，他主导了龙虾机的整体战略路线，致力于让前沿 AI 真正走入千家万户。')}
              icon="👨‍🍳"
              image="/team/ceo.png"
            />
            <FounderCard
              role={t('team.role.2378909925348224061', '养虾大户')}
              title={t('team.title.1648467525086682513', '天使投资人 · 联合发起人')}
              quote={t('team.quote.1119697206308917872', '池塘里养出来的耐心，放到哪里都能用。')}
              desc={t('team.desc.7636435216432888677', '从小在水管和虾塘边长大，曾管理超过两百亩的大型现代化水产养殖基地。凭借敏锐的投资眼光，他在产业转型期捕捉到了人工智能硬件普及的历史性机遇。作为团队早期的核心资金支持者和联合发起人，他不仅带来了充足的弹药，并将脚踏实地的产业精神注入了团队的 DNA 之中。')}
              icon="🦞"
              image="/team/investor.png"
            />
            <FounderCard
              role={t('team.role.1530984284887779511', '华强北厂长')}
              title={t('team.title.3039685758511568376', '硬件负责人 · 供应链')}
              quote={t('team.quote.6158412454155482297', '在华强北，不可能只是还没找到对的供应商。')}
              desc={t('team.desc.7562977260203830536', '在深圳华强北有着超过十五年的硬件供应链管理经验，从最初的电子柜台起步，一步步成为了执掌大型工厂的资深老将。熟悉每一条电子街区和无数的上游供应商资源。在龙虾机项目中，他通过极致的成本控制模型、严苛的开模品控和强大的议价能力，是真正实现硬件￥298低价和稳定量产的绝对功臣。')}
              icon="🏭"
            />
            <FounderCard
              role={t('team.role.4632996498518691208', '吃货')}
              title={t('team.title.7591439887173719618', '首席体验官 · UX')}
              quote={t('team.quote.2078131862578899259', '好不好吃，舌头不会骗人。好不好用，手指不会骗人。')}
              desc={t('team.desc.6103013520154266131', '在加入团队前是一名极具粉丝影响力的美食博主体验师。由于不具备任何编程基础，他成为了系统最重要的产品试金石。秉承着“把研究美食体验的极致精神平移到用户交互上”的理念，他从非技术人员的“小白”视角出发，重塑了龙虾机交互逻辑，将安装配置压缩到了傻瓜式的即插即用级别。')}
              icon="🍽️"
              image="/team/ux.jpg"
            />
            <FounderCard
              role={t('team.role.5869161594454019340', '程序员')}
              title={t('team.title.1632399377708228028', 'CTO · 技术架构')}
              quote={t('team.quote.9214925180429021226', '从虾塘到代码库，都需要耐心和细心。')}
              desc={t('team.desc.1057247029375163174', '背景独特的跨界技术专家。本硕主修水产专业，后因为极客热情转型计算机科学，并在国内顶尖科技企业积累了多年系统架构开发经历。除了熟悉分布式与高性能服务器开发，他还在私有化大模型底层加速技术上有深度研究。不仅构建了极其稳定和安全的底层代码库，也将传统产业的心流带入了技术管理中。')}
              icon="💻"
              image="/team/CTO.jpg"
            />
            <FounderCard
              role={t('team.role.4310680668521722572', '快递员')}
              title={t('team.title.1935043898737891844', 'COO · 运营与交付')}
              quote={t('team.quote.5431610284356572038', '不管送什么，到手的时候必须是完美的。')}
              desc={t('team.desc.1190726497123018457', '拥有资深的物流供应链背景，曾是国内某生鲜冷链运输公司的大区负责人。在处理极高难度的“送活鲜无耗损”业务中，锻炼出了卓越的项目执行力和抗压品质。现如今全面总体统筹龙虾机的市场运营和用户交付体系，搭建了成熟的仓储和客服支持渠道，只为确保每一台硬件在拆箱时都保持绝对完美状态。')}
              icon="🚚"
              image="/team/COO.jpg"
            />
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('contact.title', '\u8054\u7cfb\u6211\u4eec \u00b7 \u5168\u7403\u5206\u5e03')}</h2>
            <p className="text-lg text-slate-600">
              {t('contact.sub', '\u4e1a\u52a1\u8986\u76d6\u5168\u7403\uff0c\u968f\u65f6\u5c31\u8fd1\u4e3a\u60a8\u63d0\u4f9b\u6700\u4e13\u4e1a\u7684 AI \u786c\u4ef6\u652f\u6301\u4e0e\u54a8\u8be2\u670d\u52a1')}
            </p>
          </div>

          {/* World Map */}
          <div className="relative w-full max-w-4xl mx-auto mb-12 hidden md:block">
            <svg viewBox="0 0 1000 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <rect width="1000" height="500" fill="transparent" />
              {/* Simplified continent outlines */}
              <g fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.5">
                {/* North America */}
                <path d="M80,60 L120,55 L150,50 L180,55 L220,50 L260,65 L270,80 L265,100 L275,110 L280,130 L270,150 L255,160 L250,180 L240,195 L220,210 L200,220 L185,230 L175,245 L170,260 L190,260 L200,255 L210,260 L195,275 L180,270 L160,260 L155,240 L140,225 L130,210 L115,200 L100,195 L90,185 L80,170 L70,155 L65,140 L60,125 L55,110 L60,95 L65,80 Z" />
                {/* South America */}
                <path d="M200,275 L220,270 L240,275 L260,290 L270,310 L275,330 L280,350 L275,370 L265,385 L255,395 L240,405 L230,415 L225,430 L215,440 L210,435 L215,420 L220,405 L215,390 L205,375 L195,360 L190,340 L185,320 L190,300 L195,285 Z" />
                {/* Europe */}
                <path d="M430,55 L445,50 L465,55 L480,50 L500,55 L510,65 L520,75 L515,85 L505,95 L500,110 L510,115 L505,125 L495,130 L480,125 L470,130 L460,125 L450,115 L440,110 L435,100 L430,90 L425,75 Z" />
                {/* Africa */}
                <path d="M440,155 L460,150 L480,145 L500,150 L520,155 L535,165 L545,180 L555,200 L560,220 L558,240 L555,260 L548,280 L540,300 L530,315 L520,330 L510,345 L498,360 L485,370 L475,365 L465,355 L455,340 L445,320 L440,300 L438,280 L435,260 L430,240 L425,220 L420,200 L425,180 L430,165 Z" />
                {/* Asia */}
                <path d="M520,50 L560,45 L600,40 L640,45 L680,50 L720,55 L750,65 L770,75 L780,90 L785,105 L790,120 L785,135 L775,145 L760,150 L745,155 L730,165 L720,175 L710,170 L700,165 L690,170 L680,180 L670,190 L660,200 L645,205 L630,200 L620,195 L610,200 L600,210 L590,220 L575,225 L560,220 L550,210 L545,195 L540,180 L535,165 L530,150 L525,135 L520,120 L515,105 L520,90 L525,75 L520,60 Z" />
                {/* Australia */}
                <path d="M720,310 L740,305 L760,300 L780,305 L800,310 L810,320 L815,335 L810,350 L800,360 L785,365 L770,368 L755,365 L740,358 L730,350 L720,340 L715,325 Z" />
                {/* Middle East connective */}
                <path d="M520,155 L535,150 L545,155 L550,165 L555,175 L560,165 L570,160 L575,170 L570,180 L560,175 L550,180 L540,175 L530,165 Z" />
              </g>
              {/* Office location markers */}
              {[
                { cx: 735, cy: 195, label: t('office.name.2523401526919458337', '\u6df1\u5733\u603b\u90e8') },
                { cx: 718, cy: 168, label: t('office.name.7698154074469406943', '\u897f\u5b89') },
                { cx: 555, cy: 175, label: t('office.name.2509749225518567691', '\u8fea\u62dc') },
                { cx: 620, cy: 210, label: t('office.name.5140565462495736648', '\u5370\u5ea6') },
                { cx: 695, cy: 245, label: t('office.name.557397973237979798', '\u65b0\u52a0\u5761') },
                { cx: 175, cy: 185, label: t('office.name.7694836850338761832', '\u6d1b\u6749\u77f6') },
                { cx: 230, cy: 135, label: t('office.name.8385568277984006709', '\u591a\u4f26\u591a') },
                { cx: 490, cy: 355, label: t('office.name.2591317981907865232', '\u7ea6\u7ff0\u5185\u65af\u5821') },
              ].map((loc, i) => (
                <g key={i}>
                  <circle cx={loc.cx} cy={loc.cy} r="8" fill="#dc2626" opacity="0.15">
                    <animate attributeName="r" values="8;14;8" dur="2.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.15;0.03;0.15" dur="2.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                  </circle>
                  <circle cx={loc.cx} cy={loc.cy} r="4" fill="#dc2626" />
                  <text x={loc.cx} y={loc.cy - 12} textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">
                    {loc.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <OfficeCard name={t('office.name.2523401526919458337', '深圳总部')} address={t('office.addr.7760167259522151188', '深圳市南山区梦海大道5033号卓越前海壹号B座3102')} />
            <OfficeCard name={t('office.name.7698154074469406943', '西安研发中心')} address={t('office.addr.2363062531417071049', '西安市雁塔区西电科技园C1902-04')} />
            <OfficeCard name={t('office.name.2509749225518567691', '中东阿联酋事业部')} address={t('office.addr.4170696109539749863', '阿联酋迪拜国际城INDIGO大厦1010')} />
            <OfficeCard name={t('office.name.5140565462495736648', '印度市场事业部')} address={t('office.addr.8583634342593658142', '新德里DLF Cyber City,Phase III, Gurugram, Haryana 122002')} />
            <OfficeCard name={t('office.name.557397973237979798', '东南亚新加坡事业部')} address={t('office.addr.1718480648803023843', '中央商务区（CBD）Raffles Place, Singapore 042629')} />
            <OfficeCard name={t('office.name.7694836850338761832', '美国洛杉矶事业部')} address={t('office.addr.2901702035466146145', '威尔希尔大中心：900 Wilshire Blvd, Los Angeles, CA 90010')} />
            <OfficeCard name={t('office.name.8385568277984006709', '加拿大事业部')} address={t('office.addr.7044439645341185296', '多伦多 - TD Canada Trust Tower：66 Wellington St W, Toronto, ON M5K 1B9')} />
            <OfficeCard name={t('office.name.2591317981907865232', '非洲事业部')} address={t('office.addr.4114913451373149114', '南非约翰内斯堡 桑顿金融区：1 Sandton Dr, Sandton, Johannesburg 3127')} />
          </div>
        </div>
      </section>

      <div className="text-center py-12 pb-24 bg-slate-50">
        <button onClick={() => navigate('/preorder')} className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg">
          {t('product.preorder', '立即预定')}
        </button>
      </div>
    </>
  );
}

function OfficeCard({ name, address }: { name: string, address: string }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-all group flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-sm border border-slate-200 group-hover:scale-110 transition-transform shrink-0">
          <MapPin className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-slate-900 leading-tight">{name}</h3>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed flex-1">{address}</p>
    </div>
  );
}

function FounderCard({ role, title, quote, desc, icon, image }: { role: string, title: string, quote: string, desc: string, icon: string, image?: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col items-start text-left">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-3xl border border-red-100 shadow-inner shrink-0 overflow-hidden">
          {image ? (
            <img src={image} alt={role} className="w-full h-full object-cover" />
          ) : (
            icon
          )}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">{role}</h3>
          <p className="text-sm font-semibold text-slate-500 mt-1">{title}</p>
        </div>
      </div>
      <blockquote className="text-sm italic text-slate-600 border-l-4 border-red-200 pl-3 py-1 mb-4">
        "{quote}"
      </blockquote>
      <div className="space-y-3 flex-1">
        <p className="text-sm text-slate-700 leading-relaxed text-justify">{desc}</p>
      </div>
    </div>
  );
}
