#include <iostream>

using namespace std;

void sum(int *var, int valor);
void vetorToZero(int *vet);

int main() {

    int num = 15;

    int vetor[5] = {};
    vetorToZero(vetor);

    for (int i = 0; i < 5; i += 1) {
        cout << vetor[i] << "\n";
    }

    sum(&num, 15);

    cout << num << "\n";

    return 0;
}

void sum(int *var, int valor) {
    *var += valor;
}

void vetorToZero(int *vet) {
    *vet = 0;
    *(vet += 1) = 0;
    *(vet += 1) = 0;
    *(vet += 1) = 0;
    *(vet += 1) = 0;
}
