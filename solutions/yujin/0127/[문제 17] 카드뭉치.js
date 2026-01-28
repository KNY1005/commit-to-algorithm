function solution(cards1, cards2, goal) {
  let idx = 0;
  let idx1 = 0;
  let idx2 = 0;

  while (idx < goal.length) {
    if (goal[idx] === cards1[idx1]) {
      idx1++;
    } else if (goal[idx] === cards2[idx2]) {
      idx2++;
    } else return 'No';

    idx++;
  }
  return 'Yes';
}
