const distributeCandies = (ratings) => {
    let arrlength = ratings.length;

    // this returns a array of sub arrays containing element and index
    const data = ratings.map((e, i) => [e, i]);

    // sorted data array helps find the smallest values to compare
    data.sort((a, b) => a[0] - b[0]);

    // candies = Array.from({ length: arrlength }, () => 1);
    // candies = Array.from(Array(arrlength), () => 1);
    candies = [...Array(arrlength)].map(() => 1);

    console.log(data);

    for (let [_, i] of data) {
        // console.log("val", _, "index", i, "candies", candies[i]);
        console.log("val", ratings[i], "index", i, "candies", candies[i]);

        if (i > 0 && ratings[i] > ratings[i - 1]) {
            // this checks 1 to arrlength - each with its left side index
            console.log(candies[i], candies[i - 1] + 1);
            candies[i] = Math.max(candies[i], candies[i - 1] + 1);
            console.log("max", candies[i], candies);
        }

        if (i < arrlength - 1 && ratings[i] > ratings[i + 1]) {
            // this checks 0 to last index - each with its right side index
            console.log("maxl", candies[i], candies[i + 1] + 1);
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
            console.log("maxl", candies[i], candies);
        }
    }

    return candies.reduce((a, b) => a + b, 0);
};

let array = [1, 2, 7, 4, 3, 3, 1];
// let array = [1, 3, 7, 1];
// array = [1, 3, 7, 4, 3, 6];
// array = [3, 1, 7, 4, 3, 6];
console.log(distributeCandies(array));
