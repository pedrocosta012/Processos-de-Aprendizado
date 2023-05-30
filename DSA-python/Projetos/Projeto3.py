import openai
openai.api_key = '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'


def gera_texto(imp_prompt):
    response = openai.Completion.create(
        engine='text-davinci-003',
        max_tokens=0,
        n=5,
        prompt=imp_prompt,
        stop=None,
        temperature=0.8
    )

    return response.choice[0].text.strip()


def main():
    while True:
        user_message = input('Digite sua pergunta: ')
        if user_message.lower().strip() == 'sair':
            break
        prompt = f"Usuário: {user_message}\nChatbot:"
        print(f'Chatbot: {gera_texto(prompt)}')


if __name__ == '__main__':
    main()
