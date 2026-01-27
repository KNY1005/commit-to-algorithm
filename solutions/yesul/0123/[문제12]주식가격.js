function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // 일단 1초가 흘렀다고 가정
            answer[i]++;
            if (prices[i] > prices[j]) {
                // 가격이 떨어졌으므로 더 이상 확인하지 않고 중단
                break;
            }
        }
    }
    return answer;
}




console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]