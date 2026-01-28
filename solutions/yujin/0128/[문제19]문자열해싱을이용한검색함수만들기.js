function solution(stringList, queryList) {
  const set = new Set(stringList);
  const answer = [];
  for (const item of queryList) {
    if (set.has(item)) answer.push(true);
    else answer.push(false);
  }
  return answer;
}

console.log(
  solution(['apple', 'banana', 'charry'], ['banana', 'kiwi', 'melon', 'apple'])
);
