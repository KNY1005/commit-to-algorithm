// 정석 풀이 시간 복잡도: O(N)
function solution(prices) {
  const n = prices.length;
  const answer = Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      const idx = stack.pop();
      answer[idx] = i - idx;
    }
    stack.push(i);
  }

  while (stack.length) {
    const idx = stack.pop();
    answer[idx] = n - 1 - idx;
  }

  return answer;
}

// 다른 풀이 방법 시간 복잡도 : O(N^2)
function solution(prices) {
  const n = prices.length;
  const answer = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      answer[i]++;
      if (prices[j] < prices[i]) break;
    }
  }
  return answer;
}
