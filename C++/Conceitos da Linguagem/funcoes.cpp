#include <iostream>

using namespace std;

void texto();
void logSoma(int n1, int n2);
int soma(int n1, int n2);

int main() {
    texto();

    logSoma(23, 77);

    int res = soma(125, 75);

    cout << res << "\n";

    return 0;
}

void texto() {
    cout << "Essa funcao nao retorna nada.\n";
}

void logSoma(int n1, int n2) {
    cout << "A soma de " << n1 << " com " << n2 << " resulta em: " << n1 + n2 << "\n";
}

int soma(int n1, int n2) {
    return n1 + n2;
}
