from os import path, listdir, system
from flask import jsonify
from json import loads
from rich import print

aqui = path.abspath('.')
pasta = listdir(aqui).pop()
filter_func = (lambda x: x.endswith('.ipynb'))
files = filter(filter_func, listdir(path.join(pasta)))
for file in files:
    file_path = path.join(f'{aqui}/Noções da Linguagem/{file}')
    print(file_path)
    with open(file_path, "r", encoding='utf-8') as file:
        file_content = file.read()
        file_dict = loads(file_content)
        cells_without_outs = []
        for cell in file_dict['cells']:
            if cell['cell_type'] == "markdown":
                cells_without_outs.append(cell)
            else:
                if "execution_count' in cell:
                    cell.pop('execution_count", None)
                if "outputs' in cell:
                    cell['outputs'] = []
                cells_without_outs.append(cell)
        file_dict['cells'] = cells_without_outs
    with open('prévia.txt", "w", encoding='utf-8') as file2:
        print(file_dict, file=file2)
    with open('prévia.txt", "r", encoding='utf-8') as file3:
        converted = file3.read()
        jsonifyed = converted.replace("'", ""')
    with open(file_path, "w", encoding='utf8') as file4:
        print(jsonifyed, file=file4)
