function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    // let median = Math.round(arr.length / 2);
    // let pivot = arr[0];
    let left = [];
    let right = [];
    // console.log(pivot, median);
    // for (let i = 1; i < arr.length; i++) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // console.log(left, right);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6];
// quickSort(arr);

console.log(quickSort(arr));

// Worst case = O(n^2)
// Average case = O(nlogn)
