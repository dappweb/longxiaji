import re
import os

def fix_file(path, replacements):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for pattern, repl in replacements:
        content = re.sub(pattern, repl, content)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

home_fixes = [
    (r'解决“用不用得上 AI”的问题。把配置、支付、注册等门槛全部消除。', r'{t("home.sec1.sub", "解决“用不用得上 AI”的问题。把配置、支付、注册等门槛全部消除。")}'),
    (r'从个人助理到企业数字员工，满足不同场景的 AI 需求。', r'{t("home.sec2.sub", "从个人助理到企业数字员工，满足不同场景的 AI 需求。")}'),
    (r'“拥有一个 24 小时在线的私人 AI 助理。微信里直接问，效率翻倍。”', r'{t("home.sec2.c1.q", "“拥有一个 24 小时在线的私人 AI 助理。微信里直接问，效率翻倍。”")}'),
    (r'典型场景：日常问答、邮件起草', r'{t("home.sec2.c1.scene", "典型场景：日常问答、邮件起草")}'),
    (r'“一台龙虾机的月费，还不到一个实习生的交通补贴。但它不会请假、不会离职、不会累，数据还绝对安全。”', r'{t("home.sec2.c2.q", "“一台龙虾机的月费，还不到一个实习生的交通补贴。但它不会请假、不会离职、不会累，数据还绝对安全。”")}'),
    (r'典型场景：客服自动回复、文案生成', r'{t("home.sec2.c2.scene", "典型场景：客服自动回复、文案生成")}'),
    (r'“它不仅仅是你的工具，也是给爸妈的一份 AI 礼物。父母用微信语音问天气、查菜谱，比智能音箱聪明多了。”', r'{t("home.sec2.c3.q", "“它不仅仅是你的工具，也是给爸妈的一份 AI 礼物。父母用微信语音问天气、查菜谱，比智能音箱聪明多了。”")}'),
    (r'典型场景：生活百科、健康食谱', r'{t("home.sec2.c3.scene", "典型场景：生活百科、健康食谱")}'),
    (r'别人还在学怎么用 AI<br\s*/>\s*你的龙虾机已经在帮你干活了', r'{t("home.sec3.t1", "别人还在学怎么用 AI")}<br/>{t("home.sec3.t2", "你的龙虾机已经在帮你干活了")}'),
    (r'首批限量发售，抢先体验零门槛的桌面 AI 助理。', r'{t("home.sec3.sub", "首批限量发售，抢先体验零门槛的桌面 AI 助理。")}'),
    (r'立即预定抢首发', r'{t("home.sec3.btn1", "立即预定抢首发")}'),
    (r'联系企业采购', r'{t("home.sec3.btn2", "联系企业采购")}')
]

layout_fixes = [
    (r'全球首款开机即用的 AI 硬件终端。<br\s*/>\s*致力于打破技术壁垒，让每一个普通人都能以最自然的方式，享受到先进的人工智能服务。', r'{t("footer.desc1", "全球首款开机即用的 AI 硬件终端。")}<br />{t("footer.desc2", "致力于打破技术壁垒，让每一个普通人都能以最自然的方式，享受到先进的人工智能服务。")}'),
    (r'© \{new Date\(\)\.getFullYear\(\)\} 龙虾机 LongXiaJi\. 保留所有权利\.', r'© {new Date().getFullYear()} {t("footer.rights_text", "龙虾机 LongXiaJi. 保留所有权利.")}'),
    (r'>隐私政策<', r'>{t("footer.privacy", "隐私政策")}<'),
    (r'>服务条款<', r'>{t("footer.terms", "服务条款")}<'),
    (r'>\s*深圳智造 · 全球服务\s*<', r'> {t("footer.sz", "深圳智造 · 全球服务")} <')
]

fix_file("src/pages/Home.tsx", home_fixes)
fix_file("src/components/Layout.tsx", layout_fixes)
