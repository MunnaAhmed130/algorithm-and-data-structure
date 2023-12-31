class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    //shift() has a linear time complexity
    deque() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }
    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.deque();
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
