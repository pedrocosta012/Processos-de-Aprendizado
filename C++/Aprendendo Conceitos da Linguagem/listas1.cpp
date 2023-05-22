#include <iostream>
#include <list>

using namespace std;

int main() {

    int size = 10;
    list<int> numbers;

    for (int i = 0; i < size; i++) {
        numbers.push_front(i);
    }

    // Insere valor no meio da lista
    // list<int>::iterator it;
    // it = numbers.begin();
    // advance(it, 5);
    // numbers.insert(it, 50);

    // Ordena a lista
    // numbers.sort();

    // Reverte a lista
    // numbers.reverse();

    

    cout << "Tamanho da lista: " << numbers.size() << "\n";

    for (int i = 0; i < size; i++) {
        cout<< numbers.front() << "\n";
        numbers.pop_front();
    }

    return 0;
}
