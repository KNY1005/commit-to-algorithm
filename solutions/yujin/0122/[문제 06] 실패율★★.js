function solution(N, stages) {
  const answer = [];
  const fail = [];

  let total_people = stages.length;

  for (let i = 1; i <= N; i++) {
    let now_fail = 0;
    stages.forEach((item) => {
      if (item === i) now_fail++;
    });
    if (total_people !== 0) {
      fail.push([i, now_fail / total_people]);
    } else fail.push([i, 0]);
    total_people -= now_fail;
  }

  fail.sort((a, b) => b[1] - a[1]);

  for (const [idx, _] of fail) {
    answer.push(idx);
  }

  return answer;
}
