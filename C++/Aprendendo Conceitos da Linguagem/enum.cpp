#include <iostream>

using namespace std;

int main() {

    // Fazendo dessa forma a contagem é sequencial e começa em 0
    // enum armas{fuzil, revolver, rifle, escopeta};

    // Fazendo dessa forma a contagem é sequencial e começa pelo valor recebido no primeiro item
    // enum armas{fuzil=100, revolver, rifle, escopeta};

    // Fazendo dessa forma a contagem não é sequencial e cada item possui valor definido manualmente
    enum armas{fuzil=100, revolver=8, rifle=12, escopeta=2};

    armas armaSel = fuzil;

    cout << armaSel << "\n";

    return 0;
}
