const largestPermutation = (arr, steps) => {
    let max = arr.length;
    let pos = {};

    for (let k = 0; k < max; k++) {
        pos[arr[k]] = k;
    }

    let i = 0;
    console.log(pos, i, arr);

    while (steps && i < arr.length) {
        let j = pos[max];
        // console.log(pos, "i =", i, "j =", j);

        if (i == j) {
            continue;
        } else {
            steps--;

            let temp;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            temp = pos[arr[i]];
            pos[arr[i]] = pos[arr[j]];
            pos[arr[j]] = temp;
        }

        i++;
        max--;
        console.log(i, max);
    }
    return arr;
};

// const array = [3, 2, 4, 1, 5];
const array = [3, 2, 4, 5, 1];
console.log(largestPermutation(array, 1));
