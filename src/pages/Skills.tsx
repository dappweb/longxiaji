import { useTranslation } from 'react-i18next';
import { useState, Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Image as ImageIcon, Briefcase, Zap, ChevronRight, Clock } from 'lucide-react';
import { SkillCard } from '../components/SkillCard';

export default function Skills() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => { document.title = `${t('nav.skills', '技能市场')} · ${t('nav.logo', '龙虾机')}`; }, [t]);
  const [activeTab, setActiveTab] = useState(t('skills.cat.all', '全部'));

  const tabs = [t('skills.cat.all', '全部'), t('skills.cat.office', '效率办公'), t('skills.cat.life', '生活娱乐'), t('skills.cat.design', '创作设计')];

  const allSkills = [
    {
      category: t('skills.cat.office', '效率办公'),
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
      title: t('skills.items.1.title', '智能对话'),
      features: [t('skills.items.1.f1', '多模型一键切换 (GPT, Claude, 通义千问等)'), t('skills.items.1.f2', '精准翻译与长文摘要'), t('skills.items.1.f3', '高质量文案写作')],
      value: t('skills.items.1.val', '"比 ChatGPT 还方便，反应更迅速"')
    },
    {
      category: t('skills.cat.office', '效率办公'),
      icon: <Briefcase className="w-6 h-6 text-emerald-500" />,
      title: t('skills.items.2.title', '办公助手'),
      features: [t('skills.items.2.f1', 'Excel 复杂公式生成'), t('skills.items.2.f2', 'PPT 大纲一键生成'), t('skills.items.2.f3', '中英文邮件自动起草')],
      value: t('skills.items.2.val', '"在微信里说一句就能用"')
    },
    {
      category: t('skills.cat.life', '生活娱乐'),
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: t('skills.items.3.title', '生活工具'),
      features: [t('skills.items.3.f1', '智能日程管理与提醒'), t('skills.items.3.f2', '个性化天气预报'), t('skills.items.3.f3', '每日新闻摘要推送')],
      value: t('skills.items.3.val', '"每天早上收到专属 AI 早报"')
    },
    {
      category: t('skills.cat.design', '创作设计'),
      icon: <ImageIcon className="w-6 h-6 text-purple-500" />,
      title: t('skills.items.4.title', '图片/视频处理'),
      features: [t('skills.items.4.f1', '精准图片识别与分析'), t('skills.items.4.f2', '一句话文字转图'), t('skills.items.4.f3', '基础视频脚本处理')],
      value: t('skills.items.4.val', '"拍照片就能翻译，一句话出图"')
    }
  ];

  const filteredSkills = activeTab === t('skills.cat.all', '全部')
    ? allSkills
    : allSkills.filter(skill => skill.category === activeTab);

  return (
    <>
      <section id="skills" className="py-24 bg-slate-50 min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t("skills.title", "预装 Skills，开箱即用")}</h2>
            <p className="text-lg text-slate-600">
              {t('skills.subtitle', '硬件是载体，Skills 是灵魂。从闲聊到深度办公，一站式满足。')}
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
                  <Fragment key={idx}>
                    <SkillCard
                      icon={skill.icon}
                      title={skill.title}
                      features={skill.features}
                      value={skill.value}
                    />
                  </Fragment>
                ))}
              </div>
            ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <Zap className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t("skills.empty", "暂无该分类技能")}</h3>
              <p className="text-slate-500 mb-6">{t("skills.empty_sub", "未能找到合适的技能？添加客服为您定制")}</p>
              <button
                onClick={() => navigate('/contact')}
                className="text-red-600 font-medium hover:text-red-700 inline-flex items-center gap-2"
              >
                {t('skills.contact', '联系客服')} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">{t("skills.future", "未来更将开放 Skills 市场，支持量化交易、电商运营等高级技能服务，免费解锁，持续升级。")}</p>
            <button disabled className="text-slate-400 font-medium flex items-center justify-center gap-1 mx-auto cursor-not-allowed">
              {t('skills.explore', '探索更多技能')} <ChevronRight className="w-4 h-4" />
            </button>
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
