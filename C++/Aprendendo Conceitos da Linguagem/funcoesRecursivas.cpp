#include <iostream>

using namespace std;

void contadorNR(int num);
void count_req(int num, int cont = 0);

int main() {

    contadorNR(10);

    count_req(10);

    return 0;
}

// Não recursiva
void contadorNR(int num) {
    for (int i = 0; i <= num; i += 1) {
        cout << i << "\n";
    }
}

// Recursiva
void count_req(int num, int cont) {
    cout << cont << "\n";
    if (num != cont) {
        count_req(num, cont += 1);
    }
}
