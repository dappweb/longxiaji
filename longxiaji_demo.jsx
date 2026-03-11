import { useState, useEffect, useRef } from "react";

var LOGO = "data:image/png;base64,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";

var C = {
  bg: "#0D0D1A", red: "#E53935", dkRed: "#B71C1C", org: "#FF6D00",
  wh: "#FFFFFF", gr: "#9E9E9E", grn: "#43A047", txt: "#212121", txtL: "#757575"
};

function Logo(props) {
  var s = props.size || 40;
  var showText = props.showText !== false;
  var textColor = props.textColor || C.gr;
  var textSize = Math.max(8, Math.round(s * 0.12));
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center" }}>
      <img src={LOGO} alt="LongXiaJi" style={{ width: s, height: "auto", objectFit: "contain" }} />
      {showText ? <span style={{ fontSize: textSize, color: textColor, fontWeight: 600, marginTop: 2, letterSpacing: 0.5 }}>{"longxiaji.com"}</span> : null}
    </div>
  );
}

function Nav(props) {
  var pg = props.pg, go = props.go, sc = props.scrolled;
  var tabs = [
    { id: "home", label: "首页" }, { id: "product", label: "产品介绍" },
    { id: "support", label: "售后支持" }, { id: "skills", label: "技能市场" },
    { id: "cases", label: "用户案例" }, { id: "news", label: "新闻资讯" },
    { id: "contact", label: "联系我们" }
  ];
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, background: sc ? "rgba(13,13,26,0.97)" : "rgba(13,13,26,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }} onClick={function () { go("home"); }}>
          <img src={LOGO} alt="" style={{ width: 28, height: "auto" }} />
          <span style={{ color: C.wh, fontWeight: 800, fontSize: 17 }}>{"龙虾机"}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
          {tabs.map(function (t) {
            return <button key={t.id} onClick={function () { go(t.id); }} style={{ background: pg === t.id ? "rgba(229,57,53,0.15)" : "none", border: "none", cursor: "pointer", padding: "6px 10px", borderRadius: 6, color: pg === t.id ? C.wh : C.gr, fontWeight: pg === t.id ? 700 : 400, fontSize: 12 }}>{t.label}</button>;
          })}
          <button className="hover-btn" onClick={function () { go("order"); }} style={{ background: C.red, color: C.wh, border: "none", borderRadius: 6, padding: "6px 16px", fontWeight: 700, fontSize: 12, cursor: "pointer", marginLeft: 6, boxShadow: "0 2px 10px rgba(229,57,53,0.4)" }}>{"立即预定"}</button>
        </div>
      </div>
    </nav>
  );
}

function Sec(props) { return <section style={{ background: props.bg || C.wh }}><div style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 20px" }}>{props.children}</div></section>; }
function ST(props) { return <div style={{ textAlign: "center", marginBottom: 44 }}><h2 style={{ fontSize: 32, fontWeight: 900, margin: "0 0 10px" }}>{props.t}</h2>{props.s ? <p style={{ color: C.txtL, fontSize: 15, margin: 0 }}>{props.s}</p> : null}</div>; }
function OBtn(props) { return <div style={{ textAlign: "center", marginTop: 40 }}><button className="hover-btn" onClick={function () { props.go("order"); }} style={{ background: C.red, color: C.wh, border: "none", borderRadius: 10, padding: "14px 36px", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 20px rgba(229,57,53,0.4)" }}>{"立即预定"}</button></div>; }

function Home(props) {
  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #0D0D1A, #1A1A3E, #2D1B2E)", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: 450, height: 450, background: "radial-gradient(circle, rgba(229,57,53,0.1) 0%, transparent 70%)", borderRadius: "50%" }}></div>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "110px 20px 70px", display: "flex", alignItems: "center", gap: 50, position: "relative", zIndex: 1, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 440px" }}>
            <div style={{ display: "inline-block", background: "rgba(229,57,53,0.12)", border: "1px solid rgba(229,57,53,0.25)", borderRadius: 18, padding: "5px 14px", marginBottom: 20 }}>
              <span style={{ color: C.red, fontSize: 13, fontWeight: 600 }}>{"全球首款开机即用的 AI 安全工作站"}</span>
            </div>
            <h1 style={{ color: C.wh, fontSize: 46, fontWeight: 900, lineHeight: 1.2, margin: "0 0 6px" }}>{"把 AI 助理请回你的桌面"}</h1>
            <h1 style={{ color: C.red, fontSize: 46, fontWeight: 900, lineHeight: 1.2, margin: "0 0 22px" }}>{"别让它住在你的电脑里"}</h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.8, margin: "0 0 32px", maxWidth: 500 }}>{"AI 需要你电脑的完整 Root 权限——你的银行密码、聊天记录、工作文件全部暴露。给它一台独立的机器，别拿你的电脑冒险。插电即用，3 分钟上手。"}</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
              <button className="hover-btn" onClick={function () { props.go("order"); }} style={{ background: C.red, color: C.wh, border: "none", borderRadius: 10, padding: "14px 32px", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 20px rgba(229,57,53,0.5)" }}>{"立即预定 · 限量 10,000 台"}</button>
              <button className="hover-btn" onClick={function () { props.go("product"); }} style={{ background: "transparent", color: C.wh, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 10, padding: "14px 28px", fontSize: 15, cursor: "pointer" }}>{"了解更多"}</button>
            </div>
            
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "16px 20px", display: "inline-flex", gap: 24, flexWrap: "wrap", backdropFilter: "blur(10px)" }}>
              {[
                { v: "16GB", l: "高频内存" },
                { v: "256GB", l: "安全存储" },
                { v: "5W", l: "超低功耗" },
                { v: "OpenClaw", l: "预装系统" }
              ].map((spec, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: C.wh, fontSize: 17, fontWeight: 900 }}>{spec.v}</span>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>{spec.l}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: "1 1 280px", display: "flex", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 300, height: 300, borderRadius: 28, background: "linear-gradient(145deg, #1E1E3A, #2A1A2E)", border: "1px solid rgba(229,57,53,0.2)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 16px 60px rgba(229,57,53,0.15)" }}>
                <Logo size={220} textColor="rgba(255,255,255,0.4)" />
              </div>
              <p style={{ color: C.gr, fontSize: 12, marginTop: 12 }}>{"AI 安全工作站 · 独立硬件 · 7x24 运行"}</p>
            </div>
          </div>
        </div>
      </section>

      <Sec bg={C.wh}>
        <ST t="你的数据，只在你家里" s="AI 需要完整 Root 权限才能替你做事——你放心把整台电脑交给它吗？" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          <div style={{ background: "#F5F5F5", border: "1px solid #E0E0E0", borderRadius: 14, padding: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: C.gr, margin: "0 0 16px", textAlign: "center" }}>{"在自己电脑上装"}</h3>
            <p style={{ fontSize: 13, color: C.txt, margin: "0 0 8px", lineHeight: 1.6 }}>{"⚠️ AI 获得完整 Root 权限，银行密码、聊天记录全部暴露"}</p>
            <p style={{ fontSize: 13, color: C.txt, margin: "0 0 8px", lineHeight: 1.6 }}>{"⚠️ 误操作可能删除工作文件、发错邮件"}</p>
            <p style={{ fontSize: 13, color: C.txt, margin: "0 0 8px", lineHeight: 1.6 }}>{"⚠️ 需要命令行部署，技术门槛高"}</p>
            <p style={{ fontSize: 13, color: C.txt, margin: 0, lineHeight: 1.6 }}>{"⚠️ 新华社已报道安全风险"}</p>
          </div>
          <div style={{ background: "#F5F5F5", border: "1px solid #E0E0E0", borderRadius: 14, padding: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: C.gr, margin: "0 0 16px", textAlign: "center" }}>{"用云服务器"}</h3>
            <p style={{ fontSize: 13, color: C.txt, margin: "0 0 8px", lineHeight: 1.6 }}>{"⚠️ 数据存在别人的服务器上，隐私不可控"}</p>
            <p style={{ fontSize: 13, color: C.txt, margin: "0 0 8px", lineHeight: 1.6 }}>{"⚠️ 服务商泄露或被调取时你毫不知情"}</p>
            <p style={{ fontSize: 13, color: C.txt, margin: "0 0 8px", lineHeight: 1.6 }}>{"⚠️ 需要翻墙、信用卡、技术基础"}</p>
            <p style={{ fontSize: 13, color: C.txt, margin: 0, lineHeight: 1.6 }}>{"⚠️ 按量收费，越用越贵"}</p>
          </div>
          <div style={{ background: "#E8F5E9", border: "2px solid #43A047", borderRadius: 14, padding: 24, transform: "scale(1.02)", boxShadow: "0 6px 24px rgba(67,160,71,0.12)" }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: C.grn, margin: "0 0 16px", textAlign: "center" }}>{"龙虾机 — AI 安全工作站"}</h3>
            <p style={{ fontSize: 13, color: C.txt, margin: "0 0 8px", lineHeight: 1.6 }}>{"✅ 独立硬件，Root 权限只在专用设备上"}</p>
            <p style={{ fontSize: 13, color: C.txt, margin: "0 0 8px", lineHeight: 1.6 }}>{"✅ 你的电脑零风险，数据物理隔离"}</p>
            <p style={{ fontSize: 13, color: C.txt, margin: "0 0 8px", lineHeight: 1.6 }}>{"✅ 插电即用，扫码绑定，零门槛"}</p>
            <p style={{ fontSize: 13, color: C.txt, margin: 0, lineHeight: 1.6 }}>{"✅ 一次买断 ¥298，后续还能赚钱"}</p>
          </div>
        </div>
        <OBtn go={props.go} />
      </Sec>

      <Sec bg="#FAFAFA">
        <ST t="从个人到家庭，从副业到小生意" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {[
            { e: "💻", t: "个人用户", d: "每天不到一块钱，24h AI 助理", c: "#E3F2FD" },
            { e: "🏪", t: "小生意老板", d: "比实习生便宜，不请假不累", c: "#FFF3E0" },
            { e: "🎁", t: "送给父母", d: "微信问天气查食谱读新闻", c: "#FCE4EC" },
            { e: "💰", t: "副业投资", d: "自己用一台再买一台等更多玩法", c: "#E8F5E9" }
          ].map(function (s, i) {
            return <div key={i} style={{ background: C.wh, borderRadius: 14, padding: 24, textAlign: "center", border: "1px solid #F0F0F0" }}><div style={{ width: 48, height: 48, borderRadius: 14, background: s.c, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 24 }}>{s.e}</div><h3 style={{ fontSize: 15, fontWeight: 800, margin: "0 0 6px" }}>{s.t}</h3><p style={{ fontSize: 13, color: C.txtL, margin: 0, lineHeight: 1.5 }}>{s.d}</p></div>;
          })}
        </div>
        <OBtn go={props.go} />
      </Sec>

      <Sec bg={C.wh}>
        <ST t="深圳生产流水线实拍图（产能图）" s="为感谢大家热情预约，车间正满负荷生产，首批设备即将从这里打包发往全国！" />
        <div className="img-grid" style={{ alignItems: "center" }}>
          <img src="/box/5050e13500344491bce2018ece160efd.png" alt="产能图1" style={{ width: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 8px 30px rgba(0,0,0,0.1)", objectFit: "cover" }} />
          <img src="/box/68baeb0b3f00e118a4a061246585731d.jpg" alt="产能图2" style={{ width: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 8px 30px rgba(0,0,0,0.1)", objectFit: "cover" }} />
        </div>
      </Sec>

      <section style={{ background: "linear-gradient(135deg, #B71C1C, #E53935, #FF6D00)", padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ color: C.wh, fontSize: 34, fontWeight: 900, margin: "0 0 6px" }}>{"别拿你的电脑冒险"}</h2>
        <h2 style={{ color: C.wh, fontSize: 34, fontWeight: 900, margin: "0 0 16px" }}>{"给 AI 一台它自己的机器"}</h2>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, margin: "0 0 28px" }}>{"全球首款开机即用的 AI 安全工作站 · ¥298 限量首发"}</p>
        <button className="hover-btn" onClick={function () { props.go("order"); }} style={{ background: C.wh, color: C.dkRed, border: "none", borderRadius: 10, padding: "14px 36px", fontSize: 17, fontWeight: 800, cursor: "pointer", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>{"立即预定"}</button>
      </section>
    </div>
  );
}

function Product(props) {
  return (
    <div>
      <section style={{ background: C.bg, paddingTop: 90 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "50px 20px", textAlign: "center" }}>
          <h2 style={{ color: C.wh, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>{"三步上手，全程不超过 3 分钟"}</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, margin: "0 0 40px" }}>{"和用微波炉一样简单"}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { n: "1", t: "插电 + 连网", d: "插网线或连 WiFi\n扫码激活\n自动获得免费 AI 额度", bg: "#FFEBEE", ac: C.red },
              { n: "2", t: "绑定聊天工具", d: "微信 / QQ / 钉钉 / 飞书\n扫码授权即可\n可跳过稍后补绑", bg: "#FFF3E0", ac: C.org },
              { n: "3", t: "开始干活", d: "发一句话试试\n或点击开箱任务\n从此 24h 助理上线", bg: "#E8F5E9", ac: C.grn }
            ].map(function (s, i) {
              return <div key={i} style={{ background: s.bg, borderRadius: 16, padding: 30 }}><div style={{ width: 42, height: 42, borderRadius: "50%", background: s.ac, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: C.wh, fontSize: 18, fontWeight: 800 }}>{s.n}</div><h3 style={{ fontSize: 17, fontWeight: 800, margin: "0 0 8px" }}>{s.t}</h3><p style={{ fontSize: 13, color: C.txt, margin: 0, lineHeight: 1.7, whiteSpace: "pre-line" }}>{s.d}</p></div>;
            })}
          </div>
        </div>
      </section>
      <Sec bg={C.wh}>
        <ST t="预装实用技能，开箱即用" s="更多能力即将免费解锁" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {[{ e: "💬", t: "智能对话", d: "多模型切换翻译写作" },{ e: "📊", t: "办公助手", d: "Excel PPT 邮件" },{ e: "📰", t: "生活工具", d: "日程天气新闻早报" },{ e: "🎨", t: "图片视频", d: "拍照翻译出图" }].map(function (s, i) {
            return <div key={i} style={{ background: "#FAFAFA", borderRadius: 14, padding: 22, textAlign: "center", border: "1px solid #F0F0F0" }}><span style={{ fontSize: 28 }}>{s.e}</span><h3 style={{ fontSize: 15, fontWeight: 700, margin: "10px 0 6px" }}>{s.t}</h3><p style={{ fontSize: 12, color: C.txtL, margin: 0 }}>{s.d}</p></div>;
          })}
        </div>
        <OBtn go={props.go} />
      </Sec>
      <Sec bg="#FAFAFA">
        <ST t="不需要你懂电脑，它懂你" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {[{ ic: "🔌", t: "插电就能用", d: "和微波炉一样简单" },{ ic: "🧠", t: "全球最强 AI 大脑", d: "多模型随便切换" },{ ic: "🌙", t: "24 小时不下班", d: "白天干活晚上盯盘" },{ ic: "💬", t: "微信里说一句就行", d: "四大 IM 平台" },{ ic: "🔒", t: "独立硬件更安全", d: "你的电脑零风险" },{ ic: "💳", t: "不用翻墙不用信用卡", d: "微信支付宝扫码" }].map(function (f, i) {
            return <div key={i} style={{ background: C.wh, borderRadius: 14, padding: 24, textAlign: "center", border: "1px solid #F0F0F0" }}><span style={{ fontSize: 28 }}>{f.ic}</span><h3 style={{ fontSize: 15, fontWeight: 700, margin: "10px 0 6px" }}>{f.t}</h3><p style={{ fontSize: 12, color: C.txtL, margin: 0 }}>{f.d}</p></div>;
          })}
        </div>
        <OBtn go={props.go} />
      </Sec>
    </div>
  );
}

function Support(props) {
  return (
    <div>
      <section style={{ background: C.bg, paddingTop: 90 }}><div style={{ maxWidth: 800, margin: "0 auto", padding: "50px 20px", textAlign: "center" }}><h2 style={{ color: C.wh, fontSize: 34, fontWeight: 900 }}>{"售后支持"}</h2></div></section>
      <Sec bg={C.wh}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[{ ic: "🔄", t: "7 天无理由退货", d: "不喜欢就退，零风险" },{ ic: "⚡", t: "3 分钟上手承诺", d: "做不到全额退款" },{ ic: "💬", t: "真人客服", d: "微信群+专属客服随时响应" }].map(function (item, i) {
            return <div key={i} style={{ background: "#FAFAFA", borderRadius: 14, padding: 28, textAlign: "center", border: "1px solid #F0F0F0" }}><span style={{ fontSize: 32 }}>{item.ic}</span><h3 style={{ fontSize: 17, fontWeight: 800, margin: "14px 0 6px" }}>{item.t}</h3><p style={{ fontSize: 13, color: C.txtL, margin: 0 }}>{item.d}</p></div>;
          })}
        </div>
        <OBtn go={props.go} />
      </Sec>
    </div>
  );
}

function Skills(props) {
  return (
    <div>
      <section style={{ background: C.bg, paddingTop: 90 }}><div style={{ maxWidth: 800, margin: "0 auto", padding: "50px 20px", textAlign: "center" }}><h2 style={{ color: C.wh, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>{"技能市场"}</h2><p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16 }}>{"更多专业能力，即将免费解锁"}</p></div></section>
      <Sec bg={C.wh}>
        <ST t="预装技能" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {[{ e: "💬", t: "智能对话", d: "多模型翻译写作" },{ e: "📊", t: "办公助手", d: "Excel PPT 邮件" },{ e: "📰", t: "生活工具", d: "日程天气新闻" },{ e: "🎨", t: "图片视频", d: "翻译出图" }].map(function (s, i) {
            return <div key={i} style={{ background: "#FAFAFA", borderRadius: 14, padding: 22, textAlign: "center", border: "1px solid #F0F0F0" }}><span style={{ fontSize: 28 }}>{s.e}</span><h3 style={{ fontSize: 15, fontWeight: 700, margin: "10px 0 4px" }}>{s.t}</h3><p style={{ fontSize: 12, color: C.txtL, margin: "0 0 8px" }}>{s.d}</p><span style={{ fontSize: 11, color: C.grn, fontWeight: 700, background: "#E8F5E9", padding: "2px 8px", borderRadius: 6 }}>{"已预装"}</span></div>;
          })}
        </div>
      </Sec>
      <Sec bg="#FAFAFA">
        <ST t="即将上线" s="早期用户优先体验" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {[{ e: "📈", t: "量化交易", d: "行情监控策略执行" },{ e: "🛒", t: "电商运营", d: "文案客服自动回复" },{ e: "🎬", t: "影音创作", d: "字幕脚本" },{ e: "🏢", t: "企业AI员工", d: "定制工作流" }].map(function (s, i) {
            return <div key={i} style={{ background: C.wh, borderRadius: 14, padding: 22, textAlign: "center", border: "1px dashed #CCC" }}><span style={{ fontSize: 28 }}>{s.e}</span><h3 style={{ fontSize: 15, fontWeight: 700, margin: "10px 0 4px" }}>{s.t}</h3><p style={{ fontSize: 12, color: C.txtL, margin: "0 0 8px" }}>{s.d}</p><span style={{ fontSize: 11, color: C.org, fontWeight: 700, background: "#FFF3E0", padding: "2px 8px", borderRadius: 6 }}>{"即将上线"}</span></div>;
          })}
        </div>
        <OBtn go={props.go} />
      </Sec>
    </div>
  );
}

function Cases(props) {
  return (
    <div>
      <section style={{ background: C.bg, paddingTop: 90 }}><div style={{ maxWidth: 800, margin: "0 auto", padding: "50px 20px", textAlign: "center" }}><h2 style={{ color: C.wh, fontSize: 34, fontWeight: 900 }}>{"用户案例"}</h2></div></section>
      <Sec bg={C.wh}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {[
            { t: "电商自动客服", d: "接入龙虾机后 80% 常见问题 AI 自动回复，响应从 30 分钟缩到 10 秒。", tag: "电商", star: 5 },
            { t: "家庭 AI 助理", d: "张阿姨每天用微信问天气查食谱听新闻。子女远程设好老人自己就能用。", tag: "家庭", star: 5 },
            { t: "自媒体文案生成", d: "每天 5 条小红书，批量生成初稿微调，效率提升 4 倍。", tag: "自媒体", star: 4 },
            { t: "外贸邮件处理", d: "自动翻译回复询盘邮件，省了一个英语助理的成本。", tag: "外贸", star: 5 }
          ].map(function (c, i) {
            var stars = ""; for (var j = 0; j < c.star; j++) { stars += "★"; }
            return <div key={i} style={{ background: "#FAFAFA", borderRadius: 14, padding: 28, border: "1px solid #F0F0F0" }}><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}><span style={{ background: "rgba(229,57,53,0.1)", color: C.red, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 8 }}>{c.tag}</span><span style={{ color: "#FFB300", fontSize: 14 }}>{stars}</span></div><h3 style={{ fontSize: 17, fontWeight: 800, margin: "0 0 8px" }}>{c.t}</h3><p style={{ fontSize: 14, color: C.txt, margin: 0, lineHeight: 1.7 }}>{c.d}</p></div>;
          })}
        </div>
        <OBtn go={props.go} />
      </Sec>
    </div>
  );
}

function News(props) {
  return (
    <div>
      <section style={{ background: C.bg, paddingTop: 90 }}><div style={{ maxWidth: 800, margin: "0 auto", padding: "50px 20px", textAlign: "center" }}><h2 style={{ color: C.wh, fontSize: 34, fontWeight: 900 }}>{"新闻资讯"}</h2></div></section>
      <Sec bg={C.wh}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {[
            { date: "2026.03.09", t: "新华社：AI Agent 安全风险需引起重视", tag: "行业" },
            { date: "2026.03.08", t: "腾讯大厦千人排队安装 OpenClaw", tag: "行业" },
            { date: "2026.03.07", t: "龙虾机迪拜全球首发当日售罄", tag: "龙虾机" },
            { date: "2026.03.06", t: "为什么你需要一台独立的 AI 工作站", tag: "龙虾机" },
            { date: "2026.03.05", t: "龙虾机境内限量体验价正式开放", tag: "龙虾机" }
          ].map(function (n, i) {
            var isL = n.tag === "龙虾机";
            return <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "20px 0", borderBottom: "1px solid #F0F0F0" }}><span style={{ color: C.gr, fontSize: 13, whiteSpace: "nowrap", marginTop: 2 }}>{n.date}</span><div><span style={{ fontSize: 11, fontWeight: 700, color: isL ? C.red : C.txtL, background: isL ? "rgba(229,57,53,0.1)" : "#F5F5F5", padding: "2px 8px", borderRadius: 6, marginRight: 8 }}>{n.tag}</span><span style={{ fontSize: 15, color: C.txt }}>{n.t}</span></div></div>;
          })}
        </div>
        <OBtn go={props.go} />
      </Sec>
    </div>
  );
}

function Contact(props) {
  return (
    <div>
      <section style={{ background: C.bg, paddingTop: 90 }}><div style={{ maxWidth: 800, margin: "0 auto", padding: "50px 20px", textAlign: "center" }}><h2 style={{ color: C.wh, fontSize: 34, fontWeight: 900 }}>{"联系我们"}</h2></div></section>
      <Sec bg={C.wh}>
        <ST t="创始团队" s="六个从龙虾产业链走出来的人" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {[
            { r: "龙虾大厨", s: "CEO", tl: "我炒过的虾比你见过的人都多", c: "#FFEBEE" },
            { r: "养殖专业户", s: "供应链", tl: "池塘里养出来的耐心放到哪都能用", c: "#FFF3E0" },
            { r: "龙虾贸易商", s: "BD", tl: "卖什么不重要会卖才重要", c: "#E3F2FD" },
            { r: "龙虾吃货", s: "UX", tl: "好不好吃舌头不会骗人", c: "#F3E5F5" },
            { r: "龙虾快递员", s: "COO", tl: "不管送什么到手必须完美", c: "#E8F5E9" },
            { r: "龙虾研究员", s: "CTO", tl: "从虾塘到代码库都需要耐心", c: "#FFFDE7" }
          ].map(function (t, i) {
            return <div key={i} style={{ background: t.c, borderRadius: 16, padding: 22, textAlign: "center", border: "1px solid #F0F0F0" }}><Logo size={44} showText={false} /><h3 style={{ fontSize: 17, fontWeight: 800, margin: "8px 0 2px" }}>{t.r}</h3><p style={{ color: C.gr, fontSize: 12, margin: "0 0 8px" }}>{t.s}</p><p style={{ color: C.txt, fontSize: 13, margin: 0, fontStyle: "italic" }}>{t.tl}</p></div>;
          })}
        </div>
      </Sec>
      <Sec bg="#FAFAFA">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 800, margin: "0 auto" }}>
          {[{ ic: "💬", t: "客服微信", d: "扫码添加" },{ ic: "👥", t: "龙虾族微信群", d: "扫码加入" },{ ic: "📧", t: "商务合作", d: "biz@longxiaji.com" }].map(function (c, i) {
            return <div key={i} style={{ textAlign: "center" }}><span style={{ fontSize: 32 }}>{c.ic}</span><h3 style={{ fontSize: 16, fontWeight: 700, margin: "10px 0 6px" }}>{c.t}</h3><p style={{ fontSize: 13, color: C.txtL }}>{c.d}</p></div>;
          })}
        </div>
        <OBtn go={props.go} />
      </Sec>
    </div>
  );
}

function Order() {
  var totalStock = 10000;
  var raf = useRef(null);
  var startRef = useRef(null);
  var target = 8347;
  var dur = 3000;
  var st = useState(0);
  var soldVal = st[0]; var setSold = st[1];

  useEffect(function () {
    startRef.current = Date.now();
    function tick() {
      var el = Date.now() - startRef.current;
      var p = Math.min(el / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      setSold(Math.floor(e * target));
      if (p < 1) { raf.current = requestAnimationFrame(tick); }
    }
    raf.current = requestAnimationFrame(tick);
    return function () { if (raf.current) cancelAnimationFrame(raf.current); };
  }, []);

  var rem = totalStock - soldVal;
  var pct = (soldVal / totalStock) * 100;

  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #0D0D1A, #1A1A3E)", paddingTop: 90, minHeight: "100vh" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "50px 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Logo size={90} textColor="rgba(255,255,255,0.5)" />
            <h2 style={{ color: C.wh, fontSize: 34, fontWeight: 900, margin: "16px 0 8px" }}>{"龙虾机 · 立即预定"}</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{"全球首款开机即用的 AI 安全工作站"}</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 36, marginBottom: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24 }}>
              <div>
                <h3 style={{ color: C.wh, fontSize: 22, fontWeight: 800, margin: "0 0 6px" }}>{"AI 安全工作站 · 标准版"}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 16px" }}>{"16GB 内存 · 256GB 存储 · 预装 OpenClaw · 开机即用"}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["独立硬件", "数据隔离", "7x24运行", "免费AI额度"].map(function (tag, i) {
                    return <span key={i} style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6, padding: "3px 8px" }}>{tag}</span>;
                  })}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ color: C.gr, fontSize: 12, margin: "0 0 2px" }}>{"境外售价"}</p>
                <p style={{ color: C.gr, fontSize: 22, textDecoration: "line-through", fontWeight: 300, margin: "0 0 8px" }}>{"AED 2,980"}</p>
                <p style={{ color: C.org, fontSize: 12, margin: "0 0 2px", fontWeight: 600 }}>{"境内体验价"}</p>
                <p style={{ margin: 0 }}>
                  <span style={{ color: C.wh, fontSize: 20, fontWeight: 700 }}>{"¥"}</span>
                  <span style={{ color: C.wh, fontSize: 48, fontWeight: 900 }}>{"298"}</span>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>{"/台"}</span>
                </p>
              </div>
            </div>
          </div>
          <div style={{ background: "rgba(229,57,53,0.1)", border: "1px solid rgba(229,57,53,0.25)", borderRadius: 16, padding: 28, marginBottom: 28, textAlign: "center" }}>
            <p style={{ color: C.red, fontSize: 14, fontWeight: 700, margin: "0 0 16px" }}>{"限量 10,000 台 · 实时库存"}</p>
            <div style={{ maxWidth: 500, margin: "0 auto 12px" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, height: 14, overflow: "hidden" }}>
                <div style={{ width: pct + "%", height: "100%", borderRadius: 8, background: "linear-gradient(90deg, #E53935, #FF6D00)", transition: "width 0.3s" }}></div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 40 }}>
              <div><p style={{ color: C.wh, fontSize: 32, fontWeight: 900, margin: "0 0 2px" }}>{soldVal.toLocaleString()}</p><p style={{ color: C.gr, fontSize: 12, margin: 0 }}>{"已售出"}</p></div>
              <div><p style={{ color: C.red, fontSize: 32, fontWeight: 900, margin: "0 0 2px" }}>{rem.toLocaleString()}</p><p style={{ color: C.gr, fontSize: 12, margin: 0 }}>{"剩余"}</p></div>
            </div>
          </div>
          <button style={{ width: "100%", background: C.red, color: C.wh, border: "none", borderRadius: 12, padding: "18px 0", fontSize: 20, fontWeight: 900, cursor: "pointer", boxShadow: "0 4px 24px rgba(229,57,53,0.5)", marginBottom: 16 }}>{"立即预定 · ¥298"}</button>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, textAlign: "center", margin: "0 0 32px" }}>{"发货前可随时全额退款 · 零风险"}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[{ ic: "🔒", t: "独立安全硬件", d: "你的电脑零风险" },{ ic: "📦", t: "顺丰包邮", d: "3-5 天发货" },{ ic: "🔄", t: "7天无理由退货", d: "不满意全额退" }].map(function (item, i) {
              return <div key={i} style={{ textAlign: "center", padding: 16, background: "rgba(255,255,255,0.03)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)" }}><span style={{ fontSize: 24 }}>{item.ic}</span><p style={{ color: C.wh, fontSize: 13, fontWeight: 700, margin: "8px 0 2px" }}>{item.t}</p><p style={{ color: C.gr, fontSize: 11, margin: 0 }}>{item.d}</p></div>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function Ft(props) {
  return (
    <footer style={{ background: C.bg, padding: "40px 20px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 40, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 180px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <img src={LOGO} alt="" style={{ width: 24, height: "auto" }} />
            <span style={{ color: C.wh, fontWeight: 800, fontSize: 15 }}>{"龙虾机"}</span>
          </div>
          <p style={{ color: C.gr, fontSize: 11, margin: "0 0 4px" }}>{"全球首款开机即用的 AI 安全工作站"}</p>
          <p style={{ color: C.gr, fontSize: 11, margin: 0 }}>{"longxiaji.com"}</p>
        </div>
        <div style={{ flex: "1 1 130px" }}>
          <p style={{ color: C.gr, fontSize: 11, margin: "0 0 10px", fontWeight: 600 }}>{"快速链接"}</p>
          {[{ l: "产品介绍", p: "product" },{ l: "售后支持", p: "support" },{ l: "技能市场", p: "skills" },{ l: "用户案例", p: "cases" },{ l: "新闻资讯", p: "news" },{ l: "联系我们", p: "contact" }].map(function (n) {
            return <p key={n.p} onClick={function () { props.go(n.p); }} style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, margin: "0 0 5px", cursor: "pointer" }}>{n.l}</p>;
          })}
        </div>
        <div style={{ flex: "1 1 160px" }}>
          <p style={{ color: C.gr, fontSize: 11, margin: "0 0 10px", fontWeight: 600 }}>{"联系我们"}</p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, margin: "0 0 5px" }}>{"客服微信：扫码添加"}</p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, margin: "0 0 5px" }}>{"龙虾族微信群：扫码加入"}</p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, margin: 0 }}>{"biz@longxiaji.com"}</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "24px auto 0", paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.18)", fontSize: 11, margin: 0 }}>{"© 2026 龙虾机 LongXiaJi · 深圳智造 · 全球首发"}</p>
      </div>
    </footer>
  );
}

export default function App() {
  var ps = useState("home"); var pg = ps[0]; var setPg = ps[1];
  var ss = useState(false); var scrolled = ss[0]; var setScrolled = ss[1];
  useEffect(function () { var h = function () { setScrolled(window.scrollY > 40); }; window.addEventListener("scroll", h); return function () { window.removeEventListener("scroll", h); }; }, []);
  var go = function (p) { setPg(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style>{`
        * { font-family: 'Noto Sans SC', -apple-system, sans-serif; box-sizing: border-box; }
        body { margin: 0; }
        .hover-btn { transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .hover-btn:hover { transform: translateY(-2px) scale(1.03); filter: brightness(1.1); }
        .hover-btn:active { transform: translateY(1px) scale(0.98); }
        .img-grid { display: grid; gap: 24px; grid-template-columns: 1fr; width: 100%; max-width: 1000px; margin: 0 auto; }
        @media (min-width: 768px) { .img-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>
      <Nav pg={pg} go={go} scrolled={scrolled} />
      {pg === "home" ? <Home go={go} /> : null}
      {pg === "product" ? <Product go={go} /> : null}
      {pg === "support" ? <Support go={go} /> : null}
      {pg === "skills" ? <Skills go={go} /> : null}
      {pg === "cases" ? <Cases go={go} /> : null}
      {pg === "news" ? <News go={go} /> : null}
      {pg === "contact" ? <Contact go={go} /> : null}
      {pg === "order" ? <Order /> : null}
      {pg !== "order" ? <Ft go={go} /> : null}
    </div>
  );
}
