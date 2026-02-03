// 해당 문제는 못풀겠어서 gpt에게 강습?받은 코드입니다



function solution(orders, course) {
  const answer = []; // 최종 결과를 담을 배열
  const comboMap = new Map(); // 조합별 주문 횟수를 저장할 Map

  // 모든 주문을 하나씩 돌면서
  for (const order of orders) {
    const sorted = order.split("").sort().join(""); // 주문을 사전순으로 정렬해서 통일

    // 각 코스 길이에 대해 처리
    for (const len of course) {
      if (sorted.length < len) continue; // 주문 길이가 짧으면 이 코스는 건너뜀

      const combos = getCombos(sorted, len); // 해당 길이의 조합들을 모두 구함

      // 구한 조합들을 하나씩 카운트
      for (const c of combos) {
        comboMap.set(c, (comboMap.get(c) || 0) + 1); // 기존 값이 있으면 +1, 없으면 1로 시작
      }
    }
  }

  // 각 코스 길이별로 가장 많이 주문된 조합만 골라냄
  for (const len of course) {
    let max = 0; // 해당 코스 길이에서 최대 주문 횟수
    const selected = []; // 최대 횟수를 가진 조합들을 담을 배열

    // Map에 저장된 모든 조합을 돌면서
    for (const [combo, count] of comboMap) {
      if (combo.length === len && count >= 2) { // 길이가 맞고, 2번 이상 주문된 조합만 대상
        if (count > max) { // 더 많이 주문된 조합을 찾으면
          max = count; // 최대값 갱신
          selected.length = 0; // 기존 결과 비우고
          selected.push(combo); // 현재 조합 추가
        } else if (count === max) { // 최대값과 같으면
          selected.push(combo); // 같이 추가
        }
      }
    }

    answer.push(...selected); // 이 코스 길이에서 고른 조합들을 결과에 추가
  }

  return answer.sort(); // 최종 결과를 사전순으로 정렬해서 반환
}

// 문자열 str에서 len개를 뽑는 모든 조합을 만들어 배열로 반환하는 함수
function getCombos(str, len) {
  const result = []; // 조합들을 담을 배열

  // 재귀 함수: start는 시작 인덱스, path는 현재까지 만든 문자열
  function dfs(start, path) {
    if (path.length === len) { // 원하는 길이에 도달하면
      result.push(path); // 결과 배열에 추가하고
      return; // 더 이상 진행하지 않음
    }

    for (let i = start; i < str.length; i++) { // 시작 위치부터 끝까지 돌면서
      dfs(i + 1, path + str[i]); // 다음 문자로 재귀 호출
    }
  }

  dfs(0, ""); // 처음에는 인덱스 0, 빈 문자열부터 시작
  return result; // 완성된 조합 배열 반환
}
