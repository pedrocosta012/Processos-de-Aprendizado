#include <iostream>

using namespace std;

int main() {
  int count;
  count = 0;
  
  // Executa primeiro e compara depois (diferente do while)
  do {
    cout << "Isso funciona";
  } while (count != 0);
  
  return 0;
}
