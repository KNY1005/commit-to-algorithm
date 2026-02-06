const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//트리구조 정의
class Node { 
    constructor(value) { 
        this.value = value; 
        this.left = null; 
        this.right = null; 
    } 
}

// 트리 생성
const nodes = new Map();

// 입력 반복 처리
// 트리 생성 (부모-자식 연결)
input.slice(1).forEach(line => {
    const [value, left, right] = line.split(" ");

    if (!nodes.has(value)) {
        nodes.set(value, new Node(value));
    }
    const parent = nodes.get(value);
    
    if (left !== ".") {
        if (!nodes.has(left)) {
            nodes.set(left, new Node(left));
        }
        parent.left = nodes.get(left);
    }

    if (right !== ".") {
        if (!nodes.has(right)) {
            nodes.set(right, new Node(right));
        }
        parent.right = nodes.get(right);
    }
});

// 루트
const root = nodes.get(input[1].split(" ")[0]);

// 전위순회
function preOrder (node, preResult){
    if(!node)return;
    preResult.push(node.value)
    preOrder(node.left, preResult);
    preOrder(node.right, preResult);
    return preResult
}

// 중위순회
function inOrder (node, inResult){
    if(!node)return;
    inOrder(node.left, inResult);
    inResult.push(node.value)
    inOrder(node.right, inResult);
    return inResult
}

// 후위순회
function postOrder (node, postResult){
    if(!node)return;
    postOrder(node.left, postResult);
    postOrder(node.right, postResult);
    postResult.push(node.value)
    return postResult
}

const preResult = preOrder(root, []);
const inResult = inOrder(root, []);
const postResult = postOrder(root, []);

// 전위순회 출력
console.log(preResult.join(""));
// 중위순회 출력
console.log(inResult.join(""));
// 후위순회 출력
console.log(postResult.join(""));

