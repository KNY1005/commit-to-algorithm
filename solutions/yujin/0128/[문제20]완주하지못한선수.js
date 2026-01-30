function solution(participant, completion) {
  const map = new Map();

  // 완주자 넣어놓고
  for (const p of completion) {
    map.set(p, 0);
  }

  // 완주자에 있으면 +1 없으면 0
  for (const c of participant) {
    map.set(c, map.get(c) + 1 || 0);
  }

  // 중복이거나 완주 못한 경우는 1이 아님
  for (const [key, value] of map) {
    if (value !== 1) return key;
  }
}

console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
);
