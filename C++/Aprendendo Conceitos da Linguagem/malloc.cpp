#include <iostream>
#include <stdio.h>  // Função gets
#include <stdlib.h>  // Função malloc

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
