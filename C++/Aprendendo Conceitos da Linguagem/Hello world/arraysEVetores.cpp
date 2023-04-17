#include <iostream>

using namespace std;

int main () {
  int vetor[10];

  cout << vetor << "\n";

  vetor[0] = 10;

  for (int index = 0; index < 10; index++) {
    int valor = vetor[index];
    cout << valor << "\n";
  }

  return 0;
}
