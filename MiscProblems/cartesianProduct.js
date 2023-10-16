function cartesianProduct(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            // console.log(arrA[i], arrB[j]);
            result.push([arr1[i], arr2[j]]);
            // console.log(i, j);
        }
    }
    return result;
}

console.log(cartesianProduct([1, 2], [3, 4, 5]));

// BigO = O(mn)
