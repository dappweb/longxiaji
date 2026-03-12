import os
import re

def replace_in_file(path, pairs):
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "useTranslation" not in content:
        content = "import { useTranslation } from 'react-i18next';\n" + content
        
    comp_match = re.search(r"export default function (\w+)\(\)\s*{", content)
    if comp_match and "const { t } = useTranslation();" not in content:
        insert_pos = comp_match.end()
        content = content[:insert_pos] + "\n  const { t } = useTranslation();" + content[insert_pos:]

    for old, new in pairs:
        content = content.replace(old, new)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)


product_pairs = [
    ('>使用流程<', '>{t("product.nav1", "使用流程")}<'),
    ('>硬件参数<', '>{t("product.nav2", "硬件参数")}<'),
    ('>产品介绍，全程不超过 3 分钟<', '>{t("product.title1", "产品介绍，全程不超过 3 分钟")}<'),
    ('>不需要任何技术背景，收到机器后跟着引导界面走完三步，立即体验 AI。<', '>{t("product.sub1", "不需要任何技术背景，收到机器后跟着引导界面走完三步，立即体验 AI。")}<'),
    ('title="连网 + 激活"', 'title={t("product.step1.title", "连网 + 激活")}'),
    ('description="插网线或连 WiFi，屏幕显示二维码，手机扫码自动激活。激活即送初始 API 额度，足够体验数天。"', 'description={t("product.step1.desc", "插网线或连 WiFi，屏幕显示二维码，手机扫码自动激活。激活即送初始 API 额度，足够体验数天。")}'),
    ('title="绑定 IM 账号"', 'title={t("product.step2.title", "绑定 IM 账号")}'),
    ('description="支持微信、钉钉、飞书、QQ。点击图标扫码授权，龙虾助手自动出现在你的会话列表中。"', 'description={t("product.step2.desc", "支持微信、钉钉、飞书、QQ。点击图标扫码授权，龙虾助手自动出现在你的会话列表中。")}'),
    ('title="体验引导"', 'title={t("product.step3.title", "体验引导")}'),
    ('description="在微信中发送第一条消息给助手，自动推送 3 个开箱任务示例，点击即可执行，秒速上手。"', 'description={t("product.step3.desc", "在微信中发送第一条消息给助手，自动推送 3 个开箱任务示例，点击即可执行，秒速上手。")}'),
    ('>纯云端代理架构<br/>本地零推理<', '>{t("product.arch.title", "纯云端代理架构")}<br/>{t("product.arch.subtitle", "本地零推理")}<'),
    ('>龙虾机不做本地模型推理。所有大模型调用均通过云端 API 聚合层完成，本地硬件专注于运行 OpenClaw 系统、任务调度和存储用户私密数据。<', '>{t("product.arch.desc", "龙虾机不做本地模型推理。所有大模型调用均通过云端 API 聚合层完成，本地硬件专注于运行 OpenClaw 系统、任务调度和存储用户私密数据。")}<'),
    ('>16 GB 内存<', '>{t("product.spec1.title", "16 GB 内存")}<'),
    ('>足够支撑多任务并发与多个 IM 客户端同时在线，运行流畅不卡顿。<', '>{t("product.spec1.desc", "足够支撑多任务并发与多个 IM 客户端同时在线，运行流畅不卡顿。")}<'),
    ('>256 GB / 512 GB 存储<', '>{t("product.spec2.title", "256 GB / 512 GB 存储")}<'),
    ('>系统约占 30-40 GB，剩余空间用于存储你的私密文件、聊天记录和 Skills 数据。支持云盘扩容。<', '>{t("product.spec2.desc", "系统约占 30-40 GB，剩余空间用于存储你的私密文件、聊天记录和 Skills 数据。支持云盘扩容。")}<'),
    ('>有线 + WiFi 双网络<', '>{t("product.spec3.title", "有线 + WiFi 双网络")}<'),
    ('>云端代理架构下网络连接是核心依赖，提供稳定可靠的网络接入方案。<', '>{t("product.spec3.desc", "云端代理架构下网络连接是核心依赖，提供稳定可靠的网络接入方案。")}<'),
    ('alt="龙虾机实拍"', 'alt={t("product.img_alt", "龙虾机实拍")}'),
    ('>≤ Mac mini 尺寸<', '>{t("product.size", "≤ Mac mini 尺寸")}<'),
    ('>低功耗<', '>{t("product.power", "低功耗")}<'),
    ('>立即预定<', '>{t("product.preorder", "立即预定")}<')
]
replace_in_file("src/pages/Product.tsx", product_pairs)

cases_pairs = [
    ('>他们和你一样，也是从“不懂”开始的<', '>{t("cases.title1", "他们和你一样，也是从“不懂”开始的")}<'),
    ('>各行各业的普通人，正在使用龙虾机改变工作与生活。四个典型应用场景真实反馈。<', '>{t("cases.sub1", "各行各业的普通人，正在使用龙虾机改变工作与生活。四个典型应用场景真实反馈。")}<'),
    ('>开启你的AI专属助手<', '>{t("cases.start", "开启你的AI专属助手")}<'),
    ('{expanded ? \'收起\' : \'阅读全文\'}', '{expanded ? t("cases.collapse", "收起") : t("cases.readmore", "阅读全文")}'),
    ("{item.tag}", "{t(`cases.items.${item.id}.tag`, item.tag)}"),
    ('"{item.title}"', '"{t(`cases.items.${item.id}.title`, item.title)}"'),
    ('{item.description}', '{t(`cases.items.${item.id}.desc`, item.description)}')
]
replace_in_file("src/pages/Cases.tsx", cases_pairs)

skills_pairs = [
    ("['全部', '效率办公', '生活娱乐', '创作设计']", "[t('skills.cat.all', '全部'), t('skills.cat.office', '效率办公'), t('skills.cat.life', '生活娱乐'), t('skills.cat.design', '创作设计')]"),
    ("activeTab === '全部'", "activeTab === t('skills.cat.all', '全部')"),
    ("useState('全部')", "useState(t('skills.cat.all', '全部'))"),
    ('>预装 Skills，开箱即用<', '>{t("skills.title", "预装 Skills，开箱即用")}<'),
    ('>硬件是入口，Skills 是灵魂。满足从日常闲聊到深度办公的全方位需求。<', '>{t("skills.subtitle", "硬件是入口，Skills 是灵魂。满足从日常闲聊到深度办公的全方位需求。")}<'),
    ('>暂无该分类技能<', '>{t("skills.empty", "暂无该分类技能")}<'),
    ('>未能找到合适的技能？添加客服为您定制<', '>{t("skills.empty_sub", "未能找到合适的技能？添加客服为您定制")}<'),
    ('>联系专属客服 <', '>{t("skills.contact", "联系专属客服")} <'),
    ('>未来更将开放 Skills 市场，支持量化交易、电商运营等高级技能服务，免费解锁，持续升级。<', '>{t("skills.future", "未来更将开放 Skills 市场，支持量化交易、电商运营等高级技能服务，免费解锁，持续升级。")}<'),
    ('>探索更多 Skills <', '>{t("skills.explore", "探索更多 Skills")} <'),
    ('>立即预定<', '>{t("product.preorder", "立即预定")}<'),
    ("category: '效率办公'", "category: t('skills.cat.office', '效率办公')"),
    ("category: '生活娱乐'", "category: t('skills.cat.life', '生活娱乐')"),
    ("category: '创作设计'", "category: t('skills.cat.design', '创作设计')"),
    ("title: \"智能对话\"", "title: t('skills.items.1.title', '智能对话')"),
    ("features: ['多模型一键切换 (GPT, Claude, 通义千问等)', '精准翻译与长文摘要', '高质量文案写作']", "features: [t('skills.items.1.f1', '多模型一键切换 (GPT, Claude, 通义千问等)'), t('skills.items.1.f2', '精准翻译与长文摘要'), t('skills.items.1.f3', '高质量文案写作')]"),
    ("value: \"“比 ChatGPT 还方便，反应更迅速”\"", "value: t('skills.items.1.val', '“比 ChatGPT 还方便，反应更迅速”')"),
    ("title: \"办公助手\"", "title: t('skills.items.2.title', '办公助手')"),
    ("features: ['Excel 复杂公式生成', 'PPT 大纲一键生成', '中英文邮件自动起草']", "features: [t('skills.items.2.f1', 'Excel 复杂公式生成'), t('skills.items.2.f2', 'PPT 大纲一键生成'), t('skills.items.2.f3', '中英文邮件自动起草')]"),
    ("value: \"“在微信里说一句就能用”\"", "value: t('skills.items.2.val', '“在微信里说一句就能用”')"),
    ("title: \"生活工具\"", "title: t('skills.items.3.title', '生活工具')"),
    ("features: ['智能日程管理与提醒', '个性化天气预报', '每日新闻摘要推送']", "features: [t('skills.items.3.f1', '智能日程管理与提醒'), t('skills.items.3.f2', '个性化天气预报'), t('skills.items.3.f3', '每日新闻摘要推送')]"),
    ("value: \"“每天早上收到专属 AI 早报”\"", "value: t('skills.items.3.val', '“每天早上收到专属 AI 早报”')"),
    ("title: \"图片/视频处理\"", "title: t('skills.items.4.title', '图片/视频处理')"),
    ("features: ['精准图片识别与分析', '一句话文字转图', '基础视频脚本处理']", "features: [t('skills.items.4.f1', '精准图片识别与分析'), t('skills.items.4.f2', '一句话文字转图'), t('skills.items.4.f3', '基础视频脚本处理')]"),
    ("value: \"“拍照片就能翻译，一句话出图”\"", "value: t('skills.items.4.val', '“拍照片就能翻译，一句话出图”')")
]
replace_in_file("src/pages/Skills.tsx", skills_pairs)
