const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const tree = {};

for (let i = 1; i <= N; i++) {
  const [node, left, right] = input[i];
  tree[node] = { left, right };
}

function preorder(node) {
  if (node === '.') return '';
  return node + preorder(tree[node].left) + preorder(tree[node].right);
}

function inorder(node) {
  if (node === '.') return '';
  return preorder(tree[node].left) + node + preorder(tree[node].right);
}

function postorder(node) {
  if (node === '.') return '';
  return postorder(tree[node].left) + postorder(tree[node].right) + node;
}

console.log(preorder('A'));
console.log(inorder('A'));
console.log(postorder('A'));
