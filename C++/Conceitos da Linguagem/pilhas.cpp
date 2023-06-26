#include <iostream>
#include <stack>

using namespace std;

int main() {

    stack <string> cartas;

    // O método push insere um novo valor à pilha
    cartas.push("Rei de Espadas");
    cartas.push("Rei de Copas");
    cartas.push("Rei de Paus");
    cartas.push("Rei de Ouros");

    // O método size retorna um inteiro que corresponde a "quantos itens existem na pilha?"
    cout << "Tamanho da pilha: " << cartas.size() << "\n";

    // O método top retorna o primeiro item da pilha
    cout << "Carta do topo: " << cartas.top() << "\n";

    // O método pop remove o primeiro item da pilha
    cartas.pop();

    cout << "Uma carta foi removida!\n";

    cout << "Nova carta do topo: " << cartas.top() << "\n";

    // O método empty retorna um boleando que corresponde a circunstância "vazio?" da pilha
    while (!cartas.empty()) {
        cartas.pop();
    }

    cout << "Pilha esvaziada!\n";

    cout << "Tamanho da pilha: " << cartas.size() << "\n";

    return 0;
}
