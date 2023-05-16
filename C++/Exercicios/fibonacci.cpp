#include <iostream>

using namespace std;

int fibonacci(int num);

int main() {

    int nums[5] = {4, 5, 6, 7, 8};

    for (int i = 0; i < 5; i += 1) {
        cout << "O item " << nums[i] << " da sequencia de fibonacci vale " << fibonacci(nums[i]) << "\n";
    }

    return 0;
}

int fibonacci(int num) {
    if (num == 1 || num == 2) {
        return num - 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
