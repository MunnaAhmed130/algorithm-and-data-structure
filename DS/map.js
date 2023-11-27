const map = new Map([
    ["a", 1],
    ["b", 2],
    [1, 3],
    [2, 4],
]);

map.set(3, 5);
map.delete(3);
// map.clear();
console.log(map);
console.log(map.has("a"));
console.log(map.size);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
