let result = [];
function solution(s) {
  for (let i = 0; i < s.length; i++) {
    // 현재 기준 가격
    let start = s[i];
    // 가격이 유지된 시간
    let count = 0;
    for (let j = i + 1; j < s.length; j++) {
      count++;
      // 가격이 떨어지면 중단
      if (s[i] > s[j]) {
        break;
      }
    }
    // i번째 시점의 유지 시간 저장
    result.push(count);
  }
  return result;
}
