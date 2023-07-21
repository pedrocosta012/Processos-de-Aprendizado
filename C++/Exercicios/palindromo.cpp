#include <iostream>
#include <string>
// #include <locale>

using namespace std;

string inverteFrase(string frase);
string removeWhiteSpaces(string phrase);

int main() {
    string frase;
    cout << "Insira a frase/palavra para checar se ela é um palíndromo: ";
    getline(cin, frase);
    string fraseInvertida = inverteFrase(frase);

    if (removeWhiteSpaces(frase) == removeWhiteSpaces(fraseInvertida)) {
        cout << "Essa frase é um palíndromo" << endl;
    } else {
        cout << "Essa frase não é um palíndromo" << endl;
    }
    return 0;
}

string inverteFrase(string frase) {
    string fraseInvertida = "";
    for (int i = frase.length() - 1; i >= 0; i -= 1) {
        fraseInvertida += frase[i];
    }
    return fraseInvertida;
}

string removeWhiteSpaces(string phrase) {
    string phraseWithoutWhiteSpaces = "";
    for (int i = 0; i < (int)phrase.length(); i += 1) {
        if (phrase[i] != ' ') {
            phraseWithoutWhiteSpaces += phrase[i];
        }
    }
    return phraseWithoutWhiteSpaces;
}
