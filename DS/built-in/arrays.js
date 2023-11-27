let arr = [1, 2, "Hello"];
arr.push(4);
arr.unshift(0);

arr.pop();
arr.shift();

// console.log(arr[0]);

// for of loop
// for (const item of arr) {
//     console.log(item);
// }

// map
arr.map((x) => console.log(x));

// filter()
let value = arr.filter((x) => typeof x !== "string");
console.log(value);

// forEach always returns undefined
value = arr.forEach((item) => console.log(item));

arr = [1, 2, 3];
// reduce takes first value as initial if not specified
const sum = arr.reduce((accum, current) => accum - current, 0);
console.log(sum);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// concat merges 2 or more array
console.log(arr1.concat(arr2));

const months = ["Jan", "March", "April", "June"];
// Inserts at index 1
months.splice(1, 0, "Feb");
console.log(months);

// first value is index
// second value is 0 for adding 1 for replacing  or deleting
// third value is for replacing or adding
console.log(months.splice(-3, 1));
console.log(months);

// slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(0, 3);
console.log(fruits);
console.log(citrus);
