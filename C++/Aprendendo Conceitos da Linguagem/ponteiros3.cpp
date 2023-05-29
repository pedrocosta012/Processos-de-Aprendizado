#include <iostream>

using namespace std;

int main() {

    int vetor[5] = {};
    int *ptVetor;

    ptVetor = vetor;
    *ptVetor = 10;
    cout << "Valor do primeiro item do vetor: " << vetor[0] << "\n";

    *(ptVetor += 1);
    *ptVetor = 20;
    cout << "Valor do segundo item do vetor: " << vetor[1] << "\n";

    *(ptVetor += 1) = 30;
    cout << "Valor do terceiro item do vetor: " << vetor[3] << "\n";

    return 0;
}
