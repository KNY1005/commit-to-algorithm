function solution(dirs) {
  let answer = 0;

  // 현재 좌표
  let x = 0;
  let y = 0;

  // 방문한 길 저장 -> 중복 제거
  const visited = new Set();

  for (const dir of dirs) {
    let nx = x;
    let ny = y;

    // 다음 좌표 계산
    if (dir === "U") ny++;
    else if (dir === "D") ny--;
    else if (dir === "R") nx++;
    else if (dir === "L") nx--;

    // 범위 벗어나면 무시
    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    // 길 생성 -> 정렬해서 방향 무시
    const road = [`${x},${y}`, `${nx},${ny}`].sort().join("-");

    // 처음 가는 길이면 카운트
    if (!visited.has(road)) {
      visited.add(road);
      answer++;
    }

    // 현재 좌표 갱신
    x = nx;
    y = ny;
  }

  return answer;
}
