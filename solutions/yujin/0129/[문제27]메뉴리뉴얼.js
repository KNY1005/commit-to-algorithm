function getCombination(arr, length) {
  // 1개만 뽑는 경우 탈출
  if (length === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소만 추출
    const rest = arr.slice(idx + 1);

    // 선택된 요소 이전 요소들은 제외하고 재귀 호출
    const combis = getCombination(rest, length - 1);

    // 선택된 요소와 재귀 호출을 통해 구한 조합 합침
    const combine = combis.map((v) => [fixed, ...v]);

    // 결과 값을 추가
    result.push(...combine);
  });
  return result;
}

function solution(orders, course) {
  const answer = [];

  // 각 코스요리 길이에 대해서
  for (const c of course) {
    const menu = [];
    // 모든 주문에 대해서
    for (const order of orders) {
      const orderArr = order.split('').sort();

      // 메뉴 구성을 모두 구하기
      const comb = getCombination(orderArr, c);
      menu.push(...comb);
    }

    // 각 메뉴 구성이 몇 번 주문되었는지 카운팅
    const counter = {};
    for (const m of menu) {
      const key = m.join('');
      counter[key] = (counter[key] || 0) + 1;
    }
    const max = Math.max(...Object.values(counter));

    // 가장 많이 주문된 구성이 1번 이상 주문된 경우
    if (max > 1) {
      for (const [key, value] of Object.entries(counter)) {
        // 가장 많은 주문을 찾아서 정답 배열에 추가
        if (value === max) answer.push(key);
      }
    }
  }

  // 오름차순 정렬 후 반환
  return answer.sort();
}
