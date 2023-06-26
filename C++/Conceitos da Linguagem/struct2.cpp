#include <iostream>

using namespace std;

struct Carro {
    string nome;
    string cor;
    int pot;
    int velMax;

    void insere(string st_nome, string st_cor, int st_pot, int st_velMax) {
        nome = st_nome;
        cor = st_cor;
        pot = st_pot;
        velMax = st_velMax;
    };

    void log() {
        cout << "==========================\n";
        cout << "nome: " << nome << "\n";
        cout << "cor: " << cor << "\n";
        cout << "pot: " << pot << "\n";
        cout << "velMax: " << velMax << "\n";
        cout << "==========================\n";
    }
};


int main() {

    Carro car1, car2;

    car1.insere("Claudinha", "Azul", 450, 300);

    car2.insere("Tornado", "Preto", 550, 360);

    car1.log();
    car2.log();

    return 0;
}
