function solution(board, moves) {
    let answer = 0;         // 터진 인형 수
    const stack = [];       // 바구니 스택

    // moves 순회
    for (let move of moves) {
        const col = move - 1; // 1-indexed → 0-indexed

        // 해당 컬럼에서 맨 위 인형 찾기
        for (let row = 0; row < board.length; row++) {
            if (board[row][col] !== 0) { // 인형 발견
                const doll = board[row][col];
                board[row][col] = 0;    // 인형 뽑았으므로 0으로 설정

                // 바구니 마지막 인형과 같으면 터뜨림
                if (stack.length > 0 && stack[stack.length - 1] === doll) {
                    stack.pop();
                    answer += 2; // 2개 터짐
                } else {
                    stack.push(doll); // 바구니에 추가
                }
                break; // 현재 move 완료, 다음 move 진행
            }
        }
    }

    return answer;
}

console.log(solution(  
    [   [0,0,0,0,0],
        [0,0,1,0,3],
        [0,2,5,0,1],
        [4,2,4,4,2],
        [3,5,1,3,1]],
    [1,5,3,5,1,2,1,4]
)); // 4
