const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]); // 스페이지 갯수
const stages = input[1].split(" ").map(Number); // 각 사용자가 현재 도전하고 있는 스테이지번호 (즉 사용자 수)

const arr = Array(n + 2).fill(0);
for (let i = 0; i < stages.length; i++) {
  arr[stages[i]]++;
}

let result = []; // 각 스페이지 실패율 보관 배열
function solution() {
  let remain = stages.length;
  for (let i = 1; i <= n; i++) {
    const fail = arr[i] / remain;
    result.push([i, fail]);
    remain -= arr[i];
  }
}
solution();

result.sort((a, b) => {
  if (b[1] !== a[1]) return b[1] - a[1];
  else return a[0] - b[0];
});

console.log(result.map((num) => num[0]));
