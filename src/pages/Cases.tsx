import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function Cases() {
  const navigate = useNavigate();

  const scenarios = [
    {
      id: 1,
      tag: '电商场景',
      tagColor: 'blue',
      title: '从选品到客服，一个人顶一个团队',
      rating: 5,
      description: '以前每天要在各大平台看几百个品，现在龙虾机24小时帮我监控趋势。更神的是，它直接连着我店里的客服微信，半夜的客户咨询它都能完美应答，而且数据都在本地，不用担心店铺信息泄露给三方平台。'
    },
    {
      id: 2,
      tag: '家庭场景',
      tagColor: 'emerald',
      title: '给父母最好的科技礼物，插电就能用',
      rating: 5,
      description: '我爸妈一直学不会用智能手机那些复杂的App。给他们买了一台龙虾机，放在客厅插着电。他们只要对着微信发语音，就能让它查菜谱、播报当地降温提醒、甚至总结很长的养生文章。0门槛，老年人也会用。'
    },
    {
      id: 3,
      tag: '自媒体运营',
      tagColor: 'purple',
      title: '安全私密的素材库，爆款文案流水线',
      rating: 4,
      description: '作为博主最怕就是灵感枯竭和素材泄露。龙虾机不仅自动帮我总结对标账号的爆款结构，还能直接根据我本地的素材库进行创作。因为不用把未发布的内容传到公有云，我不再担心抄袭，产出效率高了三倍。'
    },
    {
      id: 4,
      tag: '外贸行业',
      tagColor: 'orange',
      title: '不再受限网络和时差，外贸邮件自动回',
      rating: 5,
      description: '做外贸最大的痛点是网络环境不稳定以及严重的时差。现在把企业邮箱授权给家里的龙虾机，利用里面预装的顶级模型，不用费劲翻墙。国外客户凌晨发来的意向，它立刻用专业的商务英语回复，帮我锁定了很多订单。'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-slate-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">他们和你一样，也是从“不懂”开始的</h2>
            <p className="text-lg text-slate-400">各行各业的普通人，正在使用龙虾机改变工作与生活。四个典型应用场景真实反馈。</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 gap-6 md:gap-8 pb-8 md:pb-12 -mx-4 px-4 md:mx-0 md:px-0" style={{ scrollbarWidth: 'none' }}>
            {scenarios.map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </div>
          
          <div className="text-center pb-12 mt-4 md:mt-0">
            <button onClick={() => navigate('/preorder')} className="bg-red-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-red-700 transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)]">
              开启你的AI专属助手
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CaseCard({ item }: { item: any }) {
  const [expanded, setExpanded] = React.useState(false);
  
  return (
    <div className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center bg-slate-800/80 backdrop-blur border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800 transition-colors shadow-2xl flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <span className={`px-4 py-1.5 rounded-full text-sm font-bold bg-${item.tagColor}-500/20 text-${item.tagColor}-400 border border-${item.tagColor}-500/30`}>
          {item.tag}
        </span>
        <div className="flex gap-1 text-yellow-400">
          {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          {[...Array(5 - item.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-slate-600" />)}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">"{item.title}"</h3>
      <div className="flex-1">
        <p className={`text-slate-400 leading-relaxed text-lg transition-all ${!expanded ? 'line-clamp-3' : ''}`}>
          {item.description}
        </p>
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="mt-2 text-slate-300 hover:text-white text-sm font-medium transition-colors md:hidden"
        >
          {expanded ? '收起' : '阅读全文'}
        </button>
      </div>
    </div>
  );
}
