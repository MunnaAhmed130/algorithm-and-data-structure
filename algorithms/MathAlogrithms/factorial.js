function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
        // console.log(i, result);
    }
    return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4)); // 4 x 3 x 2 x 1 = 24
console.log(factorial(5)); // 5 x 4 x 3 x 2 x 1 = 120

// in here BigO = O(n)/ linear time complexity
