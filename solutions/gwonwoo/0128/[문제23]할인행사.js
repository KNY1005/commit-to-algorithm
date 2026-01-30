function solution(want, number, discount) {
  let answer = 0;
  const obj = {};
  // 원하는 상품과 수량을 객체로 매핑
  for (let i = 0; i < want.length; i++) {
    {
      obj[want[i]] = number[i];
    }
  }

  // 마트 할인 기간 - 회원 자격 기간 (할인 기간 중 연속된 10일씩 확인)
  for (let i = 0; i <= discount.length - 10; i++) {
    const temp = { ...obj };
    for (let j = i; j < 10 + i; j++) {
      // 해당 상품이 원하는 목록에 있으면 개수 감소
      if (temp[discount[j]]) {
        temp[discount[j]]--;
      }
    }
    // // 모든 상품이 조건을 만족했는지 확인
    let result = true;
    for (let key in temp) {
      if (temp[key] > 0) {
        result = false;
      }
    }
    // result 값이 false이면, answer++
    if (result) answer++;
  }
  return answer;
}
