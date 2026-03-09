export const translations = {
  zh: {
    nav: {
      features: '核心特性',
      howItWorks: '三步上手',
      skills: '技能中心',
      skillMarket: 'Skills 市场',
      cases: '用户案例',
      specs: '硬件规格',
      login: '登录',
      preorder: '立即预定',
    },
    hero: {
      badge: '迪拜首发，全球火爆 —— 中国智造 AI 硬件',
      title1: '把 AI 助理',
      title2: '请回你的桌面',
      desc: '预装 OpenClaw 系统的消费级 AI 硬件平台。告别翻墙、API Key 和繁琐配置。开机即用，三步连通微信，你的 24 小时私人 AI 助理。',
      btnPreorder: '抢先预定',
      btnVideo: '观看演示视频',
      guarantee1: '七天无理由退货',
      guarantee2: '开箱即用承诺',
      systemStatus: 'OpenClaw 系统运行中',
      wechatStatus: '微信已连接',
    },
    features: {
      title: '不需要你懂电脑，它懂你',
      subtitle: '解决“用不用得上 AI”的问题。把翻墙、配置、支付、注册四道门槛全部消除。',
      items: [
        { title: '零门槛开机即用', desc: '别人用 AI 需要打代码、配置环境、安装包——龙虾机插电开机就能用，和用微波炉一样简单。' },
        { title: '数据只在你家里', desc: '你的聊天记录、银行密码、工作文件放心交给云端吗？龙虾机物理隔离，数据不出家门，拔电即断网。' },
        { title: '7×24 永不下班', desc: '白天你上班，它在家帮你整理邮件、撰写报告。晚上你睡觉，它还在跑量化交易策略。' },
        { title: '无缝接入微信/钉钉', desc: '不需要下载新 App，扫码绑定后，AI 助手直接出现在你的微信聊天列表中，随时随地发语音使唤它。' },
        { title: '费用透明可控', desc: '一次买断硬件，API 费用透明可控。每天不到一块钱，比请一个实习生还便宜，且不会请假离职。' },
        { title: '送长辈的科技礼', desc: '父母也能用的高科技。用微信问天气、查菜谱、读新闻摘要，复购率和口碑传播极强。' },
      ]
    },
    howItWorks: {
      title: '三步上手，全程不超过 3 分钟',
      subtitle: '不需要任何技术背景，收到机器后跟着引导界面走完三步，立即体验 AI。',
      steps: [
        { title: '连网 + 激活', desc: '插网线或连 WiFi，屏幕显示二维码，手机扫码自动激活。激活即送初始 API 额度，足够体验数天。' },
        { title: '绑定 IM 账号', desc: '支持微信、钉钉、飞书、QQ。点击图标扫码授权，龙虾助手自动出现在你的会话列表中。' },
        { title: '体验引导', desc: '在微信中发送第一条消息给助手，自动推送 3 个开箱任务示例，点击即可执行，秒速上手。' },
      ]
    },
    skills: {
      title: '预装 Skills，开箱即用',
      subtitle: '硬件是入口，Skills 是灵魂。满足从日常闲聊到深度办公的全方位需求。',
      items: [
        { title: '智能对话', features: ['多模型一键切换 (GPT, Claude, 通义千问等)', '精准翻译与长文摘要', '高质量文案写作'], value: '“比 ChatGPT 还方便，不用翻墙”' },
        { title: '办公助手', features: ['Excel 复杂公式生成', 'PPT 大纲一键生成', '中英文邮件自动起草'], value: '“在微信里说一句就能用”' },
        { title: '生活工具', features: ['智能日程管理与提醒', '个性化天气预报', '每日新闻摘要推送'], value: '“每天早上收到专属 AI 早报”' },
        { title: '图片/视频处理', features: ['精准图片识别与分析', '一句话文字转图', '基础视频脚本处理'], value: '“拍照片就能翻译，一句话出图”' },
      ],
      more: '未来更将开放 Skills 市场，支持量化交易、电商运营等高级订阅服务。',
      explore: '探索更多 Skills'
    },
    skillMarket: {
      title: 'Skills 市场：无限扩展你的 AI 能力',
      subtitle: '发现、订阅并安装由全球开发者贡献的专业技能包，满足垂直场景的深度需求。',
      items: [
        { title: '量化交易卫士', desc: '自动监控加密货币与股票行情，执行网格交易与定投策略，支持多交易所 API。', author: 'By QuantPro', price: '¥99/月', icon: 'LineChart' },
        { title: '跨境电商客服', desc: '接入 Shopify/亚马逊，7x24 小时多语言自动回复客户询盘，智能处理退换货。', author: 'By E-comAI', price: '¥199/月', icon: 'ShoppingBag' },
        { title: '爆款短视频编导', desc: '自动抓取全网热点，一键生成分镜脚本、爆款文案与配音提示。', author: 'By MediaGen', price: '¥49/月', icon: 'Video' },
        { title: '自动化财税助手', desc: '自动识别发票与账单，生成标准财务报表与报税草稿，支持导出 Excel。', author: 'By TaxSmart', price: '¥149/月', icon: 'Calculator' },
      ]
    },
    specs: {
      title1: '纯云端代理架构',
      title2: '本地零推理',
      desc: '龙虾机不做本地模型推理。所有大模型调用均通过云端 API 聚合层完成，本地硬件专注于运行 OpenClaw 系统、任务调度和存储用户私密数据。',
      items: [
        { title: '16 GB 内存', desc: '足够支撑多任务并发与多个 IM 客户端同时在线，运行流畅不卡顿。' },
        { title: '256 GB / 512 GB 存储', desc: '系统约占 30-40 GB，剩余空间用于存储你的私密文件、聊天记录和 Skills 数据。支持云盘扩容。' },
        { title: '有线 + WiFi 双网络', desc: '云端代理架构下网络连接是核心依赖，提供稳定可靠的网络接入方案。' },
      ],
      size: '≤ Mac mini 尺寸',
      power: '低功耗 / 无风扇'
    },
    scenarios: {
      title: '谁在用龙虾机？',
      subtitle: '从个人助理到企业数字员工，满足不同场景的 AI 需求。',
      items: [
        { title: '个人用户 / 职场新人', desc: '“每天不到一块钱，拥有一个 24 小时在线的私人 AI 助理。不用折腾翻墙账号，微信里直接问，效率翻倍。”', tag: '典型场景：日常问答、邮件起草' },
        { title: '中小企业 / 工作室', desc: '“一台龙虾机的月费，还不到一个实习生的交通补贴。但它不会请假、不会离职、不会累，数据还绝对安全。”', tag: '典型场景：客服自动回复、文案生成' },
        { title: '长辈 / 父母', desc: '“它不仅仅是你的工具，也是给爸妈的一份 AI 礼物。父母用微信语音问天气、查菜谱，比智能音箱聪明多了。”', tag: '典型场景：生活百科、健康食谱' },
      ]
    },
    userCases: {
      title: '真实用户故事',
      subtitle: '看看他们是如何用龙虾机改变工作与生活的。',
      items: [
        { 
          quote: '以前每天要花 3 小时回亚马逊买家邮件，现在龙虾机装了电商客服 Skill，我连后台都不用登了，全自动处理，退款率还降了 15%。', 
          name: '张老板', 
          role: '跨境电商卖家',
          avatar: 'Z'
        },
        { 
          quote: '儿子给我买的，教我用微信跟它说话。现在我天天让它给我念新闻、查钓鱼的偏方，比那个什么智能音箱聪明太多了，还能陪我聊天！', 
          name: '老李', 
          role: '65岁退休职工',
          avatar: 'L'
        },
        { 
          quote: '作为一个独立开发者，我用它跑一些自动化的爬虫和监控脚本。物理隔离让我很安心，不用担心云服务器被黑导致 API Key 泄露。', 
          name: 'David', 
          role: '全栈自由职业者',
          avatar: 'D'
        }
      ]
    },
    founders: {
      title: '最接地气的跨界创始团队',
      subtitle: '五个背景迥异的创始人，为了同一个目标走到一起：让所有人都能零门槛用上 AI。',
      items: [
        { role: '农民', desc: '首席体验官，确保产品“连我都会用”', icon: '🌾' },
        { role: '养虾大户', desc: '天使投资人，“龙虾机”名字的灵感来源', icon: '🦞' },
        { role: '币安程序员', desc: '首席技术官，主导 OpenClaw 与 Token 架构', icon: '💻' },
        { role: '村长', desc: '统筹全局，深谙下沉市场与百姓真实需求', icon: '👨‍🌾' },
        { role: '华强北厂长', desc: '硬件负责人，把控极致性价比与供应链', icon: '🏭' },
      ]
    },
    cta: {
      title1: '别人还在学怎么用 AI',
      title2: '你的龙虾机已经在帮你干活了',
      subtitle: '首批限量发售，抢先体验零门槛的桌面 AI 助理。',
      btn1: '立即预定抢首发',
      btn2: '联系企业采购'
    },
    footer: {
      desc: '预装 OpenClaw 系统的消费级 AI 硬件平台。',
      product: '产品',
      support: '联系我们',
      about: '关于',
      madeIn: '中国智造，全球首发',
      links: {
        features: '核心特性',
        specs: '硬件规格',
        skills: 'Skills 市场',
        enterprise: '企业定制',
        aboutUs: '关于我们',
        joinUs: '加入开发者',
        privacy: '隐私政策',
        terms: '服务条款',
      }
    }
  },
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How it Works',
      skills: 'Skills',
      skillMarket: 'Skill Market',
      cases: 'User Cases',
      specs: 'Specs',
      login: 'Login',
      preorder: 'Pre-order',
    },
    hero: {
      badge: 'Global Premiere in Dubai — AI Hardware by China',
      title1: 'Bring Your AI Assistant',
      title2: 'Back to Your Desk',
      desc: 'Consumer AI hardware pre-installed with OpenClaw OS. Say goodbye to VPNs, API Keys, and complex setups. Plug and play, connect to WeChat/IM in 3 steps. Your 24/7 private AI assistant.',
      btnPreorder: 'Pre-order Now',
      btnVideo: 'Watch Demo',
      guarantee1: '7-Day Free Return',
      guarantee2: 'Plug & Play Guarantee',
      systemStatus: 'OpenClaw OS Running',
      wechatStatus: 'WeChat Connected',
    },
    features: {
      title: 'You Don\'t Need to Know Computers, It Knows You',
      subtitle: 'Eliminating the barriers of VPNs, configuration, payments, and registration.',
      items: [
        { title: 'Zero Barrier, Plug & Play', desc: 'While others write code and configure environments, LongXiaJi works right out of the box, as simple as a microwave.' },
        { title: 'Data Stays in Your Home', desc: 'Worried about your chats and bank passwords in the cloud? LongXiaJi is physically isolated. Unplug it, and it\'s offline.' },
        { title: '24/7 Never Off Work', desc: 'It drafts emails while you work, and runs quantitative trading strategies while you sleep.' },
        { title: 'Seamless IM Integration', desc: 'No new apps to download. Scan to bind, and your AI assistant appears in your WeChat/IM list.' },
        { title: 'Transparent & Controllable Costs', desc: 'One-time hardware purchase. Costs less than $1 a day, cheaper than an intern, and never takes a day off.' },
        { title: 'A Tech Gift for Elders', desc: 'High-tech that parents can use. Ask for weather, recipes, and news summaries via WeChat voice messages.' },
      ]
    },
    howItWorks: {
      title: '3 Steps to Start, Under 3 Minutes',
      subtitle: 'No technical background required. Follow the guide and experience AI immediately.',
      steps: [
        { title: 'Connect & Activate', desc: 'Plug in Ethernet or WiFi, scan the QR code to activate. Free initial API credits included.' },
        { title: 'Bind IM Account', desc: 'Supports WeChat, DingTalk, Feishu, QQ. Scan to authorize, and the assistant appears in your chats.' },
        { title: 'Experience Guide', desc: 'Send your first message to the assistant, try 3 out-of-the-box tasks, and get started instantly.' },
      ]
    },
    skills: {
      title: 'Pre-installed Skills, Ready to Use',
      subtitle: 'Hardware is the gateway, Skills are the soul. From daily chats to deep office work.',
      items: [
        { title: 'Smart Chat', features: ['One-click model switch (GPT, Claude, etc.)', 'Accurate translation & summarization', 'High-quality copywriting'], value: '"More convenient than ChatGPT, no VPN needed"' },
        { title: 'Office Assistant', features: ['Complex Excel formulas', 'One-click PPT outlines', 'Auto-draft bilingual emails'], value: '"Just say a word in WeChat to use it"' },
        { title: 'Life Tools', features: ['Smart schedule & reminders', 'Personalized weather forecast', 'Daily news summary'], value: '"Receive an exclusive AI morning post daily"' },
        { title: 'Image/Video Processing', features: ['Accurate image recognition', 'Text-to-image in one sentence', 'Basic video script processing'], value: '"Translate by taking a photo, generate images with a sentence"' },
      ],
      more: 'Future Skills Market will support advanced subscriptions like quantitative trading and e-commerce operations.',
      explore: 'Explore More Skills'
    },
    skillMarket: {
      title: 'Skills Market: Expand Your AI Capabilities',
      subtitle: 'Discover, subscribe, and install professional skill packs contributed by global developers to meet vertical scenario needs.',
      items: [
        { title: 'Quant Trading Bot', desc: 'Automatically monitor crypto and stock markets, execute grid trading and DCA strategies. Supports multi-exchange APIs.', author: 'By QuantPro', price: '$14/mo', icon: 'LineChart' },
        { title: 'E-commerce CS', desc: 'Connects to Shopify/Amazon for 24/7 multilingual auto-replies to customer inquiries and smart return processing.', author: 'By E-comAI', price: '$29/mo', icon: 'ShoppingBag' },
        { title: 'Viral Video Director', desc: 'Automatically scrape trending topics, generate storyboard scripts, viral copy, and voiceover prompts with one click.', author: 'By MediaGen', price: '$7/mo', icon: 'Video' },
        { title: 'Auto Finance Assistant', desc: 'Automatically recognize invoices and bills, generate standard financial reports and tax drafts. Export to Excel.', author: 'By TaxSmart', price: '$19/mo', icon: 'Calculator' },
      ]
    },
    specs: {
      title1: 'Pure Cloud Proxy Architecture',
      title2: 'Zero Local Inference',
      desc: 'LongXiaJi does not run local models. All large model calls are routed through our cloud API layer. The local hardware focuses on running OpenClaw OS, task scheduling, and storing private data.',
      items: [
        { title: '16 GB RAM', desc: 'Sufficient for multi-tasking and multiple IM clients online simultaneously without lag.' },
        { title: '256 GB / 512 GB Storage', desc: 'OS takes ~30-40 GB. The rest is for your private files, chat history, and Skills data. Cloud expansion supported.' },
        { title: 'Wired + WiFi Dual Network', desc: 'Network connection is core to the cloud proxy architecture, providing stable and reliable access.' },
      ],
      size: '≤ Mac mini Size',
      power: 'Low Power / Fanless'
    },
    scenarios: {
      title: 'Who is using LongXiaJi?',
      subtitle: 'From personal assistants to enterprise digital employees.',
      items: [
        { title: 'Individuals / Newbies', desc: '"Less than $1 a day for a 24/7 private AI assistant. No VPN hassle, just ask in WeChat. Efficiency doubled."', tag: 'Typical: Q&A, Email Drafting' },
        { title: 'SMBs / Studios', desc: '"The monthly fee is less than an intern\'s transport allowance. But it never asks for leave, never quits, and data is absolutely safe."', tag: 'Typical: CS Auto-reply, Copywriting' },
        { title: 'Elders / Parents', desc: '"Not just your tool, but an AI gift for parents. They use WeChat voice to ask for weather and recipes. Smarter than smart speakers."', tag: 'Typical: Life Wiki, Health Recipes' },
      ]
    },
    userCases: {
      title: 'Real User Stories',
      subtitle: 'See how they are changing their work and life with LongXiaJi.',
      items: [
        { 
          quote: 'I used to spend 3 hours a day replying to Amazon buyer emails. Now with the E-commerce CS Skill on LongXiaJi, I don\'t even log into the backend. It\'s fully automated, and the refund rate dropped by 15%.', 
          name: 'Mr. Zhang', 
          role: 'Cross-border E-commerce Seller',
          avatar: 'Z'
        },
        { 
          quote: 'My son bought it for me and taught me to talk to it on WeChat. Now I ask it to read news and find fishing tips every day. It\'s much smarter than those smart speakers, and it chats with me!', 
          name: 'Old Li', 
          role: '65-year-old Retiree',
          avatar: 'L'
        },
        { 
          quote: 'As an indie developer, I use it to run automated crawlers and monitoring scripts. Physical isolation gives me peace of mind; I don\'t worry about cloud servers getting hacked and leaking API Keys.', 
          name: 'David', 
          role: 'Full-stack Freelancer',
          avatar: 'D'
        }
      ]
    },
    founders: {
      title: 'The Most Down-to-Earth Crossover Team',
      subtitle: 'Five founders from vastly different backgrounds, united by one goal: making AI accessible to everyone with zero barriers.',
      items: [
        { role: 'Farmer', desc: 'Chief Experience Officer, ensuring "even I can use it"', icon: '🌾' },
        { role: 'Lobster Tycoon', desc: 'Angel Investor, inspiration for the name "LongXiaJi"', icon: '🦞' },
        { role: 'Binance Coder', desc: 'CTO, leading OpenClaw and Token architecture', icon: '💻' },
        { role: 'Village Chief', desc: 'Overall Coordinator, deeply understands the grassroots market', icon: '👨‍🌾' },
        { role: 'Huaqiangbei Boss', desc: 'Hardware Lead, controlling ultimate cost-performance and supply chain', icon: '🏭' },
      ]
    },
    cta: {
      title1: 'While others are learning how to use AI',
      title2: 'Your LongXiaJi is already working for you',
      subtitle: 'Limited first batch release. Experience the zero-barrier desktop AI assistant.',
      btn1: 'Pre-order First Batch',
      btn2: 'Contact for Enterprise'
    },
    footer: {
      desc: 'Consumer AI hardware pre-installed with OpenClaw OS.',
      product: 'Product',
      support: 'Contact Us',
      about: 'About',
      madeIn: 'Designed in China, Global Premiere',
      links: {
        features: 'Features',
        specs: 'Specs',
        skills: 'Skills Market',
        enterprise: 'Enterprise',
        aboutUs: 'About Us',
        joinUs: 'Join Developers',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      }
    }
  }
};
