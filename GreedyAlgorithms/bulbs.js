function bulbOn(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] === 0) {
            arr[i] = 1;
            count++;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === 1) {
                    arr[j] = 0;
                } else {
                    arr[j] = 1;
                }
            }
        }
    }
    console.log(arr, count);
}

const testArr = [0, 1, 1];
const testArr2 = [0, 1, 0, 1, 1, 0, 1, 1];

bulbOn(testArr2);

// time = O(n^2) quadratic
