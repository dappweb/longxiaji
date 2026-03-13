import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';
import { useOutletContext } from 'react-router-dom';
import { CheckCircle2, Shield, Truck, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface OutletContext {
  setShowQR: (show: boolean) => void;
}

export default function Preorder() {
  const { t } = useTranslation();
  const { setShowQR } = useOutletContext<OutletContext>();
  useEffect(() => { document.title = `${t('preorder.title', '龙虾机 · 立即预定')}`; }, [t]);

  const [targetSold, setTargetSold] = useState(8347);
  const soldSpring = useSpring(0, { stiffness: 50, damping: 20 });
  const soldCount = useTransform(soldSpring, Math.round);
  const remainingCount = useTransform(soldSpring, (val) => Math.round(10000 - val));
  const progressWidth = useTransform(soldSpring, (val) => `${(val / 10000) * 100}%`);

  // Fetch initial stock from D1 backend
  useEffect(() => {
    fetch('/api/inventory')
      .then(res => res.json() as Promise<{ soldCount?: number }>)
      .then(data => {
        if (data && data.soldCount) {
          setTargetSold(data.soldCount);
        }
      })
      .catch(err => console.error("Failed to fetch initial inventory", err));
  }, []);

  useEffect(() => {
    soldSpring.set(targetSold);
  }, [targetSold, soldSpring]);

  const handlePreorder = async () => {
    // Optimistic UI update
    if (targetSold < 10000) {
      setTargetSold(prev => prev + 1);
    }
    setShowQR(true);
    
    // Update remote D1 database
    try {
      const res = await fetch('/api/inventory', { method: 'POST' });
      const data = await res.json() as { soldCount?: number };
      if (data && data.soldCount) {
        // Sync with actual source of truth in case it vastly differed
        setTargetSold(data.soldCount);
      }
    } catch (error) {
      console.error("Failed to update remote inventory", error);
    }
  };

  return (
    <div className="bg-[#0D0D1A] min-h-screen text-white pt-16 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('preorder.title', '龙虾机 · 立即预定')}</h1>
          <p className="text-xl text-slate-400">{t('preorder.subtitle', '全球首款开机即用的 AI 安全工作站')}</p>
        </div>

        {/* Product Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{t('preorder.edition', 'AI 安全工作站 · 标准版')}</h2>
              <p className="text-slate-400 mb-4">{t('preorder.specs', '16GB 内存 · 256GB 存储 · 预装 OpenClaw · 开机即用')}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300">{t('preorder.tag1', '独立硬件')}</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300">{t('preorder.tag2', '数据隔离')}</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300">{t('preorder.tag3', '7x24运行')}</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300">{t('preorder.tag4', '免费AI额度')}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-slate-500 line-through text-lg mb-1">AED 2,980</div>
              <div className="text-4xl font-extrabold text-red-500"><span className="text-2xl">¥</span>298<span className="text-xl text-slate-400">{t('preorder.unit', '/台')}</span></div>
              <div className="text-xs text-slate-500 mt-1">{t('preorder.refund', '发货前可随时全额退款')}</div>
            </div>
          </div>
        </div>

        {/* Stock Countdown */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 backdrop-blur-sm">
          <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            {t('preorder.limit', '限量 10,000 台 · 实时库存')}
          </h3>

          <div className="h-4 bg-slate-800 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-red-600 to-orange-500"
              style={{ width: progressWidth }}
            />
          </div>

          <div className="flex justify-between items-center font-mono">
            <div>
              <div className="text-slate-400 text-sm">{t('preorder.reserved', '已预定')}</div>
              <motion.div className="text-2xl font-bold">{soldCount}</motion.div>
            </div>
            <div className="text-right">
              <div className="text-slate-400 text-sm">{t('preorder.remaining', '剩余席位')}</div>
              <motion.div className="text-2xl font-bold text-red-500">{remainingCount}</motion.div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="sticky z-40 w-full mb-8" style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}>
          <button
            onClick={handlePreorder}
            className="w-full bg-red-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-red-600/90 backdrop-blur-md transition-all shadow-[0_10px_40px_rgba(220,38,38,0.4)] border border-red-500/30"
          >
            {t('preorder.btn', '立即预定 · ¥298')}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-center gap-2 text-slate-400 bg-white/5 py-4 rounded-xl">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">{t('preorder.feat1', '独立安全硬件')}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400 bg-white/5 py-4 rounded-xl">
            <Truck className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium">{t('preorder.feat2', '顺丰包邮')}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400 bg-white/5 py-4 rounded-xl">
            <RotateCcw className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium">{t('preorder.feat3', '7天无理由退货')}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
