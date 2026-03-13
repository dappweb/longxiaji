import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-extrabold text-red-600 mb-4">404</div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">{t('notfound.title', '页面不存在')}</h1>
      <p className="text-slate-500 mb-8">{t('notfound.desc', '你访问的页面已飞走，或者从未存在过。')}</p>
      <button
        onClick={() => navigate('/')}
        className="bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
      >
        {t('notfound.back', '返回首页')}
      </button>
    </div>
  );
}
