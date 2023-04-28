#include <iostream>
#include <cstdlib>

using namespace std;

int main() {
    float n1, n2, res;
    char again;

    insert:

    system("cls");

    cout << "Insira a primeira nota: ";
    cin >> n1;
    cout << "Insira a segunda nota: ";
    cin >> n2;

    res = (n1 + n2) / 20 * 100;

    cout << "Aproveitamento: " << res << "\n";

    if (res > 60) {
        cout << "aluno APROVADO";
    } else if (res > 40) {
        cout << "aluno EM RECUPERACAO";
    } else {
        cout << "aluno REPROVADO";
    }

    cout << "\nDigitar nova senha?[s/n]: ";
    cin >> again;

    if (again == 's' or again == 'S') {
        goto insert;
    }

    return 0;
}
