import os, re, json

pattern = re.compile(r't\(([`\'"])([^\'"`]+?)\1,\s*([`\'"])(.*?)\3\)')
extracted = {}

for root, _, files in os.walk('src'):
    for f in files:
        if f.endswith('.tsx'):
            content = open(os.path.join(root, f), encoding='utf-8').read()
            for match in pattern.findall(content):
                key = match[1]
                val = match[3]
                extracted[key] = val

with open('missing_keys.json', 'w', encoding='utf-8') as out:
    json.dump(extracted, out, ensure_ascii=False, indent=2)

print("Done")
