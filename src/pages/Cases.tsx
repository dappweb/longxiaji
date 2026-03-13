import { useTranslation } from 'react-i18next';
import { useState, Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

interface CaseItem {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  rating: number;
  description: string;
}

const tagColorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
  orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' },
  purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
  emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  rose: { bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/30' },
  cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30' },
};

export default function Cases() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => { document.title = `${t('nav.cases', '用户案例')} · 龙虾机`; }, [t]);

  const scenarios: CaseItem[] = [
    {
      id: 1,
      tag: '跨境电商',
      tagColor: 'blue',
      title: '从选品到客服，解决欧美时差痛点',
      rating: 5,
      description: '以前每天要在各大平台看几百个品，现在人在国内做北美独立站，龙虾机24小时帮我监控趋势。更神的是，它直接连着我的客服邮箱和社媒账号，北美客户半夜的咨询它都能完美应答，一口地道的商务英语，效率大幅提升。'
    },
    {
      id: 2,
      tag: '海外餐饮',
      tagColor: 'orange',
      title: '菜单多语言翻译与社交媒体运营',
      rating: 5,
      description: '在洛杉矶开中餐厅，菜单经常要根据季节换。把想法发给龙虾机，秒出精准的中英西三语菜单，还会根据当地热门话题帮我写好 Instagram 探店文案。放在店里插个电就能跑，数据也不用走云端。'
    },
    {
      id: 3,
      tag: '硬件反馈',
      tagColor: 'purple',
      title: '缺少特定接口，扩展性有待提高',
      rating: 1,
      description: '这玩意儿虽然宣称"插电即用"，但我用的是很老式的显示器，还需要自己买个转接头。虽然它本身作为独立服务器运行没问题，但开箱体验不够好。而且有时候网络波动会导致回复有些慢。客服态度虽然可以，但这硬件配置我得给一星。'
    },
    {
      id: 4,
      tag: '自媒体运营',
      tagColor: 'emerald',
      title: 'YouTuber 的灵感素材库',
      rating: 4,
      description: '作为油管博主最怕灵感枯竭。龙虾机不仅自动帮我总结对标账号的爆款结构，还能直接分析我存进本地的几个G的素材库。不需要把几十个大视频传到公有云上分析，效率高了三倍，数据也更安全。'
    },
    {
      id: 5,
      tag: '留学生群体',
      tagColor: 'rose',
      title: '论文灵感与日常辅导',
      rating: 4,
      description: '在英国读研，用它来整理庞大的参考文献和做阅读笔记简直是神器。不用到处找能用的节点，微信扫码绑好后，在图书馆图书馆看书时随时发语音查资料，太省心了。'
    },
    {
      id: 6,
      tag: '远程开发',
      tagColor: 'cyan',
      title: '独立安全的代码辅助环境',
      rating: 5,
      description: '作为经常在不同国家旅居的数字游民，在 Airbnb 连公共 Wi-Fi 写关键代码让人不放心。带上这个小巧的龙虾机，它的独立计算环境和私有大模型帮我查 bug、写单元测试，甚至跑复杂的脚本，完全不占用我自己电脑的算力。'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-slate-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cases.title1", "他们和你一样，也是从\"不懂\"开始的")}</h2>
            <p className="text-lg text-slate-400">{t("cases.sub1", "各行各业的普通人，正在使用龙虾机改变工作与生活。四个典型应用场景真实反馈。")}</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 gap-6 md:gap-8 pb-8 md:pb-12 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
            {scenarios.map((item) => (
              <Fragment key={item.id}>
                <CaseCard item={item} />
              </Fragment>
            ))}
          </div>

          <div className="text-center pb-12 mt-4 md:mt-0">
            <button onClick={() => navigate('/preorder')} className="bg-red-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-red-700 transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)]">
              {t('cases.start', '开启你的AI专属助手')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CaseCard({ item }: { item: CaseItem }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const colorStyles = tagColorMap[item.tagColor] || tagColorMap.blue;

  return (
    <div className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center bg-slate-800/80 backdrop-blur border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800 transition-colors shadow-2xl flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${colorStyles.bg} ${colorStyles.text} ${colorStyles.border} border`}>
          {t(`cases.items.${item.id}.tag`, item.tag)}
        </span>
        <div className="flex gap-1 text-yellow-400">
          {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          {[...Array(5 - item.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-slate-600" />)}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">"{t(`cases.items.${item.id}.title`, item.title)}"</h3>
      <div className="flex-1">
        <p className={`text-slate-400 leading-relaxed text-lg transition-all ${!expanded ? 'line-clamp-3' : ''}`}>
          {t(`cases.items.${item.id}.desc`, item.description)}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-slate-300 hover:text-white text-sm font-medium transition-colors md:hidden"
        >
          {expanded ? t("cases.collapse", "收起") : t("cases.readmore", "阅读全文")}
        </button>
      </div>
    </div>
  );
}
