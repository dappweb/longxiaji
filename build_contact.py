import re

with open('src/App_old.txt', 'r', encoding='utf-8') as f:
    text = f.read()

founders_match = re.search(r'<section id="founders"(.*?)</section>', text, re.DOTALL)
founder_card = re.search(r'(function FounderCard.*?\n\})', text, re.DOTALL).group(1)

content = f"""import React from 'react';
import {{ useNavigate }} from 'react-router-dom';

export default function Contact() {{
  const navigate = useNavigate();
  return (
    <>
      <section id="founders"{founders_match.group(1)}</section>
      
      <div className="text-center py-12 pb-24 bg-slate-50">
        <button onClick={{() => navigate('/preorder')}} className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg">
          立即预定
        </button>
      </div>
    </>
  );
}}

{founder_card}
"""

with open('src/pages/Contact.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Contact page generated')
