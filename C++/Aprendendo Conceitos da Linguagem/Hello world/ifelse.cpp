#include <iostream>

using namespace std;

int main() {
  int idade = -5;

  if (idade <= 0) {
    cout << "Voce nem nasceu";
  } else if (idade >= 120) {
    cout << "Vai sonhando";
  } else if (idade >= 18) {
    cout << "Voce e maior de idade";
  } else {
    cout << "Voce e menor de idade";
  }
  return 0;
}
