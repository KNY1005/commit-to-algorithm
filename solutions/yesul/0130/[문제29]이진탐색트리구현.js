class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarysearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (node.value > newNode.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    search(value) {
        let current = this.root;

        while (current) {
            if (current.value === value) {
                return true;
            } else if (current.value > value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }
}

function solution(list, searchList) {
    const tree = new BinarysearchTree();
    list.forEach(node => tree.insert(node));

    return searchList.map(node => tree.search(node));
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]))
// [true, true, true, false]

console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]))
// [false, false, false, false, false]