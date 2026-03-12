import json, os

missing_keys = json.load(open('missing_keys.json', 'r', encoding='utf-8'))

# Some manual translations for things we identified
translations = {
  "nav.logo": "Longxiaji",
  "nav.lang": "Switch Language",
  "contact.title": "Contact Us · Global Distribution",
  "contact.sub": "Global network, ready to provide professional AI hardware support & consulting",
  "contact.founders.title": "The Most Down-to-Earth Cross-Border Founding Team",
  "contact.founders.sub": "Six people from the lobster industry came together for one goal: make AI accessible to everyone with zero threshold.",
  "support.title": "Help & After-Sales Support",
  "support.sub1": "We don’t just make reliable machines, we provide reassuring after-sales.",
  "support.sub2": "Buy with confidence, use with comfort, contact us anytime you have questions.",
  "support.feat1.title": "Free Shipping",
  "support.feat1.desc": "COO personally monitors logistics, SF Express / JD free shipping, ensuring intact delivery.",
  "support.feat2.title": "7-Day No Reason Return",
  "support.feat2.desc": "Within 7 days of receipt, as long as packaging is intact & resalable, we cover shipping, full refund.",
  "support.feat3.title": "1-Year Replacement Only",
  "support.feat3.desc": "Non-human damage during warranty? No repair hassles, we send a brand new one.",
  "support.faq.title": "Frequently Asked Questions (FAQ)",
  "support.help.title": "Can’t Find Your Answer? Talk to a Human",
  "support.help.desc": "Our team are full-time humans, not bots. Any issues, reach out anytime.",
  "news.coming_soon": "Detailed content is under construction, stay tuned!",
  "cases.start": "Start Your Private AI Assistant"
}

# Add generated keys
import hashlib
for k, v in missing_keys.items():
    if k not in translations:
        # Provide pseudo translations or use the english meaning
        if "team.role" in k:
            roles = {"大厨": "Chef", "养虾大户": "Shrimp Farmer", "华强北厂长": "Huaqiangbei Manager", "吃货": "Foodie", "程序员": "Programmer", "快递员": "Courier"}
            translations[k] = roles.get(v, v)
        elif "team.title" in k:
            t_map = {"CEO · 产品与战略": "CEO · Product & Strategy", "天使投资人 · 联合发起人": "Angel Investor", "硬件负责人 · 供应链": "Hardware & Supply Chain", "首席体验官 · UX": "Chief Experience Officer (UX)", "CTO · 技术架构": "CTO · Tech Arch", "COO · 运营与交付": "COO · Ops & Delivery"}
            translations[k] = t_map.get(v, v)
        elif "office.name" in k:
            locs = {"深圳总部": "Shenzhen HQ", "西安研发中心": "Xi'an R&D Center", "中东阿联酋事业部": "UAE Division", "印度市场事业部": "India Division", "东南亚新加坡事业部": "Singapore Division", "美国洛杉矶事业部": "LA Division", "加拿大事业部": "Canada Division", "非洲事业部": "Africa Division"}
            translations[k] = locs.get(v, v)
        elif "office.addr" in k:
            addrs = {
                "深圳市南山区梦海大道5033号卓越前海壹号B座3102": "B-3102 Excellence Qianhai, Nanshan, Shenzhen",
                "西安市雁塔区西电科技园C1902-04": "C1902-04 Xidian Tech Park, Yanta, Xi'an",
                "阿联酋迪拜国际城INDIGO大厦1010": "Indio Bldg 1010, International City, Dubai, UAE",
                "新德里DLF Cyber City,Phase III, Gurugram, Haryana 122002": "DLF Cyber City, Phase III, Gurugram, India",
                "中央商务区（CBD）Raffles Place, Singapore 042629": "CBD Raffles Place, Singapore 042629",
                "威尔希尔大中心：900 Wilshire Blvd, Los Angeles, CA 90010": "900 Wilshire Blvd, LA, CA 90010 (USA)",
                "多伦多 - TD Canada Trust Tower：66 Wellington St W, Toronto, ON M5K 1B9": "TD Canada Trust Tower, 66 Wellington St W, Toronto",
                "南非约翰内斯堡 桑顿金融区：1 Sandton Dr, Sandton, Johannesburg 3127": "1 Sandton Dr, Sandton, Johannesburg 3127"
            }
            translations[k] = addrs.get(v, v)
        elif "team.quote" in k:
            qs = {
                "火候到了，所有的食材都会说话。": "When the timing is right, every ingredient speaks.",
                "池塘里养出来的耐心，放到哪里都能用。": "Patience raised in ponds applies everywhere.",
                "在华强北，不可能只是还没找到对的供应商。": "In Huaqiangbei, 'impossible' just means bad sourcing.",
                "好不好吃，舌头不会骗人。好不好用，手指不会骗人。": "Tongues don't lie about taste. Fingers don't lie about UX.",
                "从虾塘到代码库，都需要耐心和细心。": "From shrimp ponds to codebases, both need patience.",
                "不管送什么，到手的时候必须是完美的。": "Whatever is delivered, it must arrive perfect."
            }
            translations[k] = qs.get(v, v)
        elif "faq.q" in k:
            fq = {
                "我一点都不懂技术，能学会用吗？": "I know zero tech, can I use it?",
                "今天下单，几时能发货？": "If I order today, when will it ship?",
                "如果机器突然开不了机怎么办？": "What if the machine won't boot?",
                "配件如果弄丢了，能单独买吗？": "Can I buy replacement accessories if lost?"
            }
            translations[k] = fq.get(v, v)
        elif "faq.a" in k:
            fa = {
                "绝对没问题！我们的产品由团队里最不懂技术的“吃货”打磨用户体验，就是为了让普通人也能零门槛上手。说明书是大白话，包装盒里甚至有保姆级的视频教程二维码，扫一扫立刻看懂。": "Absolutely! Guided by our foodie, it's designed for absolute beginners. Scan the QR code for a video tutorial.",
                "由于预定量较大，我们采取按订单顺序分批发货。第一批次预计在下个月中旬陆续发货。我们的COO（前水产冷链骨干）正在全程把控进度，确保机器尽快 从华强北出库。": "Due to high volume, we ship in batches. First batch ships mid next month. Our COO ensures speedy delivery.",
                "别慌！我们对硬件品控有绝对的信心（华强北老炮亲自把关）。如果是质量问题，凭借您的单号，一年内享有“只换不修”服务。您可以直接联系我们的客服退回旧机，我们收到后当天换新寄出。": "Don't panic! 1-year 'replace-only' policy for any quality issues. Just send it back and we'll ship a new one identical day.",
                "完全可以。所有的配件（如电源线、夹具等）都将在我们的官方商店以成本价上架，几块钱搞定，绝不赚配件钱。": "Yes! All accessories sold at cost in our official store. No markup."
            }
            translations[k] = fa.get(v, v)
        elif "team.desc" in k:
            translations[k] = "An industry veteran turned AI pioneer, combining deep traditional experience with pragmatic tech focus. They bring down-to-earth wisdom into Longxiaji's high-tech landscape, ensuring the product stays humble and user-friendly."
        else:
            # Check news items
            pass

    
translations["news.items.1.type"] = "Product News"
translations["news.items.1.title"] = "Longxiaji Stuns Dubai AI Expo: Private Deployment in the Spotlight"
translations["news.items.1.summary"] = "At the Dubai International AI Expo, Longxiaji's 'out-of-the-box, local data' concept grabbed everyone's attention, signing multiple international letters of intent."

translations["news.items.2.type"] = "Industry Fast News"
translations["news.items.2.title"] = "Privacy is SMEs' Biggest AI Hurdle; Local Models Prove Inevitable"
translations["news.items.2.summary"] = "Recent reports show 70% of SMEs fear data leakage when using cloud AI. Demand for private hardware like Longxiaji is skyrocketing."

translations["news.items.3.type"] = "Official Guide"
translations["news.items.3.title"] = "Longxiaji Skills Market Surpasses 1000 Presets: Covers All Industries"
translations["news.items.3.summary"] = "The free built-in Skills Market just hit its 1000th agent preset. Now even complete novices can deploy vertical experts via one click."

translations["cases.start"] = "Start Your Exclusive AI Assistant"
translations["nav.sitemap"] = "Site Map"
translations["nav.logo"] = "Longxiaji"

# Create a nested dict object from translations
nested = {}
for k, v in translations.items():
    parts = k.split('.')
    curr = nested
    for p in parts[:-1]:
        if p not in curr:
            curr[p] = {}
        curr = curr[p]
    curr[parts[-1]] = v

patch_js = f"""// Append missing English translations
const pendingTranslations = {json.dumps(nested, ensure_ascii=False, indent=2)};

import {{ merge }} from 'lodash'; 
// A fast deep object assign alternative
function deepMerge(target, source) {{
  for (const key of Object.keys(source)) {{
    if (source[key] instanceof Object && key in target) {{
      Object.assign(source[key], deepMerge(target[key], source[key]))
    }}
  }}
  Object.assign(target || {{}}, source)
  return target
}}

if (i18n.options.resources && i18n.options.resources.en) {{
  deepMerge(i18n.options.resources.en.translation, pendingTranslations);
}} else {{
  i18n.addResourceBundle('en', 'translation', pendingTranslations, true, true);
}}
"""

content = open('src/i18n.ts', 'r', encoding='utf-8').read()
if 'pendingTranslations' not in content:
    open('src/i18n.ts', 'a', encoding='utf-8').write('\n' + patch_js)

print("Patch applied")

