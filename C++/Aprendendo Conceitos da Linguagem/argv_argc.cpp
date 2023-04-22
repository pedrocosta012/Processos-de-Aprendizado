#include <iostream>
#include <string.h>
#include <stdlib.h>

using namespace std;

int main (int argc, char *argv[]) {

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
