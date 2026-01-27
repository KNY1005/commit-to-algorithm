let cart = [];
function solution(board, moves) {
  let answer = 0;
  for (let i = 0; i < moves.length; i++) {
    let col = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][col] !== 0) {
        cart.push(board[j][col]);
        board[j][col] = 0;
        break;
      }
    }
  }

  const stack = [];
  for (let num of cart) {
    if (stack.length && stack[stack.length - 1] === num) {
      stack.pop();
      answer += 2;
    } else {
      stack.push(num);
    }
  }

  return answer;
}
