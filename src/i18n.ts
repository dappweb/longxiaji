import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  zh: {
    translation: {
      nav: {
        home: '首页',
        product: '产品介绍',
        skills: '技能市场',
        cases: '用户案例',
        contact: '联系我们',
        news: '新闻资讯',
        support: '售后支持',
        preorder: '抢先预定',
        sitemap: '网站导航',
        team: '创始团队'
      },
      footer: {
        rights: '© {{year}} 龙虾机 LongXiaJi. 保留所有权利.',
        privacy: '隐私政策',
        terms: '服务条款',
        wechat: '微信客服',
        contact: '联系我们',
        scan: '扫码添加客服，注明“龙虾机预定”'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        product: 'Product',
        skills: 'Skills',
        cases: 'Cases',
        contact: 'Contact Us',
        news: 'News',
        support: 'Support',
        preorder: 'Preorder',
        sitemap: 'Site Map',
        team: 'Founding Team'
      },
      footer: {
        rights: '© {{year}} LongXiaJi. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        wechat: 'WeChat Support',
        contact: 'Contact Us',
        scan: 'Scan QR code to add support'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;