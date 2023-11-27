const set = new Set([1, 2, 2, 3]);
set.add(4);
// set.add(54);
console.log(set.has(4));
set.delete(3);
console.log(set.size);
// set.clear();

console.log(set); // Set(3) { 1, 2, 3 }
for (const item of set) {
    console.log(item);
}
