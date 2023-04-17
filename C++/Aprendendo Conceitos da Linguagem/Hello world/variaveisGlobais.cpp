#include <iostream>

using namespace std;

int main() {
  int n1, n2;
  double res1;

  n1 = 11;
  n2 = 3;

  res1 = n1 / n2;

  cout << "Divis: " << res1 << "\n";
  for (int i = 0; i < n1; i++)
  {
    res1++;
  }

  cout << "Divis com soma: " << res1 << "\n";

  return 0;
}
