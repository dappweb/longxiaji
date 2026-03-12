import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Image as ImageIcon, Briefcase, Zap, CheckCircle2, ChevronRight, Clock, Search } from 'lucide-react';

export default function Skills() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('全部');
  
  const tabs = ['全部', '效率办公', '生活娱乐', '创作设计'];

  const allSkills = [
    {
      category: '效率办公',
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
      title: "智能对话",
      features: ['多模型一键切换 (GPT, Claude, 通义千问等)', '精准翻译与长文摘要', '高质量文案写作'],
      value: "“比 ChatGPT 还方便，反应更迅速”"
    },
    {
      category: '效率办公',
      icon: <Briefcase className="w-6 h-6 text-emerald-500" />,
      title: "办公助手",
      features: ['Excel 复杂公式生成', 'PPT 大纲一键生成', '中英文邮件自动起草'],
      value: "“在微信里说一句就能用”"
    },
    {
      category: '生活娱乐',
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "生活工具",
      features: ['智能日程管理与提醒', '个性化天气预报', '每日新闻摘要推送'],
      value: "“每天早上收到专属 AI 早报”"
    },
    {
      category: '创作设计',
      icon: <ImageIcon className="w-6 h-6 text-purple-500" />,
      title: "图片/视频处理",
      features: ['精准图片识别与分析', '一句话文字转图', '基础视频脚本处理'],
      value: "“拍照片就能翻译，一句话出图”"
    }
  ];

  const filteredSkills = activeTab === '全部' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeTab);

  return (
    <>
      <section id="skills" className="py-24 bg-slate-50 min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">预装 Skills，开箱即用</h2>
            <p className="text-lg text-slate-600">
              硬件是入口，Skills 是灵魂。满足从日常闲聊到深度办公的全方位需求。
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex gap-2 p-1 bg-slate-200/50 rounded-full overflow-x-auto max-w-full">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
            
          {filteredSkills.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, idx) => (
                  <SkillCard
                    key={idx}
                    icon={skill.icon}
                    title={skill.title}
                    features={skill.features}
                    value={skill.value}
                  />
                ))}
              </div>
            ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <Zap className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">暂无该分类技能</h3>
              <p className="text-slate-500 mb-6">未能找到合适的技能？添加客服为您定制</p>
              <button 
                onClick={() => navigate('/contact')}
                className="text-red-600 font-medium hover:text-red-700 inline-flex items-center gap-2"
              >
                联系专属客服 <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">未来更将开放 Skills 市场，支持量化交易、电商运营等高级技能服务，免费解锁，持续升级。</p>
            <button disabled className="text-slate-400 font-medium flex items-center justify-center gap-1 mx-auto cursor-not-allowed">
              探索更多 Skills <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
      
      <div className="text-center py-12 pb-24 bg-slate-50">
        <button onClick={() => navigate('/preorder')} className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg">
          立即预定
        </button>
      </div>
    </>
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


