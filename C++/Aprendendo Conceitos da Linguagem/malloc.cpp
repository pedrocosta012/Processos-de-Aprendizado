#include <iostream>
#include <stdio.h>  // Função gets(análoga ao "cin" para leitura de input do usuário)
#include <stdlib.h>  // Função malloc(função que permite alocar memória dinamecamente)

using namespace std;

int main() {

    char *nome;
    nome = (char *)malloc(sizeof(char));

    gets(nome);

    cout << nome << "\n";

    return 0;
}
/*
(char *): Converte o retorno para um ponteiro do tipo char;
malloc: Função que aloca memória dinamicamente, mas precisa receber o tamanho de cada bloco de memória que será alocado;
sizeof(<tipo da variável cuja memória será alocada dinamicamente>): No contexto, retorna para a função malloc o tamanho do bloco que deve ser alocado;
*/
