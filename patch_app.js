const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Navbar tabs
code = code.replace(
  /<a href="#features".*?<\/a>\s*<a href="#how-it-works".*?<\/a>\s*<a href="#skills".*?<\/a>\s*<a href="#specs".*?<\/a>/,
  ""
);
// replace again if it was already replaced
code = code.replace(
  /<a href="#features".*?>首页<\/a>(\s*)<a href="#how-it-works".*?>产品介绍<\/a>(\s*)<a href="#skills".*?>售后支持<\/a>(\s*)<a href="#specs".*?>技能市场<\/a>/,
  ""
);

code = code.replace(
  /<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">.*?<\/div>/s,
  <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#home" className="hover:text-red-600 transition-colors">首页</a>
              <a href="#features" className="hover:text-red-600 transition-colors">产品介绍</a>
              <a href="#support" className="hover:text-red-600 transition-colors">售后支持</a>
              <a href="#skills" className="hover:text-red-600 transition-colors">技能市场</a>
              <a href="#cases" className="hover:text-red-600 transition-colors">用户案例</a>
              <a href="#news" className="hover:text-red-600 transition-colors">新闻资讯</a>
              <a href="#contact" className="hover:text-red-600 transition-colors">联系我们</a>
            </div>
);


// Hero badge
code = code.replace(
  /迪拜首发，全球火爆 —— 中国智造 AI 硬件/,
  \全球首款开机即用的 AI 安全工作站\
);

// Hero Title
code = code.replace(
  /把 AI 助理.*?<\/h1>/s,
  把 AI 助理 <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">请回你的桌面</span>
              <br className="hidden sm:block" />
              <span className="text-red-600 text-4xl md:text-5xl mt-4 block">别让它住在你的电脑里</span>
            </h1>
);


fs.writeFileSync('src/App.tsx', code);
