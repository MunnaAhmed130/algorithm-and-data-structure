"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor(items = {}, rear = 0, front = 0) {
        this.items = items;
        this.rear = rear;
        this.front = front;
    }
    enqueue(value) {
        this.items[this.rear] = value;
        this.rear++;
    }
    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    peek() {
        this.items[this.front];
    }
    isEmpty() {
        return this.rear - this.front === 0;
    }
    size() {
        return this.rear - this.front;
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
queue.dequeue();
queue.dequeue();
queue.print();
queue.print();
console.log("is empty -", queue.isEmpty(), "first item -", queue.peek(), "queue size -", queue.size());
