with open('stories.js', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # ES
    ("{ id: 'nubecilla', nombre: 'Nubecilla Llorona'", "{ id: 'honguito', nombre: 'Honguito Parlante', emoji: '\U0001f344\U0001f4ac', tipo: 'personaje', genero: 'm'"),
    ("{ id: 'sombra', nombre: 'Sombra Traviesa'",       "{ id: 'caracol',  nombre: 'Caracol Baboso',      emoji: '\U0001f40c\U0001f4a7', tipo: 'personaje', genero: 'm'"),
    # EN
    ("{ id: 'crybcloud', nombre: 'Crying Cloud'",        "{ id: 'talkingmushroom', nombre: 'Talking Mushroom', emoji: '\U0001f344\U0001f4ac', tipo: 'personaje', genero: 'm'"),
    ("{ id: 'mischievshadow', nombre: 'Mischief Shadow'","{ id: 'slimysnail',       nombre: 'Slimy Snail',      emoji: '\U0001f40c\U0001f4a7', tipo: 'personaje', genero: 'm'"),
    # FR
    ("{ id: 'nuagepleur', nombre: 'Nuage Pleurnicheur'", "{ id: 'champiparlant', nombre: 'Champignon Parlant', emoji: '\U0001f344\U0001f4ac', tipo: 'personaje', genero: 'm'"),
    ("{ id: 'ombrejoueuse', nombre: 'Ombre Joueuse'",    "{ id: 'limaconbaveux', nombre: 'Lima\u00e7on Baveux', emoji: '\U0001f40c\U0001f4a7', tipo: 'personaje', genero: 'm'"),
    # DE
    ("{ id: 'weinwolke', nombre: 'Weinende Wolke'",         "{ id: 'sprechpilz',      nombre: 'Sprechender Pilz',   emoji: '\U0001f344\U0001f4ac', tipo: 'personaje', genero: 'm'"),
    ("{ id: 'schabernack', nombre: 'Schabernak-Schatten'",   "{ id: 'schleimschnecke', nombre: 'Schleimige Schnecke', emoji: '\U0001f40c\U0001f4a7', tipo: 'personaje', genero: 'f'"),
    # PT
    ("{ id: 'nuvemchoro', nombre: 'Nuvem Choro'",   "{ id: 'cogumfalante', nombre: 'Cogumelo Falante', emoji: '\U0001f344\U0001f4ac', tipo: 'personaje', genero: 'm'"),
    ("{ id: 'sombratrav', nombre: 'Sombra Travessa'","{ id: 'caracolbab',   nombre: 'Caracol Babento',  emoji: '\U0001f40c\U0001f4a7', tipo: 'personaje', genero: 'm'"),
]

for old_prefix, new_prefix in replacements:
    if old_prefix in content:
        idx = content.find(old_prefix)
        end = content.find('}', idx)
        content = content[:idx] + new_prefix + content[end:]
        print(f'OK: {old_prefix[:50]}')
    else:
        print(f'NOT FOUND: {old_prefix[:50]}')

with open('stories.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('DONE')
