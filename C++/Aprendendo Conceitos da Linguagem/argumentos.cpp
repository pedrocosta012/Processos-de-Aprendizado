#include <iostream>

using namespace std;

// Define um valor padrão para o argumento
// Desse jeito o argumento deixa de ser obrigatório
void imp(string text = "");

int main() {

    imp("Pedro");

    imp();

    return 0;
}

void imp(string text) {
    cout << text << "\n";
}
