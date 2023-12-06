const maximalSet = (arr) => {
    arr.sort((a, b) => a[1] - b[1]);
    let [prev_s, prev_e] = arr[0];
    console.log(arr);
    // console.log(prev_s, arr[0]);

    let count = 1;
    for (const [s, e] of arr) {
        // if (s <= prev_e) {
        //     continue;}
        if (prev_e < s) {
            prev_s = s;
            prev_e = e;
            count++;
        }
    }
    return count;
};

let arr = [
    [1, 4],
    [2, 3],
    [4, 6],
    [8, 9],
];

console.log(maximalSet(arr));
