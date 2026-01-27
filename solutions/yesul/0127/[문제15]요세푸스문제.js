function solution(n, k) {
    const answer = [];
    // 모든 사람들을 배열에 넣음
    const queue = Array.from({ length: n }, (_, i) => i + 1);

    // queue의 길이가 0이 될 때까지
    while (queue.length > 0) {
        for (let i = 0; i < k - 1; i++) {
            // k-i 번쨰 사람들을 뒤로 보냄
            queue.push(queue.shift());
        }

        // k번쨰 사람을 제거
        answer.push(queue.shift());
    }
    return answer;

}

console.log(solution(7, 3)); //[3, 6, 2, 7, 5, 1, 4]
console.log(solution(10, 3)); //[3, 6, 9, 2, 7, 1, 8, 5, 10, 4]
console.log(solution(10, 5)); //[5, 10, 6, 2, 9, 1, 8, 1, 4, 3