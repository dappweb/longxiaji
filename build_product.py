import re

with open('src/App_old.txt', 'r', encoding='utf-8') as f:
    text = f.read()

howitworks_match = re.search(r'<section id="how-it-works"(.*?)</section>', text, re.DOTALL)
specs_match = re.search(r'<section id="specs"(.*?)</section>', text, re.DOTALL)
cards = re.search(r'(function StepCard.*?)function SkillCard', text, re.DOTALL).group(1)

product_content = f"""import React from 'react';
import {{ useNavigate }} from 'react-router-dom';
import {{ motion }} from 'motion/react';
import {{ Smartphone, Server, Briefcase, Zap, Cpu, Wifi }} from 'lucide-react';

export default function Product() {{
  const navigate = useNavigate();
  return (
    <>
      <section id="how-it-works"{howitworks_match.group(1)}</section>
      <section id="specs"{specs_match.group(1)}</section>
      
      <div className="text-center py-12 pb-24 bg-white">
        <button onClick={{() => navigate('/preorder')}} className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg">
          立即预定
        </button>
      </div>
    </>
  );
}}

{cards}
"""

with open('src/pages/Product.tsx', 'w', encoding='utf-8') as f:
    f.write(product_content)

print('Product page generated')
