#include <iostream>

using namespace std;

int fatorial(int num);

int main() {

    int nums[5] = {4, 5, 6, 7, 8};

    for (int i = 0; i < 5; i += 1) {
        cout << "O fatorial de " << nums[i] << " vale " << fatorial(nums[i]) << "\n";
    }

    return 0;
}

int fatorial(int num) {
    if (num == 1) {
        return 1;
    }
    return num * fatorial(num - 1);
}
