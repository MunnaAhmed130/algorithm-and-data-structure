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
}

// creates array with undefined holes
// arr = new Array(4);
// undefined
// console.log(arr[1]);
