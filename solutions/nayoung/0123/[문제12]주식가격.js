function solution(prices) {
    const n = prices.length;
    const answer = Array(n).fill(0); // 결과 배열
    const stack = []; // 인덱스를 저장할 스택

    // 가격 배열을 처음부터 끝까지 순회
    for (let i = 0; i < n; i++) {
        // 현재 가격이 스택 맨 위 가격보다 낮아지면
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const prevIndex = stack.pop();
            // 가격이 떨어지지 않은 시간 = 현재 시점 - 이전 시점
            answer[prevIndex] = i - prevIndex;
        }
        // 현재 인덱스를 스택에 저장
        stack.push(i);
    }

    // 끝까지 가격이 떨어지지 않은 경우 처리
    while (stack.length > 0) {
        const prevIndex = stack.pop();
        // 끝까지 유지된 시간 = (전체 길이 - 1) - 이전 시점
        answer[prevIndex] = (n - 1) - prevIndex;
    }

    return answer;
}
console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]