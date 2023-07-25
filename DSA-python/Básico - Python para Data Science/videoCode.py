from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By


def generate_sequences(input_list, n):
    if n == 1:
        for item in input_list:
            yield [item]
    else:
        for item in input_list:
            for sequence in generate_sequences(input_list, n-1):
                yield [item] + sequence


def join(array: list[str]) -> str:
    result = ''
    for item in array:
        result += item
    return result


def valueGenerator():
    values = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B',
        'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3',
        '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '¨', '*', '-',
        '_', '+', '=',
    ]
    n = 1
    while True:
        if n == 1:
            for value in values:
                yield join([value])
        else:
            for value in values:
                for sequence in generate_sequences(values, n-1):
                    yield join([value] + sequence)
        n += 1


navegador = webdriver.Chrome()

# for val in valueGenerator():
#     navegador.get(f'https://www.youtube.com/watch?v={next(val)}&ab_channel=CubosAcademy')
#     soup = BeautifulSoup(req_result.content.decode('utf-8'), 'html.parser')
#     print(soup.find('body'))

# navegador.get('https://www.youtube.com/watch?v=aa&ab_channel=CubosAcademy')
navegador.get('https://www.youtube.com/watch?v=aa&ab_channel=CubosAcademy')
sleep(5)
try:
    video_title = navegador.find_element(
        By.XPATH,
        '//*[@id="title"]/h1/yt-formatted-string'
    )
    if video_title:
        print(video_title)
except webdriver.Stacktrace:
    print('Não encontrado')
