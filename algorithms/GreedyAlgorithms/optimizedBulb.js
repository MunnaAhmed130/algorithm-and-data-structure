function optimizedBulb(arr) {
    let cost = 0;
    for (let element of arr) {
        // if cost is odd change element
        if (cost % 2 == 1) {
            element = Number(!element);
        }

        // if element is 0 incrase cost by 1
        if (element == 0) {
            cost++;
        }
    }
    return cost;
}

const testArr = [0, 1, 0, 1, 1, 0, 1, 1];

console.log(optimizedBulb(testArr));

// time = O(n) only 1 loop
// space = O(1) for storing cost variable
