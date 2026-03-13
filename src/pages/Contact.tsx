import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => { document.title = `${t('nav.contact', '联系我们')} · ${t('nav.logo', '龙虾机')}`; }, [t]);
  return (
    <>
      <section id="founders" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('contact.founders.title', '最接地气的跨界创始团队')}</h2>
            <p className="text-lg text-slate-600">
              {t('contact.founders.sub', '六个从龙虾产业走出来的人，因为同一个目标走到了一起：让每个人都能零门槛用上 AI。')}
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
              image="/team/ux.png"
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('contact.title', '联系我们 · 全球分布')}</h2>
            <p className="text-lg text-slate-600">
              {t('contact.sub', '业务覆盖全球，随时就近为您提供最专业的 AI 硬件支持与咨询服务')}
            </p>
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
