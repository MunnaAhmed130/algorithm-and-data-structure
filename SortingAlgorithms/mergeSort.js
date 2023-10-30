function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    // console.log(leftArr, rightArr);
    // console.log("sort", mergeSort(leftArr), mergeSort(rightArr));

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const sortedArr = [];

    // console.log("arr values before sort", sortedArr, leftArr, rightArr);

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
            // console.log(sortedArr);
        } else {
            sortedArr.push(rightArr.shift());
            // console.log(sortedArr);
        }
    }

    // console.log("arr values after sort", sortedArr, leftArr, rightArr, "=", [
    //     ...sortedArr,
    //     ...leftArr,
    //     ...rightArr,
    // ]);

    return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, -6];
// const arr = [-6, 20, 8, -2, 4];

console.log("merge sort", mergeSort(arr));
// console.log("hello");

// BigO = O(nlogn)
