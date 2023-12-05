class Node {
    constructor(value) {
        this.value = value;
        this.prev = this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    peek() {
        return this.head.value;
    }
    getSize() {
        return this.size;
    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            // let value = this.head
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        ++this.size;
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        ++this.size;
    }
    removeFromFront() {
        if (this.isEmpty()) {
            console.log("no item to remove");
            return null;
        }
        const removedNode = this.head.value;

        if (this.size === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        --this.size;
        return removedNode;
    }
    removeFromEnd() {
        if (this.isEmpty()) {
            console.log("no item to remove");
            return null;
        }
        const removedNode = this.tail.value;
        if (this.size === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        --this.size;
        return removedNode;
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let curr = this.head;
            let values = "null<->";
            while (curr) {
                values += `${curr.value}<->`;
                curr = curr.next;
            }
            values += "null";
            console.log(values);
        }
    }
    printReverse() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let curr = this.tail;
            let values = "null<->";
            while (curr) {
                values += `${curr.value}<->`;
                curr = curr.prev;
            }
            values += "null";
            console.log(values);
        }
    }
}

const list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
list.append(0);
list.append(10);
list.append(20);
list.append(30);
console.log(list.getSize());
// list.removeFromFront();
list.print();
// list.removeFromEnd();
// list.removeFromEnd();
// list.removeFromEnd();
list.print();
list.printReverse();
console.log(list.getSize());
// console.log(list);
