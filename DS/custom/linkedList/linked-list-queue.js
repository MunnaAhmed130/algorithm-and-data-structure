const LinkedListStack = require("./linked-list-tail");

// Queue DS follows FIFO principle
class LinkedListQueue {
    constructor() {
        this.list = new LinkedListStack();
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    peek() {
        return this.list.head?.value;
    }
    enqueue(value) {
        this.list.append(value);
    }
    deque() {
        return this.list.removeFromFront();
    }
    getsize() {
        return this.list.getSize();
    }
    print() {
        this.list.print();
    }
}

const queue = new LinkedListQueue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
queue.print();
// console.log("removed", queue.deque());
console.log("the first number is", queue.peek());
console.log("size of the queue is", queue.getsize());
queue.print();
