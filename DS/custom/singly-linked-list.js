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

    insert(value, index) {
        if (index < 0 || index > this.size) {
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
            // console.log(prev.next);
            prev.next = node;
            ++this.size;
            // console.log(prev);
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
            // this.head = null
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; ++i) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
            // console.log(prev.next);
        }
        --this.size;
        return removedNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        // removing head.value is always O(1)
        // removing a random node is always O(n)
        if (value === this.head.value) {
            this.head = this.head.next;
            --this.size;
            return value;
        } else {
            let prev = this.head;
            // loop returns a node previous to the value or null
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            // check node doesn't point to null
            if (prev.next) {
                const removedNode = prev.next;
                prev.next = removedNode.next;
                console.log(prev);
                --this.size;
                return value;
            }
        }
        return null;
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            ++i;
        }
        return -1;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
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
linkedList.append(50);
// linkedList.removeValue(50);
console.log(linkedList.removeValue(400));
// console.log(linkedList.removeFrom(10));
// linkedList.prepend(0);
// linkedList.append(30);
// linkedList.prepend(20);
// linkedList.prepend(30);
// console.log(linkedList, linkedList.isEmpty(), linkedList.isSize());
linkedList.print();
// console.log(linkedList.search(60));
linkedList.reverse();
linkedList.print();
console.log(linkedList);
