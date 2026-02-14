function solution(types, plays) {
  const answer = [];

  // gpt 도움 받음

  const music = types.reduce((acc, cur, index) => {});

  const music = types.reduce((acc, cur, index) => {
    // classic, pop이든 새로운 장르가 생긴다면, 배열 생성 (장르별 묶기 때문)
    if (!acc[cur]) acc[cur] = [];
    acc[cur].push({ id: index, play: plays[index] });
  }, {});


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
