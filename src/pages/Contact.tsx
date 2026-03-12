import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <section id="founders" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">最接地气的跨界创始团队</h2>
            <p className="text-lg text-slate-600">
              六个从龙虾产业链走出来的人，为了同一个目标走到一起：让所有人都能零门槛用上 AI。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FounderCard
              role="大厨"
              title="CEO · 产品与战略"
              quote="火候到了，所有的食材都会说话。"
              desc="曾在传统水产行业深耕十几年，经营过连锁龙虾馆。对商业模式和用户需求有着极其敏锐的直觉。在转型科技行业后，他将打磨菜品的苛刻标准延续至硬件产品的研发中。凭借对草根痛点的深刻理解与出色的产品定义能力，他主导了龙虾机的整体战略路线，致力于让前沿 AI 真正走入千家万户。"
              icon="👨‍🍳"
              image="/team/ceo.png"
            />
            <FounderCard
              role="养虾大户"
              title="天使投资人 · 联合发起人"
              quote="池塘里养出来的耐心，放到哪里都能用。"
              desc="从小在水管和虾塘边长大，曾管理超过两百亩的大型现代化水产养殖基地。凭借敏锐的投资眼光，他在产业转型期捕捉到了人工智能硬件普及的历史性机遇。作为团队早期的核心资金支持者和联合发起人，他不仅带来了充足的弹药，并将脚踏实地的产业精神注入了团队的 DNA 之中。"
              icon="🦞"
              image="/team/investor.png"
            />
            <FounderCard
              role="华强北厂长"
              title="硬件负责人 · 供应链"
              quote="在华强北，不可能只是还没找到对的供应商。"
              desc="在深圳华强北有着超过十五年的硬件供应链管理经验，从最初的电子柜台起步，一步步成为了执掌大型工厂的资深老将。熟悉每一条电子街区和无数的上游供应商资源。在龙虾机项目中，他通过极致的成本控制模型、严苛的开模品控和强大的议价能力，是真正实现硬件￥298低价和稳定量产的绝对功臣。"
              icon="🏭"
              image="/team/ux.png"
            />
            <FounderCard
              role="吃货"
              title="首席体验官 · UX"
              quote="好不好吃，舌头不会骗人。好不好用，手指不会骗人。"
              desc="在加入团队前是一名极具粉丝影响力的美食博主体验师。由于不具备任何编程基础，他成为了系统最重要的产品试金石。秉承着“把研究美食体验的极致精神平移到用户交互上”的理念，他从非技术人员的“小白”视角出发，重塑了龙虾机交互逻辑，将安装配置压缩到了傻瓜式的即插即用级别。"
              icon="🍽️"
              image="/team/ux.jpg"
            />
            <FounderCard
              role="程序员"
              title="CTO · 技术架构"
              quote="从虾塘到代码库，都需要耐心和细心。"
              desc="背景独特的跨界技术专家。本硕主修水产专业，后因为极客热情转型计算机科学，并在国内顶尖科技企业积累了多年系统架构开发经历。除了熟悉分布式与高性能服务器开发，他还在私有化大模型底层加速技术上有深度研究。不仅构建了极其稳定和安全的底层代码库，也将传统产业的心流带入了技术管理中。"
              icon="💻"
              image="/team/CTO.jpg"
            />
            <FounderCard
              role="快递员"
              title="COO · 运营与交付"
              quote="不管送什么，到手的时候必须是完美的。"
              desc="拥有资深的物流供应链背景，曾是国内某生鲜冷链运输公司的大区负责人。在处理极高难度的“送活鲜无耗损”业务中，锻炼出了卓越的项目执行力和抗压品质。现如今全面总体统筹龙虾机的市场运营和用户交付体系，搭建了成熟的仓储和客服支持渠道，只为确保每一台硬件在拆箱时都保持绝对完美状态。"
              icon="🚚"
              image="/team/COO.jpg"
            />
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
