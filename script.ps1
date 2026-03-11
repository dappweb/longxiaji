
$content = Get-Content -Raw -Path src/App.tsx
$content = $content -replace "核心特性", "首页"
$content = $content -replace "三步上手", "产品介绍"
$content = $content -replace "技能中心", "售后支持"
$content = $content -replace "硬件规格", "技能市场"
$content = $content -replace "预装 OpenClaw 系统的消费级 AI 硬件平台。告别翻墙、API Key 和繁琐配置。开机即用，三步连通微信，你的 24 小时私人 AI 助理。", "AI 需要你电脑的完整 Root 权限——你的银行密码、聊天记录、工作文件全部暴露。给它一台独立的机器，别拿你的电脑冒险。插电即用，3 分钟上手。"
$content = $content -replace "全球首款开机即用的 AI 安全工作站", "别让它住在你的电脑里"
$content = $content -replace "把 AI 助理", "把 AI 助理" 
Set-Content -Path src/App.tsx -Value $content

