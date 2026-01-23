const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr1 = JSON.parse(input[0]);
let arr2 = JSON.parse(input[1]);

function solution() {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const result = [];
    for (let j = 0; j < arr2.length; j++) {
      let num = 0;
      for (let k = 0; k < arr2[0].length; k++) {
        num += arr1[i][k] * arr2[k][j];
      }
      result.push(num);
    }
    answer.push(result);
  }

  console.log(answer);
}
solution();
