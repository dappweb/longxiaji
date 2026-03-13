import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Zap, Cpu, Wifi, Server } from 'lucide-react';
import { StepCard } from '../components/StepCard';

export default function Product() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => { document.title = `${t('nav.product', '产品介绍')} · ${t('nav.logo', '龙虾机')}`; }, [t]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto py-4 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <button onClick={() => scrollTo('how-it-works')} className="text-sm font-medium text-slate-600 hover:text-red-600 whitespace-nowrap">{t("product.nav1", "使用流程")}</button>
            <button onClick={() => scrollTo('specs')} className="text-sm font-medium text-slate-600 hover:text-red-600 whitespace-nowrap">{t("product.nav2", "硬件参数")}</button>
          </div>
        </div>
      </div>

      <section id="how-it-works" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("product.title1", "产品介绍，全程不超过 3 分钟")}</h2>
            <p className="text-lg text-slate-400">
              {t('product.sub1', '无需任何技术背景，三步体验 AI 的强大。')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800 z-0" />

            <StepCard
              number="1"
              title={t("product.step1.title", "连网 + 激活")}
              description={t("product.step1.desc", "插网线或连 WiFi，屏幕显示二维码，手机扫码自动激活。激活即送初始 API 额度，足够体验数天。")}
              icon={<Wifi className="w-8 h-8 text-red-500" />}
            />
            <StepCard
              number="2"
              title={t("product.step2.title", "绑定 IM 账号")}
              description={t("product.step2.desc", "支持微信、钉钉、飞书、QQ。点击图标扫码授权，龙虾助手自动出现在你的会话列表中。")}
              icon={<Smartphone className="w-8 h-8 text-red-500" />}
            />
            <StepCard
              number="3"
              title={t("product.step3.title", "体验引导")}
              description={t("product.step3.desc", "在微信中发送第一条消息给助手，自动推送 3 个开箱任务示例，点击即可执行，秒速上手。")}
              icon={<Zap className="w-8 h-8 text-red-500" />}
            />
          </div>
        </div>
      </section>
      <section id="specs" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t("product.arch.title", "纯云端代理架构")}<br/>{t("product.arch.subtitle", "本地零推理")}</h2>
              <p className="text-lg text-slate-600 mb-8">
                {t('product.arch.desc', '不在本地运行大模型推理。所有 LLM 调用均通过云端 API 代理完成。本地硬件仅负责运行 OpenClaw 操作系统、任务调度和保护私有数据。')}
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Cpu className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t("product.spec1.title", "16 GB 内存")}</h4>
                    <p className="text-slate-600 text-sm mt-1">{t("product.spec1.desc", "足够支撑多任务并发与多个 IM 客户端同时在线，运行流畅不卡顿。")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Server className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t("product.spec2.title", "256 GB / 512 GB 存储")}</h4>
                    <p className="text-slate-600 text-sm mt-1">{t("product.spec2.desc", "系统约占 30-40 GB，剩余空间用于存储你的私密文件、聊天记录和 Skills 数据。支持云盘扩容。")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Wifi className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t("product.spec3.title", "有线 + WiFi 双网络")}</h4>
                    <p className="text-slate-600 text-sm mt-1">{t("product.spec3.desc", "云端代理架构下网络连接是核心依赖，提供稳定可靠的网络接入方案。")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="aspect-square bg-slate-100 rounded-3xl border border-slate-200 p-8 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Device Mockup Replacing abstract with real image */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105">
                  <img src="/box/5050e13500344491bce2018ece160efd.png" alt={t("product.img_alt", "龙虾机实拍")} className="w-full h-auto object-cover rounded-2xl shadow-2xl" />
                </div>

                {/* Size reference */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-slate-400 text-sm font-medium z-20">
                  <span>{t("product.size", "≤ Mac mini 尺寸")}</span>
                    <span>{t("product.power", "低功耗")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center py-12 pb-24 bg-white">
        <button onClick={() => navigate('/preorder')} className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg">
          {t('product.preorder', '立即预定')}
        </button>
      </div>
    </>
  );
}


