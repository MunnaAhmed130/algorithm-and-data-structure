const obj = {
    name: "Adam",
    age: 25,
    "is-tall": true,
    sayMyName: function () {
        console.log(this.name);
    },
};

obj.hobby = "football";
delete obj.hobby;

console.log(obj.name);
// a good example of using bracket notation
console.log(obj["is-tall"]);
console.log(obj);
obj.sayMyName();

// Object.keys(), .values(), entries()
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
