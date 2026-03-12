import os
import re

# CONTACT.TSX
content = open('src/pages/Contact.tsx', encoding='utf-8').read()
content = re.sub(r'role="([^"]+)"', lambda m: f'role={{t(\'team.role.{abs(hash(m.group(1)))}\', \'{m.group(1)}\')}}', content)
content = re.sub(r'title="([^"]+)"', lambda m: f'title={{t(\'team.title.{abs(hash(m.group(1)))}\', \'{m.group(1)}\')}}', content)
content = re.sub(r'quote="([^"]+)"', lambda m: f'quote={{t(\'team.quote.{abs(hash(m.group(1)))}\', \'{m.group(1)}\')}}', content)
content = re.sub(r'desc="([^"]+)"', lambda m: f'desc={{t(\'team.desc.{abs(hash(m.group(1)))}\', \'{m.group(1)}\')}}', content)
content = re.sub(r'name="([^"]+)"', lambda m: f'name={{t(\'office.name.{abs(hash(m.group(1)))}\', \'{m.group(1)}\')}}', content)
content = re.sub(r'address="([^"]+)"', lambda m: f'address={{t(\'office.addr.{abs(hash(m.group(1)))}\', \'{m.group(1)}\')}}', content)
open('src/pages/Contact.tsx', 'w', encoding='utf-8').write(content)

# SUPPORT.TSX
if os.path.exists('src/pages/Support.tsx'):
    content = open('src/pages/Support.tsx', encoding='utf-8').read()
    content = re.sub(r'question="([^"]+)"', lambda m: f'question={{t(\'faq.q.{abs(hash(m.group(1)))}\', \'{m.group(1)}\')}}', content)
    content = re.sub(r'answer="([^"]+)"', lambda m: f'answer={{t(\'faq.a.{abs(hash(m.group(1)))}\', \'{m.group(1)}\')}}', content)
    open('src/pages/Support.tsx', 'w', encoding='utf-8').write(content)

print("Done wrapping attributes.")
