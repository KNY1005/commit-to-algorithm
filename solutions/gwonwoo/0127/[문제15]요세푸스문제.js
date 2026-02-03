const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

// n 입력값
const n = Number(input[0]);
// k 입력값
const k = Number(input[1]);

const que = [];
// 1~n이 적혀있는 배열 생성
for (let i = 1; i <= n; i++) {
  que.push(i);
}

const result = []; // 제거된 순서를 저장할 배열
let count = 1;
// 큐에 사람이 남아 있을 떄까지 반복
while (que.length) {
  if (count === k) {
    // 큐의 맨 앞 사람 제거
    result.push(que.shift());
    count = 1;
  }
  // k번째 아니면 뒤로 보내기
  else {
    que.push(que.shift());
    count++;
  }
}

console.log(`<${result.join(', ')}>`);

const queue = Array.from(queue.fill(1));
