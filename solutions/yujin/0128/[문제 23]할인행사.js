function solution(want, number, discount) {
  let answer = 0;

  // 원하는 상품 목록
  const want_map = new Map();
  for (let i = 0; i < want.length; i++) {
    want_map.set(want[i], number[i]);
  }

  // 할인 품목 10일치
  const comp_map = new Map();
  for (let i = 0; i < 10; i++) {
    const item = discount[i];
    comp_map.set(item, (comp_map.get(item) || 0) + 1);
  }

  // 원하는 상품과 할인품목 10일치 비교 함수
  function isSame(map2) {
    for (const [key, value] of want_map) {
      if (map2.get(key) !== value) return false;
    }
    return true;
  }
  if (isSame(comp_map)) answer++;

  // 남은 기간도 비교
  for (let i = 10; i < discount.length; i++) {
    // 가장 앞에 있는 할인 품목 1개 제거
    comp_map.set(discount[i - 10], (comp_map.get(discount[i - 10]) || 0) - 1);

    // 할인 품목 하나 추가
    comp_map.set(discount[i], (comp_map.get(discount[i]) || 0) + 1);

    if (isSame(comp_map)) answer++;
  }
  return answer;
}
