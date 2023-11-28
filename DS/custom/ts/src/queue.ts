type both = number | string;
class Queue {
    constructor(public items: Array<both> = []) {}
    enqueue(value: both) {
        this.items.push(value);
    }
    dequeue() {
        this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    peek() {
        return this.items[0];
    }
    print() {
        console.log(this.items);
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
console.log(queue);

console.log(
    "is empty -",
    queue.isEmpty(),
    "first item -",
    queue.peek(),
    "queue size -",
    queue.size()
);

queue.print();

export {};
