let numbers = [1, 4, 1, 2, 7, 5, 2, 25];
let count = [];
let output = [];
let i = 0;

let max = Math.max(...numbers);
console.log("max", max);

// initialize counter
for (i = 0; i <= max; i++) {
    count[i] = 0; //
}

console.log("initialize counter", count);

// initialize output array
for (i = 0; i < numbers.length; i++) {
    output[i] = 0;
}

console.log("initialize output", output);

for (i = 0; i < numbers.length; i++) {
    count[numbers[i]]++;
}

console.log(count);

for (i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
}

console.log(count);

for (i = numbers.length - 1; i >= 0; i--) {
    output[--count[numbers[i]]] = numbers[i];
}

console.log(output);

// output sorted array
for (i = 0; i < output.length; i++) {
    console.log(output[i]);
}

// console.log(max, count, output);
