function solution(input) {
    const [n, ...trees] = input.split('\n')
    const tree = {};

    for (let i = 1; i <= n; i++) {
        const [node, left, right] = trees[i - 1].split(' ');
        tree[node] = [left, right];
    }

    let result = '';

    // 전위 순회
    function preOrder(node) {
        if (node === '.') return;
        const [left, right] = tree[node];
        result += node;
        preOrder(left);
        preOrder(right);
    }

    // 중위 순회
    function inOrder(node) {
        if (node === '.') return;
        const [left, right] = tree[node];
        inOrder(left);
        result += node;
        inOrder(right);
    }

    // 후위 순회
    function postOrder(node) {
        if (node === '.') return;
        const [left, right] = tree[node];
        postOrder(left);
        postOrder(right);
        result += node;
    }

    preOrder("A");
    result += "\n";
    inOrder("A");
    result += "\n";
    postOrder("A");

    return result;
}

console.log(solution(`7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`)) 