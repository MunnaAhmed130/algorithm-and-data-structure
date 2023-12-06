// find the biggest product of 3 numbers in an array
const highestProduct = (arr) => {
    arr.sort((a, b) => a - b);
    let len = arr.length;
    // largest 3 numbers/ at the end of the array
    let hi3 = arr[len - 1] * arr[len - 2] * arr[len - 3];
    // lowest/first 2 number and highest/last 1 number
    let low2hi1 = arr[0] * arr[1] * arr[len - 1];
    return Math.max(hi3, low2hi1);
};

let arr = [3, 4, 5, -2, -5, 0, 0, 0, -5, -1];

// console.log(arr, hi3, low2hi1);
console.log(highestProduct(arr));
