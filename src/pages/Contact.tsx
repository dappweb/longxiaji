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
              desc="家里开了十几年龙虾馆，14 岁就能独立出一桶麻辣小龙虾。从炒锅到键盘，他把做产品的逻辑和做菜统一——不好吃的东西，不出锅。" 
              icon="👨‍🍳" 
              image="/team/ceo.png"
              marketingPoint="龙虾馆老板做 CEO——“不好吃不出锅”草根反差极强，让产品极度接地气。"
            />
            <FounderCard 
              role="养虾大户" 
              title="天使投资人 · 联合发起人"
              quote="池塘里养出来的耐心，放到哪里都能用。"
              desc="祖上三代养龙虾，曾管理超 200 亩虾塘。一场洪水后，他把耐心投向了“像虾塘一样能持续产出”的 AI 硬件，并命名了“龙虾机”。" 
              icon="🦞" 
              image="/team/investor.png"
              marketingPoint="养虾的人投 AI——用真金白银讲述着底层坚韧与前瞻眼光的故事。"
            />
            <FounderCard 
              role="华强北厂长" 
              title="硬件负责人 · 供应链"
              quote="在华强北，不可能只是还没找到对的供应商。"
              desc="十几岁就在华强北跑柜台，闭眼能走遍每条走廊。十几年硬件供应链经验，是把龙虾机做到 ￥298 定价的绝对核心功臣。" 
              icon="🏭" 
              image={undefined}
              marketingPoint="华强北老炮做硬件——直接回答了 ￥298 怎么可能，因为有最懂行的人控成本与品控。"
            />
            <FounderCard 
              role="吃货" 
              title="首席体验官 · UX"
              quote="好不好吃，舌头不会骗人。好不好用，手指不会骗人。"
              desc="把研究吃龙虾的极致精神用到了用户体验上。作为团队里技术水平最低的人，他是产品的试金石：“连我都能搞定的机器，14 亿人都能用。”" 
              icon="🍽️" 
              image="/team/ux.png"
              marketingPoint="最不懂技术的人做 UX——打消用户焦虑，每一个功能都是他先亲身试毒的成果。"
            />
            <FounderCard 
              role="程序员" 
              title="CTO · 技术架构"
              quote="从虾塘到代码库，都需要耐心和细心。"
              desc="水产硕士转行写代码。从研究怎么让龙虾长得大，到研究怎么让系统跑得稳，他证明了跨界也能做到极致。" 
              icon="💻" 
              image="/team/programmer.png"
              marketingPoint="水产硕士做 CTO——“从虾塘到代码库”自带传播力，用养虾的耐心构建稳固底层技术。"
            />
            <FounderCard 
              role="快递员" 
              title="COO · 运营与交付"
              quote="不管送什么，到手的时候必须是完美的。"
              desc="从水产冷链物流一线摸爬滚打，练就“送活虾二十小时无损”的极速与极稳交付能力，现在负责保证每台机器完美交付。" 
              icon="🚚" 
              image="/team/courier.jpg"
              marketingPoint="初中毕业快递员做 COO——“送虾没死过一只”就是极强的信任背书，彰显极强的落地与交付执行力。"
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

function FounderCard({ role, title, quote, desc, icon, image, marketingPoint }: { role: string, title: string, quote: string, desc: string, icon: string, image?: string, marketingPoint: string }) {
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
      <div className="mt-4 pt-4 border-t border-slate-100 w-full">
        <p className="text-xs text-slate-500 font-medium bg-slate-50 p-2 rounded">
          <span className="text-red-600 font-bold mr-1">营销卖点:</span> 
          {marketingPoint}
        </p>
      </div>
    </div>
  );
}
