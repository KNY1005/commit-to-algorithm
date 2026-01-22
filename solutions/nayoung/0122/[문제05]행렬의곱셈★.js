function solution(arr1, arr2) {
  const result = [];
  const rows = arr1.length;
  const cols = arr2[0].length;
  const common = arr2.length;

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      let sum = 0;
      for (let k = 0; k < common; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

// Example usage:
const arr1 = [
    [1, 4], 
    [3, 2],
    [4, 1]
];
const arr2 = [
    [3, 3],
    [3, 3]
];
console.log(solution(arr1, arr2)); // Output: [[15, 15], [15, 15], [15, 15]]