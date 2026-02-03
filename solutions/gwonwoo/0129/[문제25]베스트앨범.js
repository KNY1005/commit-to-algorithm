function solution(types, plays) {
  const answer = [];

  // gpt 도움 받음
  const music = types.reduce((acc, cur, index) => {});

  // 각 장르별 재생횟수 합계
  const totalSum = {};
  for (const type of types) {
    let sum = 0;
    for (const m of music[type]) {
      sum += m.play;
    }
    totalSum[type] = sum;
  }

  // 여기까지 구현함

  return answer;
}
