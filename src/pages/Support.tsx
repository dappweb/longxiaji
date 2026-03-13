import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Support() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => { document.title = `${t('support.title', '帮助与售后支持')} · ${t('nav.logo', '龙虾机')}`; }, [t]);
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 头部区 */}
      <section className="bg-red-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('support.title', '帮助与售后支持')}</h1>
        <p className="text-xl max-w-2xl mx-auto text-red-100">
          {t('support.sub1', '我们不仅做靠谱的机器，更做让您放心的售后。')}<br />
          {t('support.sub2', '买得放心，用得舒心，有问题随时找我们。')}
        </p>
      </section>

      {/* 核心保障区 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GuaranteeCard
            icon="🚚"
            title={t('support.feat1.title', '包邮送达')}
            desc={t('support.feat1.desc', 'COO亲盯物流，顺丰/京东包邮，确保机器完好无损地送到您手上。')}
          />
          <GuaranteeCard
            icon="🔄"
            title={t('support.feat2.title', '7天无理由退货')}
            desc={t('support.feat2.desc', '收货7天内，只要包装完好、不影响二次销售，我们承担运费，全额退款。')}
          />
          <GuaranteeCard
            icon="🛠️"
            title={t('support.feat3.title', '一年内只换不修')}
            desc={t('support.feat3.desc', '保修期内非人为损坏？不折腾维修，直接寄新机。')}
          />
        </div>
      </section>

      {/* 常见问题 (FAQ) 区 */}
      <section className="max-w-4xl mx-auto px-4 mt-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">{t('support.faq.title', '常见问题 (FAQ)')}</h2>
        <div className="space-y-4">
          <FaqItem 
            question={t('faq.q.31048810085275149', '我一点都不懂技术，能学会用吗？')} 
            answer={t('faq.a.4859618645131341628', '绝对没问题！我们的产品由团队里最不懂技术的“吃货”打磨用户体验，就是为了让普通人也能零门槛上手。说明书是大白话，包装盒里甚至有保姆级的视频教程二维码，扫一扫立刻看懂。')}
          />
          <FaqItem 
            question={t('faq.q.9175638213719985730', '今天下单，几时能发货？')} 
            answer={t('faq.a.496324727614361583', '由于预定量较大，我们采取按订单顺序分批发货。第一批次预计在下个月中旬陆续发货。我们的COO（前水产冷链骨干）正在全程把控进度，确保机器尽快从华强北出库。')}
          />
          <FaqItem 
            question={t('faq.q.7361949965461290056', '如果机器突然开不了机怎么办？')} 
            answer={t('faq.a.1991604189351501565', '别慌！我们对硬件品控有绝对的信心（华强北老炮亲自把关）。如果是质量问题，凭借您的单号，一年内享有“只换不修”服务。您可以直接联系我们的客服退回旧机，我们收到后当天换新寄出。')}
          />
          <FaqItem 
            question={t('faq.q.7722257073788805609', '配件如果弄丢了，能单独买吗？')} 
            answer={t('faq.a.4323628495793051690', '完全可以。所有的配件（如电源线、夹具等）都将在我们的官方商店以成本价上架，几块钱搞定，绝不赚配件钱。')}
          />
        </div>
      </section>

      {/* 联系人工客服 */}
      <section className="max-w-4xl mx-auto px-4 mt-24 text-center pb-12">
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('support.help.title', '没找到答案？直接找人工')}</h2>
          <p className="text-slate-600 mb-8">
            {t('support.help.desc', '我们的客服团队全部由真人组成，不是机器人。任何问题，随时联系我们。')}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-2xl mb-4">📧</div>
                <h3 className="font-bold text-lg mb-1">{t('support.mail_cs', '邮件客服')}</h3>
                <p className="text-sm text-slate-500 font-medium select-all">support@longxiaji.com</p>
                <p className="text-xs text-slate-400 mt-1">{t('support.mail_time', '工作日 9:00 - 21:00')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center py-12">
        <button onClick={() => navigate('/preorder')} className="bg-red-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg">
          {t('product.preorder', '立即预定')}
        </button>
      </div>
    </div>
  );
}

function GuaranteeCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center transform hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-16 mx-auto bg-red-50 rounded-full flex items-center justify-center text-3xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border text-left border-slate-200 rounded-lg overflow-hidden">
      <button 
        className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-slate-800">{question}</span>
        <span className="text-2xl text-slate-400 font-light shrink-0">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
          {answer}
        </div>
      )}
    </div>
  );
}
