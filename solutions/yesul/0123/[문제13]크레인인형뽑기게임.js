function solution(board, moves) {
    let answer = 0;
    const basket = []; // 인형이 쌓이는 바구니
    const n = board.length;

    // 1. 인형 스택 만들기
    const columns = Array.from({ length: n }, () => []);

    for (let col = 0; col < n; col++) {
        for (let row = n - 1; row >= 0; row--) {
            if (board[row][col] !== 0) {
                columns[col].push(board[row][col]);
            }
        }
    }

    // 2. 크레인 작동
    for (const move of moves) {
        const target = columns[move - 1];
        if (target.length > 0) {
            const doll = target.pop(); // 열의 맨 위 인형 추출 (O(1))

            // 3. 바구니 처리
            if (basket.length > 0 && basket.at(-1) === doll) {
                basket.pop();
                answer += 2;
            } else {
                basket.push(doll);
            }
        }
    }

    return answer;
}

console.log(solution(
    [[0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]],
    [1, 5, 3, 5, 1, 2, 1, 4])
); // 4