function binarySearch(arr, target) {
    let lowIndex = 0;
    let highIndex = arr.length;
    do {
        let middleIndex = Math.floor(lowIndex + (highIndex - lowIndex) / 2);
        let value = arr[middleIndex];
        console.log(
            lowIndex,
            highIndex,
            "middleIndex",
            middleIndex,
            "middleNumber",
            value
        );
        if (value === target) {
            return middleIndex;
        }
        if (value > target) {
            highIndex = middleIndex;
        } else {
            lowIndex = middleIndex + 1;
        }
        // if highIndex is arr.length then target will never be equal to highIndex
        // because highIndex is always bigger than tha array's biggest index value
        // and for this reason in do block high is exculsive & low is inclusive
    } while (lowIndex < highIndex);

    return false;
}

const arr = [...Array(10)].map((_, k) => k + 1);

// console.log(arr);
console.log(binarySearch(arr, 10));
