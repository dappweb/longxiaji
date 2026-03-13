import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  zh: {
    translation: {
      nav: {
        logo: '龙虾机',
        lang: '切换语言',
        home: '首页',
        product: '产品介绍',
        skills: '技能市场',
        cases: '用户案例',
        contact: '关于我们',
        news: '新闻资讯',
        support: '售后支持',
        preorder: '立即预定',
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
        rights_text: '龙虾机 LongXiaJi. 保留所有权利.',
        privacy: '隐私政策',
        terms: '服务条款',
        wechat: '微信客服',
        contact: '商务合作',
        scan: '扫码添加客服，注明“龙虾机预定”',
        desc1: '全球首款开机即用的 AI 硬件终端。',
        desc2: '致力于打破技术壁垒，让每一个普通人都能以最自然的方式，享受到先进的人工智能服务。',
        sz: '深圳智造 · 全球服务'
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
        original_price: 'AED 2,980',
        currency: '¥',
        price: '298',
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
        desc2: '长按或扫码添加企业微信，注明“龙虾机预定”',
        qr_alt: '企业微信二维码'
      },
      home: {
        sec1: { 
          title: '不需要你懂电脑，它懂你', 
          sub: '解决“用不用得上 AI”的问题。把配置、支付、注册等门槛全部消除。',
          f1: { title: '零门槛开机即用', desc: '别人用 AI 需要打代码、配置环境、安装包——龙虾机插电开机就能用，和用微波炉一样简单。' },
          f2: { title: '数据只在你家里', desc: '你的聊天记录、银行密码、工作文件放心交给云端吗？龙虾机物理隔离，数据不出家门，拔电即断网。' },
          f3: { title: '7×24 永不下班', desc: '白天你上班，它在家帮你整理邮件、撰写报告。晚上你睡觉，它还在跑量化交易策略。' },
          f4: { title: '无缝接入微信/钉钉', desc: '不需要下载新 App，扫码绑定后，AI 助手直接出现在你的微信聊天列表中，随时随地发语音使唤它。' },
          f5: { title: '费用透明可控', desc: '一次买断硬件，API 费用透明可控。比请一个实习生还划算，且不会请假离职。' },
          f6: { title: '送长辈的科技礼', desc: '父母也能用的高科技。用微信问天气、查菜谱、读新闻摘要，复购率和口碑传播极强。' }
        },
        stats: {
          skills: '12+', skills_label: '预装 AI 技能',
          setup: '3 min', setup_label: '开机到上手',
          offices: '8', offices_label: '全球办事处',
          uptime: '24/7', uptime_label: '全天候运行'
        },
        sec2: {
          title: '谁在用龙虾机？',
          sub: '从个人助理到企业数字员工，满足不同场景的 AI 需求。',
          c1: { title: '个人用户 / 职场新人', q: '“拥有一个 24 小时在线的私人 AI 助理。微信里直接问，效率翻倍。”', scene: '典型场景：日常问答、邮件起草' },
          c2: { title: '中小企业 / 工作室', q: '“一台龙虾机的月费，还不到一个实习生的交通补贴。但它不会请假、不会离职、不会累，数据还绝对安全。”', scene: '典型场景：客服自动回复、文案生成' },
          c3: { title: '长辈 / 父母', q: '“它不仅仅是你的工具，也是给爸妈的一份 AI 礼物。父母用微信语音问天气、查菜谱，比智能音箱聪明多了。”', scene: '典型场景：生活百科、健康食谱' }
        },
        sec3: { t1: '别人还在学怎么用 AI', t2: '你的龙虾机已经在帮你干活了', sub: '首批限量发售，抢先体验零门槛的桌面 AI 助理。', btn1: '立即预定抢首发', btn2: '联系企业采购' },
        story: {
          title: '龙虾机：AI时代的新电脑',
          intro1: '人工智能正在改变世界。',
          intro2: '但现实是——很多人想用AI，却被复杂的软件安装和环境配置挡在门外。',
          intro3: 'Python环境、GPU驱动、模型下载、系统配置……',
          intro4: 'AI本不该这么复杂。',
          intro5: '于是，我们做了一件事情：',
          intro6: '把所有AI能力，放进一台机器里。',
          intro7: '这就是 龙虾机（LongXiaJi AI Station）。',
          intro8: '一台专为人工智能打造的 AI智能工作站。',
          ready_title: '开机即用',
          ready1: '在龙虾机中，AI软件、AI模型和计算能力已经全部准备好。',
          ready2: '你不需要安装复杂的软件，也不需要配置系统环境。',
          ready3: '只需要一件事：',
          ready_steps: '开机。点击。开始使用AI。',
          own_title: '一台真正属于你的AI设备',
          own1: '龙虾机是一台独立运行的AI机器。',
          own2: '所有AI系统都在本地设备中运行。',
          own3: '这意味着：',
          own_f1: '你的数据不会上传云端',
          own_f2: '你的创作更加安全',
          own_f3: '你的系统更加稳定',
          own4: '你的AI，只属于你。',
          can_title: '用龙虾机，你可以做什么',
          can1: '在龙虾机中，你可以轻松使用各种AI能力：',
          can_f1: 'AI绘画',
          can_f2: 'AI视频生成',
          can_f3: 'AI数字人',
          can_f4: 'AI配音',
          can_f5: 'AI内容创作',
          can_f6: 'AI电商素材制作',
          can2: '过去需要团队完成的工作，现在一台设备就可以完成。',
          can3: '龙虾机不仅是一台电脑。',
          can4: '它是一个 AI生产中心。',
          who_title: '谁需要龙虾机',
          who1: '龙虾机正在被越来越多的人使用：',
          who_f1: '内容创作者',
          who_f2: '电商商家',
          who_f3: 'AI设计师',
          who_f4: 'AI工作室',
          who_f5: '企业团队',
          who2: '因为在AI时代，每个人都需要新的生产工具。',
          era_title: 'AI时代的新电脑',
          era1: '过去，每个人都需要一台电脑。',
          era2: '未来，每个人都需要一台AI电脑。',
          era3: '龙虾机，就是你的第一台AI电脑。',
          hw_title: '为AI而生的硬件',
          hw1: '龙虾机采用高性能计算架构，为人工智能任务而设计：',
          hw_f1: '高速存储系统',
          hw_f2: '稳定的散热结构',
          hw_f3: '模块化扩展能力',
          hw2: '让AI运行更快、更稳定。'
        }
      },
      product: {
        nav1: '使用流程',
        nav2: '硬件参数',
        title1: '产品介绍，全程不超过 3 分钟',
        sub1: '无需任何技术背景，三步体验 AI 的强大。',
        step1: { title: '连网 + 激活', desc: '插网线或连 WiFi，屏幕显示二维码，手机扫码自动激活。激活即送初始 API 额度，足够体验数天。' },
        step2: { title: '绑定 IM 账号', desc: '支持微信、钉钉、飞书、QQ。点击图标扫码授权，龙虾助手自动出现在你的会话列表中。' },
        step3: { title: '体验引导', desc: '在微信中发送第一条消息给助手，自动推送 3 个开箱任务示例，点击即可执行，秒速上手。' },
        arch: { title: '纯云端代理架构', subtitle: '本地零推理', desc: '不在本地运行大模型推理。所有 LLM 调用均通过云端 API 代理完成。本地硬件仅负责运行 OpenClaw 操作系统、任务调度和保护私有数据。' },
        spec1: { title: '16 GB 内存', desc: '足够支撑多任务并发与多个 IM 客户端同时在线，运行流畅不卡顿。' },
        spec2: { title: '256 GB / 512 GB 存储', desc: '系统约占 30-40 GB，剩余空间用于存储你的私密文件、聊天记录和 Skills 数据。支持云盘扩容。' },
        spec3: { title: '有线 + WiFi 双网络', desc: '云端代理架构下网络连接是核心依赖，提供稳定可靠的网络接入方案。' },
        img_alt: '龙虾机实拍',
        size: '≤ Mac mini 尺寸',
        power: '低功耗',
        preorder: '立即预定'
      },
      cases: {
        title1: '他们和你一样，也是从"不懂"开始的',
        sub1: '各行各业的普通人，正在使用龙虾机改变工作与生活。四个典型应用场景真实反馈。',
        start: '开启你的AI专属助手',
        collapse: '收起',
        readmore: '阅读全文',
        items: {
          1: { tag: '跨境电商', title: '从选品到客服，解决欧美时差痛点', desc: '以前每天要在各大平台看几百个品，现在人在国内做北美独立站，龙虾机24小时帮我监控趋势。更神的是，它直接连着我的客服邮箱和社媒账号，北美客户半夜的咨询它都能完美应答，一口地道的商务英语，效率大幅提升。' },
          2: { tag: '海外餐饮', title: '菜单多语言翻译与社交媒体运营', desc: '在洛杉矶开中餐厅，菜单经常要根据季节换。把想法发给龙虾机，秒出精准的中英西三语菜单，还会根据当地热门话题帮我写好 Instagram 探店文案。放在店里插个电就能跑，数据也不用走云端。' },
          3: { tag: '硬件反馈', title: '缺少特定接口，扩展性有待提高', desc: '这玩意儿虽然宣称"插电即用"，但我用的是很老式的显示器，还需要自己买个转接头。虽然它本身作为独立服务器运行没问题，但开箱体验不够好。而且有时候网络波动会导致回复有些慢。客服态度虽然可以，但这硬件配置我得给一星。' },
          4: { tag: '自媒体运营', title: 'YouTuber 的灵感素材库', desc: '作为油管博主最怕灵感枯竭。龙虾机不仅自动帮我总结对标账号的爆款结构，还能直接分析我存进本地的几个G的素材库。不需要把几十个大视频传到公有云上分析，效率高了三倍，数据也更安全。' },
          5: { tag: '留学生群体', title: '论文灵感与日常辅导', desc: '在英国读研，用它来整理庞大的参考文献和做阅读笔记简直是神器。不用到处找能用的节点，微信扫码绑好后，在图书馆看书时随时发语音查资料，太省心了。' },
          6: { tag: '远程开发', title: '独立安全的代码辅助环境', desc: '作为经常在不同国家旅居的数字游民，在 Airbnb 连公共 Wi-Fi 写关键代码让人不放心。带上这个小巧的龙虾机，它的独立计算环境和私有大模型帮我查 bug、写单元测试，甚至跑复杂的脚本，完全不占用我自己电脑的算力。' }
        }
      },
      skills: {
        title: '技能市场',
        subtitle: '丰富的 AI 技能生态，一键安装，即装即用。从日常办公到专业创作，覆盖你的所有 AI 需求。',
        search: '搜索技能...',
        cat: { all: '全部', office: '效率办公', life: '生活娱乐', design: '创作设计', ecom: '电商营销', dev: '开发工具', finance: '量化金融' },
        empty: '暂无该分类技能',
        empty_sub: '未能找到合适的技能？添加客服为您定制',
        contact: '联系客服',
        free: '免费',
        installed: '已安装',
        install: '安装',
        hot: '热门',
        new_tag: '新',
        skill_count: '{{count}} 款技能',
        future: '技能市场持续更新中，更多高级技能即将上线。所有技能免费解锁，终身升级。',
        explore: '探索更多技能',
        items: {
          1: { title: '智能对话', desc: '多模型一键切换，精准翻译与长文摘要，高质量文案写作', val: '"比 ChatGPT 还方便"', installs: '12,800+', hot: true },
          2: { title: '办公助手', desc: 'Excel 复杂公式、PPT 大纲生成、中英文邮件自动起草', val: '"微信里说一句就搞定"', installs: '9,600+', hot: true },
          3: { title: '生活助理', desc: '智能日程管理、天气预报、每日新闻摘要推送', val: '"每天早上收到 AI 早报"', installs: '8,200+' },
          4: { title: 'AI 绘画', desc: '一句话文字转图、风格迁移、批量图片处理', val: '"说句话就出图"', installs: '11,400+', hot: true },
          5: { title: 'AI 视频生成', desc: '文字转视频、视频脚本处理、字幕自动生成', val: '"效率提升10倍"', installs: '7,300+' },
          6: { title: '跨境电商助手', desc: '多语言商品描述、Listing优化、竞品分析、评论监控', val: '"北美站销量翻倍"', installs: '5,800+' },
          7: { title: '社媒运营', desc: '多平台内容生成、热点追踪、发布排期、数据分析', val: '"一人管理10个账号"', installs: '6,500+' },
          8: { title: '代码助手', desc: 'Bug 调试、单元测试生成、代码审查、API 文档撰写', val: '"开发效率翻倍"', installs: '4,200+' },
          9: { title: '量化交易策略', desc: '策略回测、行情监控、信号提醒、风险评估', val: '"7x24 自动盯盘"', installs: '3,100+' },
          10: { title: '客服自动回复', desc: '多渠道接入、智能问答、工单管理、满意度分析', val: '"客服成本降70%"', installs: '4,900+' },
          11: { title: '法律咨询助手', desc: '合同审查、法规检索、风险提示、法律文书起草', val: '"省下律师顾问费"', installs: '2,800+' },
          12: { title: 'AI 数字人', desc: '虚拟主播、数字分身、多语言口播、直播带货', val: '"24小时不下播"', installs: '6,100+' }
        }
      },
      news: {
        title: '最新资讯',
        sub: '了解龙虾机的最新动态、产品更新与行业资讯',
        read: '阅读全文',
        coming_soon: '详情内容正在建设中，敬请期待！',
        cat: { prod: '产品发布', sys: '系统更新', ind: '行业动态' },
        items: {
          1: { type: '产品公告', title: '龙虾机惊艳亮相迪拜AI科技展：全私有化部署成为全场焦点', summary: '在今日开幕的迪拜国际AI科技创新大展上，龙虾机凭借主打的"开箱即用、完全私有部署、数据不离本地"理念，成为展会最受瞩目的新品之一。多家国际企业现场签下意向订单。' },
          2: { type: '行业快讯', title: '隐私安全成为中小企业采用AI的最大阻力，本地大模型势在必行', summary: '最新行业报告指出，超过70%的中小企业因担心核心数据如财务、客户名录泄露，不敢贸然接入公有云AI服务。像龙虾机这样自带算力和模型的私有化硬件设备需求正急速上升。' },
          3: { type: '官方指引', title: '龙虾机技能市场突破1000款：涵盖跨境电商、法律咨询全场景', summary: '近日，龙虾机系统内嵌的免费技能市场迎来了第1000款专属Agent预设。现在，即便是完全不懂AI指令的普通用户，也能通过一键点击，让龙虾机变身专业的垂直领域助手。' }
        }
      },
      contact: {
        title: '全球办事处',
        sub: '业务覆盖全球，随时就近为您提供最专业的 AI 硬件支持与咨询服务',
        founders: {
          title: '最接地气的跨界创始团队',
          sub: '六个从龙虾产业走出来的人，因为同一个目标走到了一起：让每个人都能零门槛用上 AI。'
        },
        sales: { title: '销售咨询', sub: '企业采购与 VIP 订单' },
        support: { title: '技术支持', sub: '7x24 专业工程师支持' },
        media: { title: '媒体与公关', sub: '采访、合作与品牌推广' },
        global: '全球办事处',
        btn: { email: '发送邮件' },
        offices: { sz: '深圳（总部）', bj: '北京', sh: '上海', cd: '成都', hz: '杭州', wh: '武汉', xa: '西安', gz: '广州' }
      },
      about: {
        title: '龙虾机：让AI开机即用的智能工作站',
        stats: { founded: '成立年份', founders: '联合创始人', offices: '全球办事处', skills: '预装 AI 技能' },
        card1_title: '开机即用，零门槛',
        card2_title: '数据安全，物理隔离',
        card3_title: '微信接入，随时调用',
        card4_title: '24/7 不间断运行',
        p1: '随着人工智能技术的快速发展，AI正在改变内容创作、设计生产、电商营销、数字媒体等多个行业。越来越多的人希望借助人工智能提升效率、创造价值。然而，在实际应用过程中，复杂的软件安装、繁琐的环境配置以及高门槛的技术要求，成为许多人进入AI世界的重要障碍。',
        p2: '在这样的背景下，一款全新的AI设备应运而生——龙虾机（LongXiaJi AI Station）。',
        p3: '龙虾机是一台专为人工智能应用打造的AI智能工作站。它通过"AI软件系统 + 高性能硬件 + 模型平台"的一体化设计，将复杂的人工智能技术封装在一台独立设备中，让用户无需复杂安装和配置，就可以快速使用AI工具进行创作与生产。',
        slogan1: '简单来说，龙虾机的目标只有一个——让AI，开机即用。',
        p4: '与传统电脑不同，龙虾机在系统层面深度整合了多种主流AI应用工具和模型资源。用户只需开机进入系统界面，即可直接使用AI绘画、AI视频生成、AI数字人、AI内容创作等多种人工智能功能，无需安装复杂的软件环境，也无需掌握编程技术。',
        p5: '更重要的是，龙虾机是一台独立运行的AI设备。所有AI系统和数据都可以在本地运行，不依赖公共云服务器。这种设计不仅大幅提高了系统稳定性，同时也为用户的数据安全和隐私保护提供了更高保障。对于企业用户和专业创作者来说，本地AI系统意味着更安全、更可控的生产环境。',
        p6: '在应用层面，龙虾机可以广泛服务于多个行业场景。例如，内容创作者可以利用龙虾机快速生成AI图片和视频素材；电商商家可以通过AI生成商品展示图和营销内容；设计师可以借助AI提高创意设计效率；企业团队则可以将龙虾机作为内部AI生产平台使用。',
        p7: '随着AI技术逐渐走向大众化应用，人工智能正在从"技术工具"变成一种新的生产力基础设施。在过去，电脑改变了人们的工作方式，而在未来，AI设备将重新定义数字生产模式。',
        slogan2: 'AI时代，每个人都需要一台属于自己的AI设备。',
        p8: '龙虾机希望通过更简单、更安全、更高效的产品形态，让人工智能真正走进普通人的工作与生活，让AI不再是少数技术人员的工具，而成为人人可用的生产力。',
        p9: '未来，龙虾机将持续完善AI系统平台与模型生态，推动人工智能应用的普及，让更多个人创作者、企业团队以及创业者能够轻松进入AI时代。',
        brand: '龙虾机（LongXiaJi AI Station）',
        tagline: 'AI智能工作站。',
        slogan3: '让AI，开机即用。'
      },
      support: {
        title: '帮助与售后支持',
        sub: '全方位技术支持与保障',
        sub1: '我们不仅做靠谱的机器，更做让您放心的售后。',
        sub2: '买得放心，用得舒心，有问题随时找我们。',
        mail_cs: '邮件客服',
        mail_time: '工作日 9:00 - 21:00',
        feat1: { title: '包邮送达', desc: 'COO亲盯物流，顺丰/京东包邮，确保机器完好无损地送到您手上。' },
        feat2: { title: '7天无理由退货', desc: '收货7天内，只要包装完好、不影响二次销售，我们承担运费，全额退款。' },
        feat3: { title: '一年内只换不修', desc: '保修期内非人为损坏？不折腾维修，直接寄新机。' },
        warr: { title: '硬件保修', sub: '一年标准服务', '7day': '7 天', ref: '免费退换', life: '终身', tech: '在线技术支持' },
        faq: { title: '常见问题 (FAQ)' },
        help: {
          title: '没找到答案？直接找人工',
          desc: '我们的客服团队全部由真人组成，不是机器人。任何问题，随时联系我们。',
          sub: '获取专人顾问支持',
          time: '工作日 9:00 - 18:00'
        }
      },
      notfound: {
        title: '页面不存在',
        desc: '你访问的页面已飞走，或者从未存在过。',
        back: '返回首页'
      },
      team: {
        role: {
          4550575672377453511: '大厨',
          2378909925348224061: '养虾大户',
          1530984284887779511: '华强北厂长',
          4632996498518691208: '吃货',
          5869161594454019340: '程序员',
          4310680668521722572: '快递员'
        },
        title: {
          1976178603107875118: 'CEO · 产品与战略',
          1648467525086682513: '天使投资人 · 联合发起人',
          3039685758511568376: '硬件负责人 · 供应链',
          7591439887173719618: '首席体验官 · UX',
          1632399377708228028: 'CTO · 技术架构',
          1935043898737891844: 'COO · 运营与交付'
        },
        quote: {
          8657062610553757863: '火候到了，所有的食材都会说话。',
          1119697206308917872: '池塘里养出来的耐心，放到哪里都能用。',
          6158412454155482297: '在华强北，不可能只是还没找到对的供应商。',
          2078131862578899259: '好不好吃，舌头不会骗人。好不好用，手指不会骗人。',
          9214925180429021226: '从虾塘到代码库，都需要耐心和细心。',
          5431610284356572038: '不管送什么，到手的时候必须是完美的。'
        },
        desc: {
          8252663906765583088: '曾在传统水产行业深耕十几年，经营过连锁龙虾馆。对商业模式和用户需求有着极其敏锐的直觉。在转型科技行业后，他将打磨菜品的苛刻标准延续至硬件产品的研发中。凭借对草根痛点的深刻理解与出色的产品定义能力，他主导了龙虾机的整体战略路线，致力于让前沿 AI 真正走入千家万户。',
          7636435216432888677: '从小在水管和虾塘边长大，曾管理超过两百亩的大型现代化水产养殖基地。凭借敏锐的投资眼光，他在产业转型期捕捉到了人工智能硬件普及的历史性机遇。作为团队早期的核心资金支持者和联合发起人，他不仅带来了充足的弹药，并将脚踏实地的产业精神注入了团队的 DNA 之中。',
          7562977260203830536: '在深圳华强北有着超过十五年的硬件供应链管理经验，从最初的电子柜台起步，一步步成为了执掌大型工厂的资深老将。熟悉每一条电子街区和无数的上游供应商资源。在龙虾机项目中，他通过极致的成本控制模型、严苛的开模品控和强大的议价能力，是真正实现硬件￥298低价和稳定量产的绝对功臣。',
          6103013520154266131: '在加入团队前是一名极具粉丝影响力的美食博主体验师。由于不具备任何编程基础，他成为了系统最重要的产品试金石。秉承着"把研究美食体验的极致精神平移到用户交互上"的理念，他从非技术人员的"小白"视角出发，重塑了龙虾机交互逻辑，将安装配置压缩到了傻瓜式的即插即用级别。',
          1057247029375163174: '背景独特的跨界技术专家。本硕主修水产专业，后因为极客热情转型计算机科学，并在国内顶尖科技企业积累了多年系统架构开发经历。除了熟悉分布式与高性能服务器开发，他还在私有化大模型底层加速技术上有深度研究。不仅构建了极其稳定和安全的底层代码库，也将传统产业的心流带入了技术管理中。',
          1190726497123018457: '拥有资深的物流供应链背景，曾是国内某生鲜冷链运输公司的大区负责人。在处理极高难度的"送活鲜无耗损"业务中，锻炼出了卓越的项目执行力和抗压品质。现如今全面总体统筹龙虾机的市场运营和用户交付体系，搭建了成熟的仓储和客服支持渠道，只为确保每一台硬件在拆箱时都保持绝对完美状态。'
        }
      },
      office: {
        name: {
          2523401526919458337: '深圳总部',
          7698154074469406943: '西安研发中心',
          2509749225518567691: '中东阿联酋事业部',
          5140565462495736648: '印度市场事业部',
          557397973237979798: '东南亚新加坡事业部',
          7694836850338761832: '美国洛杉矶事业部',
          8385568277984006709: '加拿大事业部',
          2591317981907865232: '非洲事业部'
        },
        addr: {
          7760167259522151188: '深圳市南山区梦海大道5033号卓越前海壹号B座3102',
          2363062531417071049: '西安市雁塔区西电科技园C1902-04',
          4170696109539749863: '阿联酋迪拜国际城INDIGO大厦1010',
          8583634342593658142: '新德里DLF Cyber City,Phase III, Gurugram, Haryana 122002',
          1718480648803023843: '中央商务区（CBD）Raffles Place, Singapore 042629',
          2901702035466146145: '威尔希尔大中心：900 Wilshire Blvd, Los Angeles, CA 90010',
          7044439645341185296: '多伦多 - TD Canada Trust Tower：66 Wellington St W, Toronto, ON M5K 1B9',
          4114913451373149114: '南非约翰内斯堡 桑顿金融区：1 Sandton Dr, Sandton, Johannesburg 3127'
        }
      },
      faq: {
        q: {
          31048810085275149: '我一点都不懂技术，能学会用吗？',
          9175638213719985730: '今天下单，几时能发货？',
          7361949965461290056: '如果机器突然开不了机怎么办？',
          7722257073788805609: '配件如果弄丢了，能单独买吗？'
        },
        a: {
          4859618645131341628: '绝对没问题！我们的产品由团队里最不懂技术的"吃货"打磨用户体验，就是为了让普通人也能零门槛上手。说明书是大白话，包装盒里甚至有保姆级的视频教程二维码，扫一扫立刻看懂。',
          496324727614361583: '由于预定量较大，我们采取按订单顺序分批发货。第一批次预计在下个月中旬陆续发货。我们的COO（前水产冷链骨干）正在全程把控进度，确保机器尽快从华强北出库。',
          1991604189351501565: '别慌！我们对硬件品控有绝对的信心（华强北老炮亲自把关）。如果是质量问题，凭借您的单号，一年内享有"只换不修"服务。您可以直接联系我们的客服退回旧机，我们收到后当天换新寄出。',
          4323628495793051690: '完全可以。所有的配件（如电源线、夹具等）都将在我们的官方商店以成本价上架，几块钱搞定，绝不赚配件钱。'
        }
      },
      privacy: {
        title: '隐私政策',
        updated: '最后更新日期：2025年1月1日',
        s1_title: '一、信息收集',
        s1: '我们在您使用龙虾机产品及相关服务时，可能会收集以下信息：设备激活信息（设备序列号、激活时间）、账户信息（手机号、邮箱）、使用数据（功能使用频率、系统日志）。我们承诺，所有数据收集均遵循最小必要原则。',
        s2_title: '二、信息使用',
        s2: '我们收集的信息仅用于：提供和改善产品服务、处理您的订单和售后请求、发送产品更新和安全通知、进行匿名化的数据分析以改善用户体验。我们不会将您的个人信息出售给任何第三方。',
        s3_title: '三、数据存储与安全',
        s3: '龙虾机的核心设计理念是本地化运行。您在设备上处理的AI任务数据、聊天记录、创作内容等均存储在本地设备中，不会上传至云端服务器。我们采用行业标准的加密技术保护您的账户信息和传输数据。',
        s4_title: '四、第三方服务',
        s4: '龙虾机通过云端API代理调用AI模型服务。在此过程中，您的提示词（Prompt）会经过加密传输至第三方模型提供商。我们已与所有合作的模型提供商签署数据保护协议，确保您的数据不会被用于模型训练或其他用途。',
        s5_title: '五、Cookie 与追踪技术',
        s5: '我们的官方网站可能使用Cookie和类似技术来改善您的浏览体验。您可以通过浏览器设置管理或禁用Cookie。禁用Cookie可能会影响部分网站功能的正常使用。',
        s6_title: '六、用户权利',
        s6: '您有权随时：查询、更正或删除您的个人信息；撤回您的授权同意；注销您的账户；获取您的个人信息副本。如需行使上述权利，请通过本页底部的联系方式与我们联系。',
        s7_title: '七、政策更新',
        s7: '我们可能会不定期更新本隐私政策。更新后的政策将在官方网站上公布，重大变更将通过设备通知或邮件告知您。继续使用我们的产品即表示您同意更新后的隐私政策。',
        disclaimer_title: '免责声明',
        disclaimer: '龙虾机产品通过云端API代理调用第三方AI模型服务，AI生成的内容仅供参考，不构成专业建议。我们不对AI生成内容的准确性、完整性或适用性做任何明示或暗示的保证。用户应自行判断和验证AI输出内容的可靠性。因使用AI生成内容而产生的任何直接或间接损失，本公司不承担责任。本产品不适用于医疗诊断、法律咨询、金融投资等需要专业资质的领域。',
        contact: '如有任何隐私相关问题，请联系我们：support@longxiaji.com'
      },
      terms: {
        title: '服务条款',
        updated: '最后更新日期：2025年1月1日',
        s1_title: '一、服务说明',
        s1: '龙虾机（LongXiaJi AI Station）是由深圳龙虾机科技有限公司提供的AI智能工作站产品。本服务条款适用于您购买和使用龙虾机硬件设备及相关软件服务。使用我们的产品即表示您同意本条款的全部内容。',
        s2_title: '二、用户责任',
        s2: '用户应合法使用本产品，不得利用龙虾机从事任何违反法律法规的活动，包括但不限于：生成违法违规内容、侵犯他人知识产权、传播恶意软件、进行网络攻击等。用户对使用本产品产生的所有内容和行为承担全部责任。',
        s3_title: '三、知识产权',
        s3: '龙虾机的系统软件、固件、品牌标识等知识产权归本公司所有。用户使用龙虾机AI功能生成的内容，其知识产权归属遵循相关法律法规和AI模型提供商的使用条款。用户不得对龙虾机系统进行反编译、逆向工程或未经授权的修改。',
        s4_title: '四、服务变更与中断',
        s4: '我们保留随时修改、暂停或终止部分服务的权利，包括但不限于：系统维护更新、第三方API服务变更、不可抗力因素导致的服务中断。我们将尽力提前通知用户，但不对因服务变更造成的损失承担赔偿责任。',
        s5_title: '五、退换货政策',
        s5: '自收货之日起7天内，在产品包装完好、不影响二次销售的前提下，支持无理由退货，运费由本公司承担。保修期（自购买之日起一年）内，非人为损坏的硬件故障享受免费换新服务。人为损坏、私自拆机或不当使用造成的损坏不在保修范围内。',
        s6_title: '六、责任限制',
        s6: '在法律允许的最大范围内，本公司对因使用或无法使用本产品而产生的任何间接、附带、特殊或惩罚性损害不承担责任。本公司的总赔偿责任不超过用户购买本产品实际支付的金额。',
        disclaimer_title: '免责声明',
        disclaimer: '龙虾机产品整合第三方AI模型服务，AI生成的所有内容（包括但不限于文字、图片、视频、代码）均由算法自动生成，不代表本公司的观点或立场。本公司不对AI生成内容的准确性、合法性、完整性做任何保证。用户应自行对AI生成的内容进行审核和判断，并对使用这些内容承担全部责任。本产品不应被用作医疗、法律、金融等专业领域的决策依据。对于因依赖AI生成内容而造成的任何损失，本公司概不负责。',
        contact: '如有任何服务条款相关问题，请联系我们：support@longxiaji.com'
      },
      error: {
        title: '页面出现错误',
        desc: '发生了未知错误，请刷新页面重试。',
        reload: '刷新页面'
      },
      loading: '加载中...'
    }
  },
  en: {
    translation: {
      nav: {
        logo: 'Longxiaji',
        lang: 'Switch Language',
        home: 'Home',
        product: 'Product',
        skills: 'Skills',
        cases: 'Cases',
        contact: 'About Us',
        news: 'News',
        support: 'Support',
        preorder: 'Preorder Now',
        sitemap: 'Site Map',
        team: 'Founding Team'
      },
      hero: {
        badge: 'The World\'s First Out-of-the-Box AI Safety Workstation',
        title1: 'Bring the AI Assistant to Your Desk',
        title2: 'Don\'t Let It Reside Inside Your PC',
        desc: 'AI needs full Root access to your PC—exposing passwords, chats, and work files. Give it a dedicated machine and stop risking your privacy. Plug and play, set up in 3 minutes.',
        preorder: 'Preorder Now',
        video: 'Watch Demo',
        guarantee1: '7-Day Free Return',
        guarantee2: 'Out-of-the-box Promise'
      },
      footer: {
        rights: '© {{year}} LongXiaJi. All rights reserved.',
        rights_text: 'LongXiaJi. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        wechat: 'WeChat Support',
        contact: 'Business Inquiry',
        scan: 'Scan QR code to add support',
        desc1: 'The world\'s first out-of-the-box AI hardware terminal.',
        desc2: 'Dedicated to breaking technical barriers, allowing everyone to naturally enjoy advanced AI services.',
        sz: 'Designed in Shenzhen · Global Service'
      },
      preorder: {
        title: 'Longxiaji · Preorder Now',
        subtitle: 'The world\'s first out-of-the-box AI safety workstation',
        edition: 'AI Security Workstation · Standard Edition',
        specs: '16GB RAM · 256GB Storage · Pre-installed OpenClaw · Out of the box',
        tag1: 'Independent Hardware',
        tag2: 'Data Isolation',
        tag3: '7x24 Operation',
        tag4: 'Free AI Quota',
        original_price: 'AED 2,980',
        currency: '¥',
        price: '298',
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
        desc2: 'Scan QR code to add WeChat Enterprise, please reply "Longxiaji Preorder"',
        qr_alt: 'WeChat Enterprise QR Code'
      },
      home: {
        sec1: { 
          title: 'You Don\'t Need to Understand PCs, It Understands You', 
          sub: 'Solving the "Can I use AI?" problem. Eliminating all configuration, payment, and registration barriers.',
          f1: { title: 'Zero Threshold', desc: 'Others need coding, env setup—Longxiaji plugs in and works like a microwave.' },
          f2: { title: 'Data Stays Home', desc: 'Trust the cloud with chats and passwords? Longxiaji isolates locally. Pull the plug and it\'s off.' },
          f3: { title: '24/7 Online', desc: 'Helps your emails by day. Runs quant trading strategies by night.' },
          f4: { title: 'Seamless WeChat/DingTalk', desc: 'No new Apps. Scan to bind, and your AI assistant lives in your chats. Speak to it anytime.' },
          f5: { title: 'Transparent Fees', desc: 'One-time hardware fee. API costs are fully transparent. Cheaper than an intern, and never quits.' },
          f6: { title: 'Tech Gift for Elders', desc: 'High-tech that parents can use. Use WeChat to ask for weather or recipes. Huge word-of-mouth.' }
        },
        stats: {
          skills: '12+', skills_label: 'Pre-installed AI Skills',
          setup: '3 min', setup_label: 'Setup to Ready',
          offices: '8', offices_label: 'Global Offices',
          uptime: '24/7', uptime_label: 'Always-on'
        },
        sec2: {
          title: 'Who\'s Using Longxiaji?',
          sub: 'From personal assistants to digital employees, satisfying AI needs everywhere.',
          c1: { title: 'Individuals / Fresh Grads', q: '"A 24hr private AI assistant. Ask directly in WeChat, double the efficiency."', scene: 'Typical: Q&A, Email drafting' },
          c2: { title: 'SMEs / Studios', q: '"Cheaper than an intern\'s transit fee. Never takes leave, never complains, completely secure data."', scene: 'Typical: Auto CS, Copywriting' },
          c3: { title: 'Parents / Elders', q: '"Not just your tool, but an AI gift for parents. They ask about weather via voice—smarter than smart speakers."', scene: 'Typical: Life encyclopedia, Health recipes' }
        },
        sec3: { t1: 'While others learn how to use AI', t2: 'Your Longxiaji is already working for you', sub: 'Limited early birds. Experience zero-barrier desktop AI.', btn1: 'Preorder Early Bird', btn2: 'Contact Enterprise' },
        story: {
          title: 'LongXiaJi: The New Computer for the AI Era',
          intro1: 'Artificial intelligence is changing the world.',
          intro2: 'But the reality is — many people want to use AI, yet are blocked by complex software installation and environment configuration.',
          intro3: 'Python environments, GPU drivers, model downloads, system configuration...',
          intro4: 'AI should not be this complicated.',
          intro5: 'So we did one thing:',
          intro6: 'Put all AI capabilities into one machine.',
          intro7: 'This is LongXiaJi AI Station.',
          intro8: 'An AI smart workstation purpose-built for artificial intelligence.',
          ready_title: 'Power On. Start Using AI.',
          ready1: 'In LongXiaJi, AI software, AI models, and computing power are all ready to go.',
          ready2: 'No complex software to install. No system environment to configure.',
          ready3: 'Just one thing:',
          ready_steps: 'Power on. Click. Start using AI.',
          own_title: 'A Truly Personal AI Device',
          own1: 'LongXiaJi is a standalone AI machine.',
          own2: 'All AI systems run locally on the device.',
          own3: 'This means:',
          own_f1: 'Your data never leaves the device',
          own_f2: 'Your creations are more secure',
          own_f3: 'Your system is more stable',
          own4: 'Your AI belongs only to you.',
          can_title: 'What Can You Do with LongXiaJi',
          can1: 'With LongXiaJi, you can easily access a full range of AI capabilities:',
          can_f1: 'AI Painting',
          can_f2: 'AI Video Generation',
          can_f3: 'AI Digital Humans',
          can_f4: 'AI Voice-over',
          can_f5: 'AI Content Creation',
          can_f6: 'AI E-commerce Asset Production',
          can2: 'Work that used to require a whole team can now be done with one device.',
          can3: 'LongXiaJi is more than a computer.',
          can4: 'It is an AI production center.',
          who_title: 'Who Needs LongXiaJi',
          who1: 'LongXiaJi is being used by more and more people:',
          who_f1: 'Content Creators',
          who_f2: 'E-commerce Merchants',
          who_f3: 'AI Designers',
          who_f4: 'AI Studios',
          who_f5: 'Enterprise Teams',
          who2: 'Because in the AI era, everyone needs new production tools.',
          era_title: 'The New Computer for the AI Era',
          era1: 'In the past, everyone needed a computer.',
          era2: 'In the future, everyone will need an AI computer.',
          era3: 'LongXiaJi is your first AI computer.',
          hw_title: 'Hardware Built for AI',
          hw1: 'LongXiaJi uses a high-performance computing architecture designed for AI tasks:',
          hw_f1: 'High-speed storage system',
          hw_f2: 'Stable thermal design',
          hw_f3: 'Modular expansion capability',
          hw2: 'Making AI run faster and more stable.'
        }
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
          3: { tag: 'Hardware Feedback', title: 'Lacking specific ports, needs better extension', desc: 'Claims out-of-the-box, but I use a vintage monitor and need adapters. Acts well as a server. Network sometimes delays queries. Giving 1 star.' },
          4: { tag: 'Media Ops', title: 'A YouTuber\'s Inspiration Library', desc: 'Fear of creative drain. Longxiaji summarizes rival structures and directly analyzes my gigabytes of local footage independently without uploading. 3x efficiency.' },
          5: { tag: 'Students', title: 'Thesis Inspiration & Daily Tutoring', desc: 'Doing masters in UK. Simply scan to bind, and I can voice-chat for references while reading in the library without messing with VPNs.' },
          6: { tag: 'Remote Dev', title: 'Independent Secure Coding Environment', desc: 'As a digital nomad, coding on Airbnb WiFi feels unsafe. This isolated hardware helps debug and run scripts without consuming my laptop\'s resources.' }
        }
      },
      skills: {
        title: 'Skills Market',
        subtitle: 'A rich AI skill ecosystem. One-click install, ready to use. From daily office work to professional creation, covering all your AI needs.',
        search: 'Search skills...',
        cat: { all: 'All', office: 'Office', life: 'Lifestyle', design: 'Design', ecom: 'E-commerce', dev: 'Dev Tools', finance: 'Quant Finance' },
        empty: 'No skills in this category yet',
        empty_sub: "Can't find a suitable skill? Contact us for custom ones.",
        contact: 'Contact CS',
        free: 'Free',
        installed: 'Installed',
        install: 'Install',
        hot: 'Hot',
        new_tag: 'New',
        skill_count: '{{count}} skills',
        future: 'Skills Market is continuously updated. More advanced skills coming soon. All skills free to unlock, lifetime upgrades.',
        explore: 'Explore More Skills',
        items: {
          1: { title: 'Smart Chat', desc: 'Multi-model switching, accurate translation & summaries, high-quality copywriting', val: '"Better than ChatGPT"', installs: '12,800+', hot: true },
          2: { title: 'Office Assistant', desc: 'Complex Excel formulas, PPT outlines, auto-draft emails in EN/CN', val: '"Just say a word in WeChat"', installs: '9,600+', hot: true },
          3: { title: 'Life Assistant', desc: 'Smart scheduling, weather forecast, daily news digest', val: '"AI morning briefing daily"', installs: '8,200+' },
          4: { title: 'AI Painting', desc: 'Text-to-image, style transfer, batch image processing', val: '"Speak to draw"', installs: '11,400+', hot: true },
          5: { title: 'AI Video Gen', desc: 'Text-to-video, script processing, auto-subtitle generation', val: '"10x efficiency boost"', installs: '7,300+' },
          6: { title: 'Cross-border E-com', desc: 'Multi-language listings, optimization, competitor analysis, review monitoring', val: '"Doubled NA store sales"', installs: '5,800+' },
          7: { title: 'Social Media Ops', desc: 'Multi-platform content, trend tracking, scheduling, analytics', val: '"1 person, 10 accounts"', installs: '6,500+' },
          8: { title: 'Code Assistant', desc: 'Bug debugging, unit test gen, code review, API docs', val: '"Dev efficiency doubled"', installs: '4,200+' },
          9: { title: 'Quant Trading', desc: 'Strategy backtesting, market monitoring, signal alerts, risk assessment', val: '"24/7 auto-monitoring"', installs: '3,100+' },
          10: { title: 'Auto Customer Service', desc: 'Multi-channel, smart Q&A, ticket management, satisfaction analytics', val: '"70% CS cost reduction"', installs: '4,900+' },
          11: { title: 'Legal Consultant', desc: 'Contract review, regulation search, risk alerts, legal document drafting', val: '"Save on legal fees"', installs: '2,800+' },
          12: { title: 'AI Digital Human', desc: 'Virtual anchors, digital avatars, multi-language narration, live commerce', val: '"24hr non-stop streaming"', installs: '6,100+' }
        }
      },
      news: {
        title: 'Latest News',
        sub: 'Learn about Longxiaji\'s latest updates, products, and industry news',
        read: 'Read Full',
        coming_soon: 'Detailed content is under construction, stay tuned!',
        cat: { prod: 'Product Release', sys: 'System Update', ind: 'Industry' },
        items: {
          1: { type: 'Product News', title: 'Longxiaji Stuns Dubai AI Expo: Private Deployment in the Spotlight', summary: 'At the Dubai International AI Expo, Longxiaji\'s \'out-of-the-box, local data\' concept grabbed everyone\'s attention, signing multiple international letters of intent.' },
          2: { type: 'Industry Fast News', title: 'Privacy is SMEs\' Biggest AI Hurdle; Local Models Prove Inevitable', summary: 'Recent reports show 70% of SMEs fear data leakage when using cloud AI. Demand for private hardware like Longxiaji is skyrocketing.' },
          3: { type: 'Official Guide', title: 'Longxiaji Skills Market Surpasses 1000 Presets: Covers All Industries', summary: 'The free built-in Skills Market just hit its 1000th agent preset. Now even complete novices can deploy vertical experts via one click.' }
        }
      },
      contact: {
        title: 'Global Offices',
        sub: 'Global network, ready to provide professional AI hardware support & consulting',
        founders: {
          title: 'The Most Down-to-Earth Cross-Border Founding Team',
          sub: 'Six people from the lobster industry came together for one goal: make AI accessible to everyone with zero threshold.'
        },
        sales: { title: 'Sales Inquiry', sub: 'Enterprise procurement & VIP orders' },
        support: { title: 'Technical Support', sub: '24/7 Professional Engineers' },
        media: { title: 'Media & PR', sub: 'Interviews, partnerships & branding' },
        global: 'Global Offices',
        btn: { email: 'Send Email' },
        offices: { sz: 'Shenzhen (HQ)', bj: 'Beijing', sh: 'Shanghai', cd: 'Chengdu', hz: 'Hangzhou', wh: 'Wuhan', xa: "Xi'an", gz: 'Guangzhou' }
      },
      about: {
        title: 'LongXiaJi: The AI Workstation That Just Works',
        stats: { founded: 'Year Founded', founders: 'Co-founders', offices: 'Global Offices', skills: 'Pre-installed AI Skills' },
        card1_title: 'Ready Out of the Box',
        card2_title: 'Data Security, Physical Isolation',
        card3_title: 'WeChat Integration, Always Available',
        card4_title: '24/7 Non-stop Operation',
        p1: 'As artificial intelligence evolves rapidly, AI is transforming content creation, design production, e-commerce marketing, digital media, and many other industries. More and more people want to harness AI to boost efficiency and create value. Yet in practice, complex software installations, tedious environment configurations, and high technical barriers remain major obstacles for many.',
        p2: 'Against this backdrop, a brand-new AI device was born \u2014 LongXiaJi AI Station.',
        p3: 'LongXiaJi is an AI-powered smart workstation purpose-built for artificial intelligence applications. Through an integrated design of "AI software + high-performance hardware + model platform," it packages complex AI technologies into a single standalone device, letting users start creating and producing with AI tools immediately \u2014 no complicated installation or configuration required.',
        slogan1: 'In short, LongXiaJi has one single goal \u2014 Make AI work, right out of the box.',
        p4: 'Unlike traditional computers, LongXiaJi deeply integrates a wide range of mainstream AI tools and model resources at the system level. Users simply power on, enter the system interface, and immediately access AI painting, AI video generation, AI digital humans, AI content creation, and many more AI capabilities \u2014 no complex software environment setup, no programming skills needed.',
        p5: 'More importantly, LongXiaJi is a standalone AI device. All AI systems and data can run locally, independent of public cloud servers. This design significantly improves system stability while providing stronger guarantees for data security and privacy. For enterprise users and professional creators, a local AI system means a safer, more controllable production environment.',
        p6: 'In terms of applications, LongXiaJi can serve a wide range of industry scenarios. Content creators can quickly generate AI images and video assets; e-commerce merchants can produce product display images and marketing content via AI; designers can leverage AI to boost creative efficiency; and enterprise teams can use LongXiaJi as an internal AI production platform.',
        p7: 'As AI technology moves toward mainstream adoption, artificial intelligence is shifting from a "tech tool" to a new form of productivity infrastructure. In the past, computers changed how people work. In the future, AI devices will redefine digital production.',
        slogan2: 'In the AI era, everyone needs their own AI device.',
        p8: 'LongXiaJi aims to bring AI into ordinary people\u2019s work and lives through a simpler, safer, and more efficient product form \u2014 making AI no longer a tool for the few, but productivity for everyone.',
        p9: 'Going forward, LongXiaJi will continue to refine its AI system platform and model ecosystem, driving AI adoption so that more individual creators, enterprise teams, and entrepreneurs can easily enter the AI era.',
        brand: 'LongXiaJi AI Station',
        tagline: 'AI Smart Workstation.',
        slogan3: 'Make AI work, right out of the box.'
      },
      support: {
        title: 'Help & After-Sales Support',
        sub: 'Comprehensive technical support and guarantee',
        sub1: 'We don\'t just make reliable machines, we provide reassuring after-sales.',
        sub2: 'Buy with confidence, use with comfort, contact us anytime you have questions.',
        mail_cs: 'Email Support',
        mail_time: 'Workdays 9:00 - 21:00',
        feat1: { title: 'Free Shipping', desc: 'COO personally monitors logistics, SF Express / JD free shipping, ensuring intact delivery.' },
        feat2: { title: '7-Day No Reason Return', desc: 'Within 7 days of receipt, as long as packaging is intact & resalable, we cover shipping, full refund.' },
        feat3: { title: '1-Year Replacement Only', desc: 'Non-human damage during warranty? No repair hassles, we send a brand new one.' },
        warr: { title: 'Hardware Warranty', sub: '1-Year Standard Service', '7day': '7 Days', ref: 'Free Return', life: 'Lifetime', tech: 'Online Tech Support' },
        faq: { title: 'Frequently Asked Questions (FAQ)' },
        help: {
          title: 'Can\'t Find Your Answer? Talk to a Human',
          desc: 'Our team are full-time humans, not bots. Any issues, reach out anytime.',
          sub: 'Get dedicated consultant support',
          time: 'Workdays 9:00 - 18:00'
        }
      },
      notfound: {
        title: 'Page Not Found',
        desc: 'The page you visited has flown away, or never existed.',
        back: 'Back to Home'
      },
      team: {
        role: {
          4550575672377453511: 'Chef',
          2378909925348224061: 'Shrimp Farmer',
          1530984284887779511: 'Huaqiangbei Manager',
          4632996498518691208: 'Foodie',
          5869161594454019340: 'Programmer',
          4310680668521722572: 'Courier'
        },
        title: {
          1976178603107875118: 'CEO \u00b7 Product & Strategy',
          1648467525086682513: 'Angel Investor',
          3039685758511568376: 'Hardware & Supply Chain',
          7591439887173719618: 'Chief Experience Officer (UX)',
          1632399377708228028: 'CTO \u00b7 Tech Arch',
          1935043898737891844: 'COO \u00b7 Ops & Delivery'
        },
        quote: {
          8657062610553757863: 'When the timing is right, every ingredient speaks.',
          1119697206308917872: 'Patience raised in ponds applies everywhere.',
          6158412454155482297: 'In Huaqiangbei, \'impossible\' just means bad sourcing.',
          2078131862578899259: 'Tongues don\'t lie about taste. Fingers don\'t lie about UX.',
          9214925180429021226: 'From shrimp ponds to codebases, both need patience.',
          5431610284356572038: 'Whatever is delivered, it must arrive perfect.'
        },
        desc: {
          8252663906765583088: 'A veteran of the traditional aquatic industry for over a decade, he ran a chain of lobster restaurants. With sharp instincts for business models and user needs, he brought his exacting culinary standards into hardware R&D. He leads Longxiaji\'s overall strategic direction, dedicated to making cutting-edge AI truly accessible to every household.',
          7636435216432888677: 'Grew up alongside water pipes and shrimp ponds, once managing over 200 acres of modern aquaculture. With a keen investment eye, he seized the historic opportunity of AI hardware mass adoption. As the team\'s early core funder and co-founder, he not only provided ample resources but also infused the team\'s DNA with grounded industrial spirit.',
          7562977260203830536: 'Over fifteen years of hardware supply chain management in Shenzhen\'s Huaqiangbei. Starting from electronic stalls, he became a seasoned veteran running large factories. His extreme cost control, strict mold quality, and strong bargaining power are the key to achieving the \u00a5298 price point and stable mass production.',
          6103013520154266131: 'Before joining, he was an influential food blogger and experience tester. Having zero programming background, he became the product\'s most important litmus test. From a non-technical "newbie" perspective, he reshaped Longxiaji\'s interaction logic to fool-proof plug-and-play level.',
          1057247029375163174: 'A uniquely cross-disciplinary tech expert. Majored in aquaculture for both bachelor\'s and master\'s, then pivoted to CS out of geek passion, accumulating years of system architecture experience at top tech companies. He built an extremely stable and secure codebase, bringing traditional industry flow into technical management.',
          1190726497123018457: 'With a senior logistics supply chain background, formerly a regional head at a fresh cold-chain transport company. The extreme challenge of "delivering live seafood without loss" forged outstanding execution and resilience. Now overseeing Longxiaji\'s market operations and delivery systems, ensuring every unit arrives in perfect condition.'
        }
      },
      office: {
        name: {
          2523401526919458337: 'Shenzhen HQ',
          7698154074469406943: 'Xi\'an R&D Center',
          2509749225518567691: 'UAE Division',
          5140565462495736648: 'India Division',
          557397973237979798: 'Singapore Division',
          7694836850338761832: 'LA Division',
          8385568277984006709: 'Canada Division',
          2591317981907865232: 'Africa Division'
        },
        addr: {
          7760167259522151188: 'B-3102 Excellence Qianhai, Nanshan, Shenzhen',
          2363062531417071049: 'C1902-04 Xidian Tech Park, Yanta, Xi\'an',
          4170696109539749863: 'Indigo Bldg 1010, International City, Dubai, UAE',
          8583634342593658142: 'DLF Cyber City, Phase III, Gurugram, India',
          1718480648803023843: 'CBD Raffles Place, Singapore 042629',
          2901702035466146145: '900 Wilshire Blvd, LA, CA 90010 (USA)',
          7044439645341185296: 'TD Canada Trust Tower, 66 Wellington St W, Toronto',
          4114913451373149114: '1 Sandton Dr, Sandton, Johannesburg 3127'
        }
      },
      faq: {
        q: {
          31048810085275149: 'I know zero tech, can I use it?',
          9175638213719985730: 'If I order today, when will it ship?',
          7361949965461290056: 'What if the machine won\'t boot?',
          7722257073788805609: 'Can I buy replacement accessories if lost?'
        },
        a: {
          4859618645131341628: 'Absolutely! Guided by our foodie, it\'s designed for absolute beginners. Scan the QR code for a video tutorial.',
          496324727614361583: 'Due to high preorder volume, we ship in order-based batches. First batch is estimated mid next month. Our COO (former cold-chain logistics veteran) is overseeing the entire process to ensure timely dispatch from Huaqiangbei.',
          1991604189351501565: 'Don\'t panic! 1-year \'replace-only\' policy for any quality issues. Just send it back and we\'ll ship a new one same day.',
          4323628495793051690: 'Yes! All accessories sold at cost in our official store. No markup.'
        }
      },
      privacy: {
        title: 'Privacy Policy',
        updated: 'Last updated: January 1, 2025',
        s1_title: '1. Information Collection',
        s1: 'When you use LongXiaJi products and related services, we may collect the following information: device activation data (serial number, activation time), account information (phone number, email), and usage data (feature usage frequency, system logs). We are committed to the principle of minimum necessary data collection.',
        s2_title: '2. Use of Information',
        s2: 'The information we collect is used solely for: providing and improving our products and services, processing your orders and after-sales requests, sending product updates and security notifications, and conducting anonymized data analysis to improve user experience. We will never sell your personal information to any third party.',
        s3_title: '3. Data Storage & Security',
        s3: 'The core design philosophy of LongXiaJi is local operation. AI task data, chat records, and creative content processed on your device are stored locally and will not be uploaded to cloud servers. We use industry-standard encryption to protect your account information and data in transit.',
        s4_title: '4. Third-Party Services',
        s4: 'LongXiaJi calls AI model services through cloud API proxies. During this process, your prompts are encrypted and transmitted to third-party model providers. We have signed data protection agreements with all partner model providers to ensure your data will not be used for model training or other purposes.',
        s5_title: '5. Cookies & Tracking',
        s5: 'Our official website may use cookies and similar technologies to improve your browsing experience. You can manage or disable cookies through your browser settings. Disabling cookies may affect certain website functionalities.',
        s6_title: '6. User Rights',
        s6: 'You have the right to: access, correct, or delete your personal information; withdraw your consent; cancel your account; and obtain a copy of your personal data. To exercise these rights, please contact us using the information at the bottom of this page.',
        s7_title: '7. Policy Updates',
        s7: 'We may update this Privacy Policy from time to time. Updated policies will be published on our official website, and significant changes will be communicated via device notifications or email. Continued use of our products constitutes acceptance of the updated Privacy Policy.',
        disclaimer_title: 'Disclaimer',
        disclaimer: 'LongXiaJi products call third-party AI model services via cloud API proxies. AI-generated content is for reference only and does not constitute professional advice. We make no express or implied warranties regarding the accuracy, completeness, or suitability of AI-generated content. Users should independently verify the reliability of AI outputs. The company assumes no liability for any direct or indirect losses arising from the use of AI-generated content. This product is not intended for use in fields requiring professional qualifications such as medical diagnosis, legal consultation, or financial investment.',
        contact: 'For any privacy-related questions, please contact us at: support@longxiaji.com'
      },
      terms: {
        title: 'Terms of Service',
        updated: 'Last updated: January 1, 2025',
        s1_title: '1. Service Description',
        s1: 'LongXiaJi AI Station is an AI smart workstation product provided by Shenzhen LongXiaJi Technology Co., Ltd. These Terms of Service apply to your purchase and use of LongXiaJi hardware devices and related software services. By using our products, you agree to the entirety of these terms.',
        s2_title: '2. User Responsibilities',
        s2: 'Users shall use this product lawfully and shall not use LongXiaJi for any activities that violate laws or regulations, including but not limited to: generating illegal content, infringing on intellectual property rights, distributing malware, or conducting cyberattacks. Users bear full responsibility for all content and actions generated through use of this product.',
        s3_title: '3. Intellectual Property',
        s3: 'The intellectual property rights of LongXiaJi system software, firmware, and brand identifiers belong to the company. The intellectual property of content generated using LongXiaJi AI features is governed by applicable laws and regulations and the terms of use of the AI model providers. Users shall not decompile, reverse-engineer, or make unauthorized modifications to the LongXiaJi system.',
        s4_title: '4. Service Changes & Interruptions',
        s4: 'We reserve the right to modify, suspend, or terminate certain services at any time, including but not limited to: system maintenance and updates, changes to third-party API services, and service interruptions caused by force majeure. We will make reasonable efforts to notify users in advance but shall not be liable for losses caused by service changes.',
        s5_title: '5. Return & Exchange Policy',
        s5: 'Within 7 days of receipt, returns are accepted if the product packaging is intact and does not affect resale, with shipping costs covered by the company. During the warranty period (one year from date of purchase), hardware defects not caused by human damage are eligible for free replacement. Damage caused by human factors, unauthorized disassembly, or improper use is not covered under warranty.',
        s6_title: '6. Limitation of Liability',
        s6: 'To the maximum extent permitted by law, the company shall not be liable for any indirect, incidental, special, or punitive damages arising from the use or inability to use this product. The total liability of the company shall not exceed the amount actually paid by the user for the purchase of this product.',
        disclaimer_title: 'Disclaimer',
        disclaimer: 'LongXiaJi products integrate third-party AI model services. All AI-generated content (including but not limited to text, images, videos, and code) is automatically generated by algorithms and does not represent the views or positions of the company. The company makes no guarantees regarding the accuracy, legality, or completeness of AI-generated content. Users should independently review and evaluate AI-generated content and bear full responsibility for its use. This product should not be used as a basis for decision-making in professional fields such as medicine, law, or finance. The company assumes no liability for any losses arising from reliance on AI-generated content.',
        contact: 'For any questions regarding these Terms of Service, please contact us at: support@longxiaji.com'
      },
      error: {
        title: 'Something Went Wrong',
        desc: 'An unknown error occurred. Please refresh the page.',
        reload: 'Refresh Page'
      },
      loading: 'Loading...'
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
