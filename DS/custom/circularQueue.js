class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        // currentLength keeps track of the elements
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(elem) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = elem;
            this.currentLength++;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength--;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }

    peek() {
        // console.log(this.front);
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            let i;
            let str = "";
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + "";
            }
            str += this.itemsp[i];
            console.log(str);
        }
    }
}

const queue = new CircularQueue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.dequeue();
console.log(queue.isEmpty());
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());
queue.enqueue(70);
queue.dequeue();

console.log(queue.items);

// const rear = 0;
// value for 1,2,3,4,5 is 1,2,3,4,0
// let value = (rear + 5) % 5;
// console.log(value);

// creates array with undefined holes
// arr = new Array(4);
// undefined
// console.log(arr[1]);
