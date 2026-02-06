class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    } else {
      let cur = this.root;
      while (true) {
        // 삽입 하려는 값이 현재 자식노드보다 작은 경우
        if (value < cur) {
          // 왼쪽으로 이동
          if (cur.left) {
            cur = cur.left;
          } else {
            cur.left = new Node(value);
            break;
          }
        } else {
          if (cur.right) {
            cur = cur.right;
          } else {
            cur.right = new Node(value);
            break;
          }
        }
      }
    }
  }

  search(value) {
    let cur = this.root;
    while (cur) {
      if (cur.value === value) return true;
      else if (cur.value < value) cur = cur.left;
      else cur = cur.right;
    }
    return false;
  }
}

function solution(lst, searchList) {
  const bst = new BST();

  for (const num of lst) {
    bst.insert(num);
  }
  return searchList.map((v) => bst.search(v));
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
