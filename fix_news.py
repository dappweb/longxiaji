import re

content = open('src/pages/News.tsx', encoding='utf-8').read()
content = content.replace('{news.type}', '{t(`news.items.${news.id}.type` as any, news.type)}')
content = content.replace('{news.title}', '{t(`news.items.${news.id}.title` as any, news.title)}')
content = content.replace('{news.summary}', '{t(`news.items.${news.id}.summary` as any, news.summary)}')
content = content.replace("alert('详情内容正在建设中，敬请期待！')", "alert(t('news.coming_soon', '详情内容正在建设中，敬请期待！'))")
open('src/pages/News.tsx', 'w', encoding='utf-8').write(content)

print("Updated News.tsx")
