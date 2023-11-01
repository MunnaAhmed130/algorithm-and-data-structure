const largestPermutation = (arr, steps) => {
    let max = arr.length;
    let pos = {};

    for (let k = 0; k < max; k++) {
        pos[arr[k]] = k;
    }

    let i = 0;
    console.log(pos, arr);
    // let count = 0;
    while (steps && i < arr.length - 1) {
        let j = pos[max]; // pos of max num { '1': 3, '2': 1, '3': 0, '4': 2, '5': 4 }
        console.log("i =", i, "j =", j);

        if (i != j) {
            steps--;
            count++;
            // console.log(arr[i], pos[arr[i]]);
            let temp;
            temp = arr[i]; // temp = arr[0]/3
            arr[i] = arr[j]; // arr[0] = arr[4]/5
            arr[j] = temp; // arr[4]  = 3

            temp = pos[arr[i]]; // temp = pos[3]/0
            pos[arr[i]] = pos[arr[j]]; // pos[3] = 4
            pos[arr[j]] = temp; // pos[5] = 0
        }

        i++;
        max--;
        console.log(pos, arr);
        console.log(i, steps, max);
    }
    return arr;
    // return [arr, count];
};

const array = [3, 2, 4, 1, 5];
// const array = [3, 2, 4, 5, 1];
// 3
console.log(largestPermutation(array, 10));
