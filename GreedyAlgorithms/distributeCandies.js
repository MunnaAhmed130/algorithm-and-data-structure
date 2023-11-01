const distributeCandies = (ratings) => {
    let arrlength = ratings.length;

    const data = ratings.map((i, e) => [i, e]);

    // for (let [index, rating] of ratings.entries()) {
    //     data.push([rating, index]);
    // }
    data.sort((a, b) => a[0] - b[0]);

    // candies = Array.from({ length: arrlength }, () => 1);
    // candies = Array.from(Array(arrlength), () => 1);
    candies = [...Array(arrlength)].map(() => 1);

    // console.log(data, arrlength, candies);

    for (let [_, i] of data) {
        if (i > 0 && ratings[i] > ratings[i - 1]) {
            candies[i] = Math.max(candies[i], candies[i - 1] + 1);
        }

        if (i < arrlength - 1 && ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
        // console.log(i);
    }
    return candies.reduce((a, b) => a + b, 0);
};

const array = [1, 2, 7, 4, 3, 3, 1];
console.log(distributeCandies(array));
