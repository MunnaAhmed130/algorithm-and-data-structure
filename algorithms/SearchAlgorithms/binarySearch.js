// let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

// in math both are ok but in computer science below equation is used to avoid integer overflow
// let middleIndex = Math.floor((leftIndex + (rightIndex - leftIndex)) / 2);

// let m = Math.floor((0 + (Number.MAX_SAFE_INTEGER - 0)) / 2);
// console.log(m, Number.MAX_SAFE_INTEGER + 2 === Number.MAX_SAFE_INTEGER + 3);

function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    // if rightIndex is arr.length - 1 then target index can be equal to rightIndex
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        let value = arr[middleIndex];
        console.log(
            leftIndex,
            rightIndex,
            "middleIndex",
            middleIndex,
            "middleNumber",
            value
        );
        if (value === target) {
            return middleIndex;
        }
        if (value > target) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

const arr = [...Array(10)].map((_, k) => k + 1);

// console.log(arr);
console.log(binarySearch(arr, 10));
// console.log(Array.from());
// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], -5));
// console.log(binarySearch([-5, 2, 4, 6, 10], 20));

// BigO = O(logn)
