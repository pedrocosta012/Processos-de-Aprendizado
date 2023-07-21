#include <iostream>

using namespace std;

int main() {
    int idade = 25;

    if (idade <= 0) {
        cout << "Voce nem nasceu" << endl;
    } else if (idade >= 120) {
        cout << "Vai sonhando" << endl;
    } else if (idade >= 18) {
        cout << "Voce e maior de idade" << endl;
    } else {
        cout << "Voce e menor de idade" << endl;
    }
    return 0;
}
