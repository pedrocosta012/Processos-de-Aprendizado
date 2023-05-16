#include <iostream>
#include <queue>

using namespace std;

int main() {

    queue <string> cartas;

    cartas.push("Rei de Espadas");
    cartas.push("Rei de Copas");
    cartas.push("Rei de Paus");
    cartas.push("Rei de Ouros");

    cout << "Tamanho da fila: " << cartas.size() << "\n";
    cout << "Primeiro item da fila: " << cartas.front() << "\n";
    cout << "Ultimo item da lista: " << cartas.back() << "\n";

    while (!cartas.empty()) {
        string primeira = cartas.front();
        cout << "Primeira carta da fila: " << primeira << "\n";
        cartas.pop();
        cout << primeira << " removido da fila.\n";
    }

    cout << "Fila de cartas vazia!";

    return 0;
}
