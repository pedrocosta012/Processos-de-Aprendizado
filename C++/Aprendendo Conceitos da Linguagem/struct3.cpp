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
    int size = 3;
    Carro *carros = new Carro[size];

    for (int i = 0; i < size; i++) {
        Carro carro;
        carros[i] = carro;
    }

    carros[0].insere("Tornado", "Vermelho", 450, 350);
    carros[1].insere("Luxo", "Preto", 250, 260);
    carros[2].insere("Padrao", "Cinza", 100, 150);

    for (int i = 0; i < size; i++) {
        carros[i].log();
    }

    return 0;
}
