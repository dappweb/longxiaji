import os
import re

files_to_update = {
    'src/components/Layout.tsx': [
        ('>龙虾机</span>', '>{t(\'nav.logo\', \'龙虾机\')}</span>'),
        ('切换语言</span>', '{t(\'nav.lang\', \'切换语言\')}</span>'),
        ('alt="企业微信二维码"', 'alt="WeCom QR Code"'),
    ],
    'src/pages/Product.tsx': [
        ('不需要任何技术背景，收到机器后跟着引导界面走完三步，立即体验 AI。', '{t(\'product.sub1\')}'),
        ('龙虾机不做本地模型推理。所有大模型调用均通过云端 API 聚合层完成，本地硬件专注于运行 OpenClaw 系统、任务调度和存储用户私密数据。', '{t(\'product.arch.desc\')}'),
        ('开启你的AI专属助手', '{t(\'product.preorder\')}'),
        ('立即预定', '{t(\'product.preorder\')}'),
    ],
    'src/pages/Skills.tsx': [
        ('硬件是入口，Skills 是灵魂。满足从日常闲聊到深度办公的全方位需求。', '{t(\'skills.subtitle\')}'),
        ('联系专属客服', '{t(\'skills.contact\')}'),
        ('探索更多 Skills', '{t(\'skills.explore\')}'),
        ('立即预定', '{t(\'product.preorder\')}'),
    ],
    'src/pages/Contact.tsx': [
        ('最接地气的跨界创始团队', '{t(\'contact.founders.title\')}'),
        ('六个从龙虾产业链走出来的人，为了同一个目标走到一起：让所有人都能零门槛用上 AI。', '{t(\'contact.founders.sub\')}'),
        ('联系我们 · 全球分布', '{t(\'contact.title\', \'联系我们 · 全球分布\')}'),
        ('业务覆盖全球，随时就近为您提供最专业的 AI 硬件支持与咨询服务', '{t(\'contact.sub\', \'业务覆盖全球，随时就近为您提供最专业的 AI 硬件支持与咨询服务\')}'),
        ('立即预定', '{t(\'product.preorder\', \'立即预定\')}'),
    ],
    'src/pages/News.tsx': [
        ('新闻资讯</h1>', '{t(\'news.title\')}</h1>'),
        ('获取龙虾机最新产品动态、行业新闻发布及官方公告。</p>', '{t(\'news.sub\')}</p>'),
        ('阅读全文', '{t(\'news.read\')}'),
        ('立即抢先预定', '{t(\'product.preorder\')}'),
    ],
    'src/pages/Support.tsx': [
        ('帮助与售后支持</h1>', '{t(\'support.title\', \'帮助与售后支持\')}</h1>'),
        ('我们不仅做靠谱的机器，更做让您放心的售后。', '{t(\'support.sub1\', \'我们不仅做靠谱的机器，更做让您放心的售后。\')}'),
        ('买得放心，用得舒心，有问题随时找我们。', '{t(\'support.sub2\', \'买得放心，用得舒心，有问题随时找我们。\')}'),
        ('包邮送达', '{t(\'support.feat1.title\', \'包邮送达\')}'),
        ('COO亲盯物流，顺丰/京东包邮，确保机器完好无损地送到您手上。', '{t(\'support.feat1.desc\', \'COO亲盯物流，顺丰/京东包邮，确保机器完好无损地送到您手上。\')}'),
        ('7天无理由退货', '{t(\'support.feat2.title\', \'7天无理由退货\')}'),
        ('收货7天内，只要机器包装完整、不影响二次销售，运费我们出，全额退款。', '{t(\'support.feat2.desc\', \'无理由退货描述\')}'),
        ('一年内只换不修', '{t(\'support.feat3.title\', \'一年内只换不修\')}'),
        ('质保期内非人为损坏，我们不搞维修折腾，直接给您换台新的。', '{t(\'support.feat3.desc\', \'只换不修描述\')}'),
        ('常见问题 (FAQ)</h2>', '{t(\'support.faq.title\', \'常见问题 (FAQ)\')}</h2>'),
        ('没找到答案？直接找人工</h2>', '{t(\'support.help.title\', \'没找到答案？直接找人工\')}</h2>'),
        ('我们的客服团队都是全职员工，不是机器人。遇到任何问题，欢迎随时联系。', '{t(\'support.help.desc\', \'客服描述\')}'),
        ('立即预定', '{t(\'product.preorder\', \'立即预定\')}'),
    ],
    'src/pages/Cases.tsx': [
        ('开启你的AI专属助手', '{t(\'cases.start\', \'开启你的AI专属助手\')}'),
    ]
}

for path, replacements in files_to_update.items():
    if not os.path.exists(path): continue
    content = open(path, 'r', encoding='utf-8').read()
    
    # check if 'useTranslation' is imported
    if path not in ['src/components/Layout.tsx'] and 'const { t }' not in content:
        # Add the import and hook
        pass # Handle this if necessary, but most already have it.
        
    for old, new in replacements:
        content = content.replace(old, new)
    open(path, 'w', encoding='utf-8').write(content)
    print(f"Updated {path}")
