#include <iostream>
#include <list>

using namespace std;

int main() {

    int size = 10;
    list<int> numbers;
    list<int>::iterator it;

    for (int i = 0; i < size; i++) {
        numbers.push_front(i);
    }

    it = numbers.begin();
    advance(it, 3);
    numbers.insert(it, 951);

    numbers.erase(--it);

    // numbers.clear();

    cout << "Tamanho da lista: " << numbers.size() << "\n";

    for (int i = 0; i < size; i++) {
        cout<< numbers.front() << "\n";
        numbers.pop_front();
    }

    return 0;
}
