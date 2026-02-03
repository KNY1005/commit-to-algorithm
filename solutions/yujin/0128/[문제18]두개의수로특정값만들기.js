// 투 포인터 배열 사용 풀이
function solution(arr, target) {
  const sorted_arr = arr.filter((item) => item < target).sort((a, b) => a - b);

  let left = 0;
  let right = sorted_arr.length - 1;
  while (left < right) {
    const sum = sorted_arr[left] + sorted_arr[right];
    if (sum === target) return true;
    else if (sum < target) left++;
    else right--;
  }

  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6) ? 'True' : 'False');

// 해시 풀이
function solution2(arr, target) {
  const set = new Set(arr);
  for (const item of arr) {
    if (set.has(target - item)) return true;
  }
  return false;
}

console.log(solution2([1, 2, 3, 4, 8], 6) ? 'True' : 'False');
