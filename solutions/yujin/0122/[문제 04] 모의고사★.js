function solution(answers) {
  var answer = [0, 0, 0];
  const result = [];

  const way_1 = [1, 2, 3, 4, 5];
  const way_2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const way_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let idx = 0;

  for (const ans of answers) {
    if (way_1[idx % way_1.length] === ans) answer[0]++;
    if (way_2[idx % way_2.length] === ans) answer[1]++;
    if (way_3[idx % way_3.length] === ans) answer[2]++;

    idx++;
  }

  const max = Math.max(...answer);
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === max) {
      result.push(i + 1);
    }
  }

  return result;
}
