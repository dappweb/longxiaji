import os
import json

i18n_content = """import i18n from 'i18next';
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
      hero: {
        badge: '全球首款开机即用的 AI 安全工作站',
        title1: '把 AI 助理请回你的桌面',
        title2: '别让它住在你的电脑里',
        desc: 'AI 需要你电脑的完整 Root 权限——你的银行密码、聊天记录、工作文件全部暴露。给它一台独立的机器，别拿你的电脑冒险。插电即用，3 分钟上手。',
        preorder: '抢先预定',
        video: '观看演示视频',
        guarantee1: '七天无理由退货',
        guarantee2: '开箱即用承诺'
      },
      footer: {
        rights: '© {{year}} 龙虾机 LongXiaJi. 保留所有权利.',
        privacy: '隐私政策',
        terms: '服务条款',
        wechat: '微信客服',
        contact: '联系我们',
        scan: '扫码添加客服，注明“龙虾机预定”'
      },
      preorder: {
        title: '龙虾机 · 立即预定',
        subtitle: '全球首款开机即用的 AI 安全工作站',
        edition: 'AI 安全工作站 · 标准版',
        specs: '16GB 内存 · 256GB 存储 · 预装 OpenClaw · 开机即用',
        tag1: '独立硬件',
        tag2: '数据隔离',
        tag3: '7x24运行',
        tag4: '免费AI额度',
        unit: '/台',
        refund: '发货前可随时全额退款',
        limit: '限量 10,000 台 · 实时库存',
        reserved: '已预定',
        remaining: '剩余席位',
        btn: '立即预定 · ¥298',
        feat1: '独立安全硬件',
        feat2: '顺丰包邮',
        feat3: '7天无理由退货'
      },
      modal: {
        title: '接收预定通知',
        subtitle: '获取首批预定资格与首发专属优惠',
        desc1: '获取专人顾问支持',
        desc2: '长按或扫码添加企业微信，注明“龙虾机预定”'
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
      hero: {
        badge: 'The World\\'s First Out-of-the-Box AI Safety Workstation',
        title1: 'Bring the AI Assistant to Your Desk',
        title2: 'Don\\'t Let It Reside Inside Your PC',
        desc: 'AI needs full Root access to your PC—exposing passwords, chats, and work files. Give it a dedicated machine and stop risking your privacy. Plug and play, set up in 3 minutes.',
        preorder: 'Preorder Now',
        video: 'Watch Demo',
        guarantee1: '7-Day Free Return',
        guarantee2: 'Out-of-the-box Promise'
      },
      footer: {
        rights: '© {{year}} LongXiaJi. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        wechat: 'WeChat Support',
        contact: 'Contact Us',
        scan: 'Scan QR code to add support'
      },
      preorder: {
        title: 'Longxiaji · Preorder Now',
        subtitle: 'The world\\'s first out-of-the-box AI safety workstation',
        edition: 'AI Security Workstation · Standard Edition',
        specs: '16GB RAM · 256GB Storage · Pre-installed OpenClaw · Out of the box',
        tag1: 'Independent Hardware',
        tag2: 'Data Isolation',
        tag3: '7x24 Operation',
        tag4: 'Free AI Quota',
        unit: '/unit',
        refund: 'Full refund anytime before shipping',
        limit: 'Limited to 10,000 units · Real-time stock',
        reserved: 'Pre-ordered',
        remaining: 'Remaining',
        btn: 'Preorder Now · ¥298',
        feat1: 'Independent Security Hardware',
        feat2: 'Free Shipping',
        feat3: '7-Day Free Return'
      },
      modal: {
        title: 'Receive Preorder Notification',
        subtitle: 'Get first-batch preorder eligibility and exclusive launch offers',
        desc1: 'Get dedicated consultant support',
        desc2: 'Scan QR code to add WeChat Enterprise, please reply "Longxiaji Preorder"'
      },
      product: {
        nav1: 'How It Works',
        nav2: 'Hardware Specs',
        title1: 'Product Intro, Under 3 Minutes',
        sub1: 'No technical background required. Follow three steps to experience AI instantly.',
        step1: { title: 'Network + Activate', desc: 'Plug Ethernet or connect WiFi, scan the QR code on screen to activate. Gets initial API quota for days of usage.' },
        step2: { title: 'Bind IM Account', desc: 'Supports WeChat, DingTalk, Feishu, QQ. Scan to authorize, and Longxia Assistant appears in your chats.' },
        step3: { title: 'Experience Guide', desc: 'Send your first message to the assistant, it will push 3 out-of-the-box tasks to run instantly.' },
        arch: { title: 'Cloud Proxy Architecture', subtitle: 'Zero Local Inference', desc: 'No local model inference. All LLM calls run via cloud API proxy. Local hardware only handles OpenClaw OS, task scheduling, and securing private data.' },
        spec1: { title: '16 GB RAM', desc: 'Sufficient for multi-tasking and concurrent IM clients online smoothly.' },
        spec2: { title: '256 / 512 GB Storage', desc: 'OS takes 30-40 GB. Rest stores private files, chats, and Skills data. Supports cloud expansion.' },
        spec3: { title: 'Ethernet + WiFi', desc: 'Stable networking solutions since cloud proxy heavily relies on connection.' },
        img_alt: 'Longxiaji Real Shot',
        size: '≤ Mac mini Size',
        power: 'Low Power Consumption',
        preorder: 'Preorder Now'
      },
      cases: {
        title1: 'They Started From "Zero" Too',
        sub1: 'Ordinary people from all industries are changing their work & life with Longxiaji. Four authentic use cases.',
        start: 'Start Your Exclusive AI Assistant',
        collapse: 'Collapse',
        readmore: 'Read More',
        items: {
          1: { tag: 'E-Commerce', title: 'From Sourcing to CS, Killing Timezones', desc: 'It monitors trends 24/7. Even better, it connects to my CS email and perfectly answers North American customers down to midnight in native business English.' },
          2: { tag: 'Overseas Dining', title: 'Multilingual Menus & Social Media', desc: 'Opening a Chinese restaurant in LA. It translates thoughts into pure English/Spanish menus instantly, and writes Instagram posts for local trends. No cloud data needed.' },
          3: { tag: 'Hardware Feedback', title: 'Lacking specific ports, needs better extension', desc: 'Claims out-of-the-box, but I use a vintage monitor and need adapters. Acts well as a server. Network sometimes delays queries. Giving 4 stars.' },
          4: { tag: 'Media Ops', title: 'A YouTuber\\'s Inspiration Library', desc: 'Fear of creative drain. Longxiaji summarizes rival structures and directly analyzes my gigabytes of local footage independently without uploading. 3x efficiency.' },
          5: { tag: 'Students', title: 'Thesis Inspiration & Daily Tutoring', desc: 'Doing masters in UK. Simply scan to bind, and I can voice-chat for references while reading in the library without messing with VPNs.' },
          6: { tag: 'Remote Dev', title: 'Independent Secure Coding Environment', desc: 'As a digital nomad, coding on Airbnb WiFi feels unsafe. This isolated hardware helps debug and run scripts without consuming my laptop\\'s resources.' }
        }
      },
      skills: {
        title: 'Pre-installed Skills, Ready to Use',
        subtitle: 'Hardware is the portal, Skills are the soul. Fulfilling all aspects from chitchat to deep office work.',
        cat: { all: 'All', office: 'Office', life: 'Lifestyle', design: 'Design' },
        empty: 'No Skills in this category yet',
        empty_sub: 'Can\\'t find a suitable skill? Add customer service for custom ones.',
        contact: 'Contact CS',
        future: 'Future updates will open the Skills Market for quant-trading, e-commerce, and advanced services. Free updates forever.',
        explore: 'Explore More Skills',
        items: {
          1: { title: 'Smart Chat', f1: 'One-click multi-model (GPT, Claude, Qwen)', f2: 'Accurate translation & summaries', f3: 'High-quality copywriting', val: '"Faster and more convenient than ChatGPT"' },
          2: { title: 'Office Assistant', f1: 'Complex Excel formulas', f2: 'PPT outline generation', f3: 'Draft EN/CN emails', val: '"Just say a word in WeChat"' },
          3: { title: 'Life Tools', f1: 'Smart scheduling & reminders', f2: 'Personalized weather', f3: 'Daily news push', val: '"Exclusive AI morning paper"' },
          4: { title: 'Pic/Video Editor', f1: 'Precise image recognition', f2: 'One-sentence text to image', f3: 'Basic video script handling', val: '"Snap to translate, speak to draw"' }
        }
      },
      home: {
        sec1: { 
          title: 'You Don\\'t Need to Understand PCs, It Understands You', 
          sub: 'Solving the "Can I use AI?" problem. Eliminating all configuration, payment, and registration barriers.',
          f1: { title: 'Zero Threshold', desc: 'Others need coding, env setup—Longxiaji plugs in and works like a microwave.' },
          f2: { title: 'Data Stays Home', desc: 'Trust the cloud with chats and passwords? Longxiaji isolates locally. Pull the plug and it\\'s off.' },
          f3: { title: '24/7 Online', desc: 'Helps your emails by day. Runs quant trading strategies by night.' },
          f4: { title: 'Seamless WeChat/DingTalk', desc: 'No new Apps. Scan to bind, and your AI assistant lives in your chats. Speak to it anytime.' },
          f5: { title: 'Transparent Fees', desc: 'One-time hardware fee. API costs are fully transparent. Cheaper than an intern, and never quits.' },
          f6: { title: 'Tech Gift for Elders', desc: 'High-tech that parents can use. Use WeChat to ask for weather or recipes. Huge word-of-mouth.' }
        },
        sec2: {
          title: 'Who\\'s Using Longxiaji?',
          sub: 'From personal assistants to digital employees, satisfying AI needs everywhere.',
          c1: { title: 'Individuals / Fresh Grads', q: '"A 24hr private AI assistant. Ask directly in WeChat, double the efficiency."', scene: 'Typical: Q&A, Email drafting' },
          c2: { title: 'SMEs / Studios', q: '"Cheaper than an intern\\'s transit fee. Never takes leave, never complains, completely secure data."', scene: 'Typical: Auto CS, Copywriting' },
          c3: { title: 'Parents / Elders', q: '"Not just your tool, but an AI gift for parents. They ask about weather via voice—smarter than smart speakers."', scene: 'Typical: Life encyclopedia, Health recipes' }
        },
        sec3: { t1: 'While others learn how to use AI', t2: 'Your Longxiaji is already working for you', sub: 'Limited early birds. Experience zero-barrier desktop AI.', btn1: 'Preorder Early Bird', btn2: 'Contact Enterprise' }
      },
      news: {
        title: 'Latest News',
        sub: 'Learn about Longxiaji\\'s latest updates, products, and industry news',
        read: 'Read Full',
        cat: { prod: 'Product Release', sys: 'System Update', ind: 'Industry' },
        items: {
          1: { title: 'Longxiaji Standard Edition Released: Bring AI to Desk', abstract: 'The world\\'s first out-of-the-box AI safety workstation opens for global preorders.' },
          2: { title: 'OpenClaw System Update: Seamless WeChat/DingTalk Support', abstract: 'Revolutionary interaction upgrade. Users can now call Longxiaji\\'s compute inside daily IM tools.' },
          3: { title: 'Privacy First: Why We Need an Independent AI Workstation?', abstract: 'Deep dive into Longxiaji\\'s anti-leak architecture and enterprise data security solutions.' }
        }
      },
      contact: {
        title: 'Contact Us',
        sub: 'Global service network, always ready to support you',
        sales: { title: 'Sales Inquiry', sub: 'Enterprise procurement & VIP orders' },
        support: { title: 'Technical Support', sub: '24/7 Professional Engineers' },
        media: { title: 'Media & PR', sub: 'Interviews, partnerships & branding' },
        global: 'Global Offices',
        btn: { email: 'Send Email' },
        offices: { sz: 'Shenzhen (HQ)', bj: 'Beijing', sh: 'Shanghai', cd: 'Chengdu', hz: 'Hangzhou', wh: 'Wuhan', xa: 'Xi\\'an', gz: 'Guangzhou' }
      },
      support: {
        title: 'After-Sales Support',
        sub: 'Comprehensive technical support and guarantee',
        warr: { title: 'Hardware Warranty', sub: '1-Year Standard Service', '7day': '7 Days', ref: 'Free Return', life: 'Lifetime', tech: 'Online Tech Support' },
        faq: { 
            title: 'FAQ',
            1: { q: 'How to activate?', a: 'Plug in power & ethernet. Scan the QR code with phone.' },
            2: { q: 'Can I use my current WeChat?', a: 'Yes. Via our proxy architecture, it embeds as a special contact.' },
            3: { q: 'Is data truly secure?', a: 'Absolutely. Local vectorization ensures only essential traits hit cloud APIs.' }
        },
        help: { title: 'Need More Help?', sub: 'Get dedicated consultant support', time: 'Workdays 9:00 - 18:00' }
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
      escapeValue: false,
    }
  });

export default i18n;
"""

with open("src/i18n.ts", "w", encoding="utf-8") as f:
    f.write(i18n_content)
