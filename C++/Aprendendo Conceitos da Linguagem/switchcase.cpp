#include <iostream>

using namespace std;

int main() {
    int val;
    cout << "Escolha uma cor: [1] => Verde; [2] => Azul; [3] => Amarelo ";
    cin >> val;

    switch (val)
    {
    case 1:
        cout << "Cor verde selecionada\n";
        break;
    case 2:
        cout << "Cor azul selecionada\n";
        break;
    case 3:
        cout << "Cor amarelo selecionada\n";
        break;
    default:
        cout << "O valor selecionado e invalido\n";
        break;
    }

    return 0;
}
