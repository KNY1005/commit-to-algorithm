function solution(progresses, speeds) {
  // 작업 완료 시간 배열
  const result = [];
  // 각 배포마다 몇 개의 기능이 배포되는지 배열
  const answer = [];
  // for문을 통해 각 작업당 걸리는 시간 계산
  for (let i = 0; i < progresses.length; i++) {
    const num = 100 - progresses[i];
    // 올림으로 반환
    let time = Math.ceil(num / speeds[i]);
    result.push(time);
  }

  // result 맨 처음 값 저장
  let current = result[0];
  // 자기 자신을 포함함으로 count = 1로 선언
  let count = 1;
  for (let i = 1; i < result.length; i++) {
    // 현재 값이 뒤 배열 값보다 크면 count++
    if (current >= result[i]) {
      count++;
    }
    // 뒤 배열 값이 크면 그 값을 current로 선언
    else {
      answer.push(count);
      current = result[i];
      count = 1;
    }
  }
  // 마지막에 해당하는 경우도 포함
  answer.push(count);
  return answer;
}
