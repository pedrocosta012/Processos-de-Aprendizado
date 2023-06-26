#include <iostream>

using namespace std;

int main() {

    string *ptVeiculo, veiculo = "Carro";

    ptVeiculo = &veiculo;  // Passando o endereço da variável veiculo mara o ponteiro ptVeiculo

    // Endereço de memória da variável veiculo
    cout << ptVeiculo << "\n";

    // Valor da variável veiculo
    cout << *ptVeiculo << "\n";

    // Alterando valor da variável através do ponteiro
    *ptVeiculo = "Moto";

    // Valor alterado no ponteiro
    cout << *ptVeiculo << "\n";

    // Valor alterado na variável
    cout << veiculo << "\n";

    return 0;
}
/*
Ps: Cada ponteiro deve ter o mesmo tipo da variável cujo endereço de memória ele armazenará.
*/
