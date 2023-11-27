class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    // both enqueue & dequeue has linear time complexity
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
        console.log(this.rear);
        // return this.rear
    }
    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        console.log(this.front);
        return item;
    }
    isEmpty() {
        console.log(this.rear - this.front === 0);
        return this.rear - this.front === 0;
    }
    peek() {
        console.log(this.items[this.front]);
        return this.items[this.front];
    }
    size() {
        console.log(this.rear - this.front);
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

console.log(
    "is empty -",
    queue.isEmpty(),
    "first item -",
    queue.peek(),
    "queue size -",
    queue.size()
);
