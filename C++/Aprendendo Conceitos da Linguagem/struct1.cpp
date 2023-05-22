#include <iostream>

using namespace std;

// Estrutura para criação de objetos
struct Carro {
    string nome;
    string cor;
    int pot;
    int velMax;
};


int main() {

    Carro car1;

    car1.nome = "Claudinha";
    car1.cor = "Azul";
    car1.pot = 450;
    car1.velMax = 300;

    cout << "nome: " << car1.nome << "\n";
    cout << "cor: " << car1.cor << "\n";
    cout << "pot: " << car1.pot << "\n";
    cout << "velMax: " << car1.velMax << "\n";

    return 0;
}
