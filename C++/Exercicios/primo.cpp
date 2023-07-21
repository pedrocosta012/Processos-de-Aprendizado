#include <iostream>

using namespace std;

int main() {
    int numero;
    cout << "Insira o numero que deseja saber se e primo: ";
    cin >> numero;
    if (numero <= 0) {
        cout << "Apenas numero positivos podem ser primos." << endl;
    } else if (numero == 1) {
        cout << "O numero 1 não e primo." << endl;
    } else {
        bool primo = true;
        for (int i = 2; i < numero - 1; i += 1) {
            if (numero % i == 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            cout << "O numero " << numero << " e primo." << endl;
        } else {
            cout << "O numero " << numero << " nao e primo" << endl;
        }
    }
    
    return 0;
}
