import os

def replace_in_file(path, pairs):
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    import re
    comp_match = re.search(r"export default function (\w+)\(\)\s*{", content)
    if comp_match and "const { t } = useTranslation();" not in content:
        insert_pos = comp_match.end()
        content = content[:insert_pos] + "\n  const { t } = useTranslation();" + content[insert_pos:]
        if "useTranslation" not in content[:insert_pos]:
            content = "import { useTranslation } from 'react-i18next';\n" + content

    for old, new in pairs:
        content = content.replace(old, new)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

home_pairs = [
    ('>不需要你懂电脑，它懂你<', '>{t("home.sec1.title", "不需要你懂电脑，它懂你")}<'),
    ('>解决“用不用得上 AI”的问题。把配置、支付、注册等门槛全部消除。<', '>{t("home.sec1.sub", "解决“用不用得上 AI”的问题。把配置、支付、注册等门槛全部消除。")}<'),
    ('title="零门槛开机即用"', 'title={t("home.sec1.f1.title", "零门槛开机即用")}'),
    ('description="别人用 AI 需要打代码、配置环境、安装包——龙虾机插电开机就能用，和用微波炉一样简单。"', 'description={t("home.sec1.f1.desc", "别人用 AI 需要打代码、配置环境、安装包——龙虾机插电开机就能用，和用微波炉一样简单。")}'),
    ('title="数据只在你家里"', 'title={t("home.sec1.f2.title", "数据只在你家里")}'),
    ('description="你的聊天记录、银行密码、工作文件放心交给云端吗？龙虾机物理隔离，数据不出家门，拔电即断网。"', 'description={t("home.sec1.f2.desc", "你的聊天记录、银行密码、工作文件放心交给云端吗？龙虾机物理隔离，数据不出家门，拔电即断网。")}'),
    ('title="7×24 永不下班"', 'title={t("home.sec1.f3.title", "7×24 永不下班")}'),
    ('description="白天你上班，它在家帮你整理邮件、撰写报告。晚上你睡觉，它还在跑量化交易策略。"', 'description={t("home.sec1.f3.desc", "白天你上班，它在家帮你整理邮件、撰写报告。晚上你睡觉，它还在跑量化交易策略。")}'),
    ('title="无缝接入微信/钉钉"', 'title={t("home.sec1.f4.title", "无缝接入微信/钉钉")}'),
    ('description="不需要下载新 App，扫码绑定后，AI 助手直接出现在你的微信聊天列表中，随时随地发语音使唤它。"', 'description={t("home.sec1.f4.desc", "不需要下载新 App，扫码绑定后，AI 助手直接出现在你的微信聊天列表中，随时随地发语音使唤它。")}'),
    ('title="费用透明可控"', 'title={t("home.sec1.f5.title", "费用透明可控")}'),
    ('description="一次买断硬件，API 费用透明可控。比请一个实习生还划算，且不会请假离职。"', 'description={t("home.sec1.f5.desc", "一次买断硬件，API 费用透明可控。比请一个实习生还划算，且不会请假离职。")}'),
    ('title="送长辈的科技礼"', 'title={t("home.sec1.f6.title", "送长辈的科技礼")}'),
    ('description="父母也能用的高科技。用微信问天气、查菜谱、读新闻摘要，复购率和口碑传播极强。"', 'description={t("home.sec1.f6.desc", "父母也能用的高科技。用微信问天气、查菜谱、读新闻摘要，复购率和口碑传播极强。")}'),

    ('>谁在用龙虾机？<', '>{t("home.sec2.title", "谁在用龙虾机？")}<'),
    ('>从个人助理到企业数字员工，满足不同场景的 AI 需求。<', '>{t("home.sec2.sub", "从个人助理到企业数字员工，满足不同场景的 AI 需求。")}<'),
    ('>个人用户 / 职场新人<', '>{t("home.sec2.c1.title", "个人用户 / 职场新人")}<'),
    ('>“拥有一个 24 小时在线的私人 AI 助理。微信里直接问，效率翻倍。”<', '>{t("home.sec2.c1.q", "“拥有一个 24 小时在线的私人 AI 助理。微信里直接问，效率翻倍。”")}<'),
    ('>典型场景：日常问答、邮件起草<', '>{t("home.sec2.c1.scene", "典型场景：日常问答、邮件起草")}<'),
    ('>中小企业 / 工作室<', '>{t("home.sec2.c2.title", "中小企业 / 工作室")}<'),
    ('>“一台龙虾机的月费，还不到一个实习生的交通补贴。但它不会请假、不会离职、不会累，数据还绝对安全。”<', '>{t("home.sec2.c2.q", "“一台龙虾机的月费，还不到一个实习生的交通补贴。但它不会请假、不会离职、不会累，数据还绝对安全。”")}<'),
    ('>典型场景：客服自动回复、文案生成<', '>{t("home.sec2.c2.scene", "典型场景：客服自动回复、文案生成")}<'),
    ('>长辈 / 父母<', '>{t("home.sec2.c3.title", "长辈 / 父母")}<'),
    ('>“它不仅仅是你的工具，也是给爸妈的一份 AI 礼物。父母用微信语音问天气、查菜谱，比智能音箱聪明多了。”<', '>{t("home.sec2.c3.q", "“它不仅仅是你的工具，也是给爸妈的一份 AI 礼物。父母用微信语音问天气、查菜谱，比智能音箱聪明多了。”")}<'),
    ('>典型场景：生活百科、健康食谱<', '>{t("home.sec2.c3.scene", "典型场景：生活百科、健康食谱")}<'),

    ('>别人还在学怎么用 AI<br/>你的龙虾机已经在帮你干活了<', '>{t("home.sec3.t1", "别人还在学怎么用 AI")}<br/>{t("home.sec3.t2", "你的龙虾机已经在帮你干活了")}<'),
    ('>首批限量发售，抢先体验零门槛的桌面 AI 助理。<', '>{t("home.sec3.sub", "首批限量发售，抢先体验零门槛的桌面 AI 助理。")}<'),
    ('>立即预定抢首发<', '>{t("home.sec3.btn1", "立即预定抢首发")}<'),
    ('>联系企业采购<', '>{t("home.sec3.btn2", "联系企业采购")}<')
]
replace_in_file("src/pages/Home.tsx", home_pairs)

news_pairs = [
    ('>最新资讯<', '>{t("news.title", "最新资讯")}<'),
    ('>了解龙虾机的最新动态、产品更新与行业新闻<', '>{t("news.sub", "了解龙虾机的最新动态、产品更新与行业新闻")}<'),
    ('>阅读全文 <', '>{t("news.read", "阅读全文")} <'),
    ("title: '龙虾机标准版正式发布：把 AI 助理请回桌面'", "title: t('news.items.1.title', '龙虾机标准版正式发布：把 AI 助理请回桌面')"),
    ("excerpt: '全球首款开机即用的 AI 安全工作站今日起开放全球预定，重新定义个人 AI 硬件。'", "excerpt: t('news.items.1.abstract', '全球首款开机即用的 AI 安全工作站今日起开放全球预定，重新定义个人 AI 硬件。')"),
    ("category: '产品发布'", "category: t('news.cat.prod', '产品发布')"),
    ("title: 'OpenClaw 系统更新：全面支持微信/钉钉无缝接入'", "title: t('news.items.2.title', 'OpenClaw 系统更新：全面支持微信/钉钉无缝接入')"),
    ("excerpt: '最新版本系统带来革命性交互升级，用户现在可以直接在常用通讯软件中调用龙虾机算力。'", "excerpt: t('news.items.2.abstract', '最新版本系统带来革命性交互升级，用户现在可以直接在常用通讯软件中调用龙虾机算力。')"),
    ("category: '系统更新'", "category: t('news.cat.sys', '系统更新')"),
    ("title: '隐私至上：为什么我们需要一台独立的 AI 工作站？'", "title: t('news.items.3.title', '隐私至上：为什么我们需要一台独立的 AI 工作站？')"),
    ("excerpt: '深入解析龙虾机的防数据泄露架构，以及云端大模型时代的企业数据安全解决方案。'", "excerpt: t('news.items.3.abstract', '深入解析龙虾机的防数据泄露架构，以及云端大模型时代的企业数据安全解决方案。')"),
    ("category: '行业观察'", "category: t('news.cat.ind', '行业观察')")
]
replace_in_file("src/pages/News.tsx", news_pairs)

contact_pairs = [
    ('>联系我们<', '>{t("contact.title", "联系我们")}<'),
    ('>全球化的服务网络，随时为您提供支持<', '>{t("contact.sub", "全球化的服务网络，随时为您提供支持")}<'),
    ('>销售咨询<', '>{t("contact.sales.title", "销售咨询")}<'),
    ('>大客户采购与企业定制专属通道<', '>{t("contact.sales.sub", "大客户采购与企业定制专属通道")}<'),
    ('>技术支持<', '>{t("contact.support.title", "技术支持")}<'),
    ('>7×24小时专业工程师在线解答<', '>{t("contact.support.sub", "7×24小时专业工程师在线解答")}<'),
    ('>媒体合作<', '>{t("contact.media.title", "媒体合作")}<'),
    ('>媒体采访、品牌合作与公关事宜<', '>{t("contact.media.sub", "媒体采访、品牌合作与公关事宜")}<'),
    ('>全球办公室<', '>{t("contact.global", "全球办公室")}<'),
    ('>发送邮件<', '>{t("contact.btn.email", "发送邮件")}<'),
    ('city: "深圳 (总部)"', 'city: t("contact.offices.sz", "深圳 (总部)")'),
    ('city: "北京"', 'city: t("contact.offices.bj", "北京")'),
    ('city: "上海"', 'city: t("contact.offices.sh", "上海")'),
    ('city: "成都"', 'city: t("contact.offices.cd", "成都")'),
    ('city: "杭州"', 'city: t("contact.offices.hz", "杭州")'),
    ('city: "武汉"', 'city: t("contact.offices.wh", "武汉")'),
    ('city: "西安"', 'city: t("contact.offices.xa", "西安")'),
    ('city: "广州"', 'city: t("contact.offices.gz", "广州")')
]
replace_in_file("src/pages/Contact.tsx", contact_pairs)

support_pairs = [
    ('>售后支持<', '>{t("support.title", "售后支持")}<'),
    ('>我们为您提供全方位的技术支持与保障<', '>{t("support.sub", "我们为您提供全方位的技术支持与保障")}<'),
    ('>硬件质保<', '>{t("support.warr.title", "硬件质保")}<'),
    ('>1年标准保修服务<', '>{t("support.warr.sub", "1年标准保修服务")}<'),
    ('>7天<', '>{t("support.warr.7day", "7天")}<'),
    ('>无理由退换货<', '>{t("support.warr.ref", "无理由退换货")}<'),
    ('>终身<', '>{t("support.warr.life", "终身")}<'),
    ('>在线技术支持<', '>{t("support.warr.tech", "在线技术支持")}<'),
    ('>常见问题<', '>{t("support.faq.title", "常见问题")}<'),
    ('question: "如何激活设备？"', 'question: t("support.faq.1.q", "如何激活设备？")'),
    ('answer: "收到机器后，插上电源并连接网线（或参考说明书连接WiFi）。等待指示灯常亮后，使用手机扫描机身二维码即可完成激活绑定。"', 'answer: t("support.faq.1.a", "收到机器后，插上电源并连接网线（或参考说明书连接WiFi）。等待指示灯常亮后，使用手机扫描机身二维码即可完成激活绑定。")'),
    ('question: "可以直接用我现在的微信账号发消息吗？"', 'question: t("support.faq.2.q", "可以直接用我现在的微信账号发消息吗？")'),
    ('answer: "可以。龙虾机采用创新的安全代理架构，扫码授权后，它会作为一个特殊联系人或嵌入现有会话，无需下载新APP。"', 'answer: t("support.faq.2.a", "可以。龙虾机采用创新的安全代理架构，扫码授权后，它会作为一个特殊联系人或嵌入现有会话，无需下载新APP。")'),
    ('question: "数据真的安全吗？"', 'question: t("support.faq.3.q", "数据真的安全吗？")'),
    ('answer: "绝对安全。所有个人文件分析、聊天记录处理均在本地硬件完成脱敏和向量化，只有必要特征才会通过加密通道请求云端API。拔掉网线，没有任何人能访问你的数据。"', 'answer: t("support.faq.3.a", "绝对安全。所有个人文件分析、聊天记录处理均在本地硬件完成脱敏和向量化，只有必要特征才会通过加密通道请求云端API。拔掉网线，没有任何人能访问你的数据。")'),
    ('>需要更多帮助？<', '>{t("support.help.title", "需要更多帮助？")}<'),
    ('>扫码添加专属客服<', '>{t("support.help.sub", "获取专人顾问支持")}<'), # fixed the WeChat part we modified earlier
    ('>工作日 9:00 - 18:00<', '>{t("support.help.time", "工作日 9:00 - 18:00")}<')
]
replace_in_file("src/pages/Support.tsx", support_pairs)

