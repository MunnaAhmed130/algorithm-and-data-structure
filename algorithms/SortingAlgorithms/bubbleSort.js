// optimized
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        // console.log(swapped);
        console.log(arr);
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // console.log(arr);
                // condition for ascending or descending
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
                // console.log(swapped);
            }
        }
    } while (swapped);
}

// const arr = [8, 20, -2, 4, -6];
const arr = [-6, -2, 4, 20, 8];
bubbleSort(arr);

// console.log(arr);

// BigO = O(n^2)
// Double loop
