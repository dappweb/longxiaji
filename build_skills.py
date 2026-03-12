import re

with open('src/App_old.txt', 'r', encoding='utf-8') as f:
    text = f.read()

skills_match = re.search(r'<section id="skills"(.*?)</section>', text, re.DOTALL)
skill_card = re.search(r'(function SkillCard.*?)function FounderCard', text, re.DOTALL).group(1)

content = f"""import React from 'react';
import {{ useNavigate }} from 'react-router-dom';
import {{ MessageSquare, Image as ImageIcon, Briefcase, Zap, CheckCircle2 }} from 'lucide-react';

export default function Skills() {{
  const navigate = useNavigate();
  return (
    <>
      <section id="skills"{skills_match.group(1)}</section>
      
      <div className="text-center py-12 pb-24 bg-slate-50">
        <button onClick={{() => navigate('/preorder')}} className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg">
          立即预定
        </button>
      </div>
    </>
  );
}}

{skill_card}
"""

with open('src/pages/Skills.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Skills page generated')
