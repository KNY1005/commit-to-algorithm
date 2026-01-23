// [문제 02] 배열 제어하기★★
function sort2(arr) {
  const answer = [...new Set(arr)];
  return answer.sort((a, b) => b - a);
}

console.log(sort2([5, 2, 1, 2, 3, 3, 3, 3]));
