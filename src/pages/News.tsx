import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  date: string;
  type: string;
  title: string;
  summary: string;
}

export default function News() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => { document.title = `${t('nav.news', '新闻资讯')} · ${t('nav.logo', '龙虾机')}`; }, [t]);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: '2025-05-18',
      type: '产品公告',
      title: '龙虾机惊艳亮相迪拜AI科技展：全私有化部署成为全场焦点',
      summary: '在今日开幕的迪拜国际AI科技创新大展上，龙虾机凭借主打的"开箱即用、完全私有部署、数据不离本地"理念，成为展会最受瞩目的新品之一。多家国际企业现场签下意向订单。'
    },
    {
      id: 2,
      date: '2025-04-02',
      type: '行业快讯',
      title: '隐私安全成为中小企业采用AI的最大阻力，本地大模型势在必行',
      summary: '最新行业报告指出，超过70%的中小企业因担心核心数据如财务、客户名录泄露，不敢贸然接入公有云AI服务。像龙虾机这样自带算力和模型的私有化硬件设备需求正急速上升。'
    },
    {
       id: 3,
       date: '2025-03-15',
       type: '官方指引',
       title: '龙虾机技能市场突破1000款：涵盖跨境电商、法律咨询全场景',
       summary: '近日，龙虾机系统内嵌的免费技能市场迎来了第1000款专属Agent预设。现在，即便是完全不懂AI指令的普通用户，也能通过一键点击，让龙虾机变身专业的垂直领域助手。'
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": newsItems.map((news, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": t(`news.items.${news.id}.title`, news.title),
        "datePublished": news.date,
        "description": t(`news.items.${news.id}.summary`, news.summary)
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t('news.title', '最新资讯')}</h1>
          <p className="text-lg text-slate-600">{t('news.sub', '了解龙虾机的最新动态、产品更新与行业资讯')}</p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {newsItems.map((news) => (
            <article key={news.id} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {t(`news.items.${news.id}.type`, news.type)}
                  </span>
                  <div className="flex items-center text-slate-400 text-sm">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {news.date}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-blue-600 cursor-pointer transition-colors">
                  {t(`news.items.${news.id}.title`, news.title)}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t(`news.items.${news.id}.summary`, news.summary)}
                </p>
                <button
                  onClick={() => alert(t('news.coming_soon', '详情内容正在建设中，敬请期待！'))}
                  className="text-blue-600 font-medium inline-flex items-center group cursor-pointer"
                >
                  {t('news.read', '阅读全文')} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
            <button onClick={() => navigate('/preorder')} className="bg-red-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-red-700 transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)]">
              {t('product.preorder', '立即预定')}
            </button>
        </div>
      </div>
    </div>
  );
}
