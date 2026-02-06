function solution(arr) {
  // 전위 순회
  function preOrder(nodes, idx) {
    const left = idx * 2 + 1;
    const right = idx * 2 + 2;

    if (idx < nodes.length) {
      let ret = `${nodes[idx]}`;
      ret += preOrder(nodes, left);
      ret += preOrder(nodes, right);

      return ret;
    }
    return '';
  }

  // 중위 순회
  function inOrder(nodes, idx) {
    const left = idx * 2 + 1;
    const right = idx * 2 + 2;

    if (idx < nodes.length) {
      let ret = inOrder(nodes, left);
      ret += `${nodes[idx]}`;
      ret += inOrder(nodes, right);
      return ret;
    }
    return '';
  }

  // 후위 순회
  function postOrder(nodes, idx) {
    let left = idx * 2 + 1;
    let right = idx * 2 + 2;

    if (idx < nodes.length) {
      let ret = postOrder(nodes, left);
      ret += postOrder(nodes, right);
      ret += `${nodes[idx]}`;
      return ret;
    }
    return '';
  }

  return [preOrder(arr, 0), inOrder(arr, 0), postOrder(arr, 0)];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
