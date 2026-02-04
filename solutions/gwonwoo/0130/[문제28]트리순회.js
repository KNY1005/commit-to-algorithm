const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const tree = {};

for (let i = 1; i <= n; i++) {
  const [head, left, right] = input[i].split(' ');
  tree[head] = [left, right];
}

let result = '';
function preOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  result += node;
  preOrder(left);
  preOrder(right);
}

function inOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  inOrder(left);
  result += node;
  inOrder(right);
}

function postOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  postOrder(left);
  postOrder(right);
  result += node;
}

preOrder('A');
console.log(result);
result = '';
inOrder('A');
console.log(result);
result = '';
postOrder('A');
console.log(result);
