// node class & linkedList class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    isSize() {
        return this.size;
    }
    // O(n)
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let lastNode = this.head;
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
            lastNode.next = node;
        }
        ++this.size;
    }

    insert(value, index) {
        if (value < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            // console.log(prev);
            for (let i = 0; i < index - 1; ++i) {
                prev = prev.next;
            }
            node.next = prev.next;
            console.log(prev.next);
            prev.next = node;
            // console.log(prev);
        }
    }

    // O(1)
    prepend(value) {
        const node = new Node(value);
        // if (this.isEmpty()) {
        //     this.head = node;
        // } else {
        //     node.next = this.head;
        //     this.head = node;
        // }
        if (!this.isEmpty()) {
            node.next = this.head;
        }
        this.head = node;

        ++this.size;
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let curr = this.head;
            let values = "";
            while (curr) {
                // console.log(curr.value);
                values += `${curr.value} `;
                curr = curr.next;
            }
            console.log(values);
        }
    }
}

const linkedList = new LinkedList();
// console.log()
linkedList.append(10);
linkedList.append(20);
linkedList.insert(30, 1);
linkedList.insert(40, 2);
// linkedList.prepend(0);
// linkedList.append(30);
// linkedList.prepend(20);
// linkedList.prepend(30);
console.log(linkedList, linkedList.isEmpty(), linkedList.isSize());
linkedList.print();
