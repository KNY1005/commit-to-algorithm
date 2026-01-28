function solution(progresses, speeds) {
  const answer = [];
  const times = progresses.map((item, idx) =>
    Math.ceil((100 - item) / speeds[idx])
  );
  let max = times[0];
  let count = 1;

  for (let i = 1; i < times.length; i++) {
    if (times[i] <= max) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      max = times[i];
    }
  }
  answer.push(count);

  return answer;
}
