function climbingStaircase(n) {
    const numOfWays = [1, 2];
    for (let i = 2; i <= n; i++) {
        numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
    }
    return numOfWays[n - 1];
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));

// BigO = O(n)
