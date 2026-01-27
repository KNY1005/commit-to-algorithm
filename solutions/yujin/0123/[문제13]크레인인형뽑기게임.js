function solution(board, moves) {
  const stack = [];
  let answer = 0;
  for (const move of moves) {
    const col = move - 1;
    for (let i = 0; i < board.length; i++) {
      const select = board[i][col];

      if (select !== 0) {
        board[i][col] = 0;
        if (stack.length && select === stack.at(-1)) {
          answer += 2;
          stack.pop();
        } else stack.push(select);
        break;
      }
    }
  }
  return answer;
}
