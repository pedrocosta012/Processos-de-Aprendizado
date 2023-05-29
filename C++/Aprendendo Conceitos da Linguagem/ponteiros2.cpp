#include <iostream>

using namespace std;

int main() {

    int vetor[5] = {};
    int *ptVetor;

    ptVetor = vetor;  // Que equivale a "int *ptVetor = &vetor[0];"

    cout << "Endereco do primeiro item do vetor: " << ptVetor << "\n";

    ptVetor = &vetor[1];  // armazena o endereço do segundo item do vetor
    cout << "Endereco do segundo item do vetor: " << ptVetor << "\n";

    *(ptVetor += 1);  // Incrementa 1 ao endereço armazenado pelo ponteiro fazendo com que ele armazene o endereço do terceiro item do vetor
    cout << "Endereco do terceiro item do vetor: " << ptVetor << "\n";

    return 0;
}

/*
Ps: Ao auto-incrementar, o cálculo
*/
