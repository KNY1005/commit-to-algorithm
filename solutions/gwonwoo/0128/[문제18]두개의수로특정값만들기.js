function solution(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}
// 이중 for문을 사용함으로 시간복잡도는 O(n^2)가 발생한다.
// 그리고 가독성도 그렇게 좋아보이지 않는다.
// 누구나 쉽게 만들 수 있는 코드
// ===============================================

function solution(arr, target) {
  const result = [];
  for (let num of arr) {
    if (result.includes(target - num)) {
      return true;
    }
    // 값을 넣어줘야 다음에 이 값을 사용하는지 판단한다.
    set.push(num);
  }
  return false;
}

// target - num 값이 arr 배열안에 존재만 파악하는 코드
// 이중 for문보다 보기 가독성이 높지만, 똑같이 시간복잡도는 O(n^2)가 발생한다.
// .includes 메서드는 내부를 순회함으로 O(n)을 갖는다.
// ===============================================

function solution(arr, target) {
  const set = new Set();
  for (let num of arr) {
    if (set.has(target - num)) {
      return true;
    }
    // 값을 넣어줘야 다음에 이 값을 사용하는지 판단한다.
    set.add(num);
  }
  return false;
}
// target - num 값이 arr 배열안에 존재만 파악하는 코드
// set을 이용하여 가독성도 높이고 시간복잡도도 줄였다. O(n)
// set.has()와 set.add() 둘다 O(1) 시간복잡도를 가진다.
