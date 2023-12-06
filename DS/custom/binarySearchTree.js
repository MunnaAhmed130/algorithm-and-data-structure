class Node {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
}

const BST = new BinarySearchTree();
console.log("Tree is empty?", BST.isEmpty());
BST.insert(10);
BST.insert(20);
BST.insert(30);
console.log("Tree is empty?", BST.isEmpty());
