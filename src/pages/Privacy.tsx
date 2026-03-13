import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();
  useEffect(() => { document.title = `${t('footer.privacy', '隐私政策')} · ${t('nav.logo', '龙虾机')}`; }, [t]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('privacy.title')}</h1>
        <p className="text-sm text-slate-500 mb-10">{t('privacy.updated')}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('privacy.s1_title')}</h2>
            <p className="text-slate-600 leading-relaxed">{t('privacy.s1')}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('privacy.s2_title')}</h2>
            <p className="text-slate-600 leading-relaxed">{t('privacy.s2')}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('privacy.s3_title')}</h2>
            <p className="text-slate-600 leading-relaxed">{t('privacy.s3')}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('privacy.s4_title')}</h2>
            <p className="text-slate-600 leading-relaxed">{t('privacy.s4')}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('privacy.s5_title')}</h2>
            <p className="text-slate-600 leading-relaxed">{t('privacy.s5')}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('privacy.s6_title')}</h2>
            <p className="text-slate-600 leading-relaxed">{t('privacy.s6')}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('privacy.s7_title')}</h2>
            <p className="text-slate-600 leading-relaxed">{t('privacy.s7')}</p>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('privacy.disclaimer_title')}</h2>
            <p className="text-slate-600 leading-relaxed">{t('privacy.disclaimer')}</p>
          </div>

          <p className="text-sm text-slate-400 pt-4">{t('privacy.contact')}</p>
        </div>
      </div>
    </section>
  );
}
