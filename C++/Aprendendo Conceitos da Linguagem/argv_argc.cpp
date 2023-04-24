#include <iostream>
// Biblioteca para manipulação de string
#include <string.h>
// Biblioteca para manipulação do SO
#include <stdlib.h>

using namespace std;

int main (
    // Contador argumentos passados (1 == "<Caminho do arquivo>", 2 ou + == "Argumentos foram passados")
    int argc,
    // Ponteiro onde serão armazenados os argumentos passados
    char *argv[]) {

    if (argc > 1) {
        if (!strcmp(argv[1], "sol")) {
            cout << "Vou ao clube.\n";
        } else if (!strcmp(argv[1], "nublado")) {
            cout << "Vou ao cinema.\n";
        } else {
            cout << "Vou ficar em casa.\n";
        }
    } else {
        cout << "Execute o programa passando uma condição climática como argumento.";
    }

    system("pause");

    return 0;
}
