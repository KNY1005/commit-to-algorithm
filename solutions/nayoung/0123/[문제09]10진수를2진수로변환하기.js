function solution(decimal) {

    return decimal.toString(2);
}  

console.log(solution(10)); // "1010"
console.log(solution(27));  // "11011"
console.log(solution(12345));  // "11000000111001"


// 10진수를 2진수로 변환하는 함수
// 10진수: decimal
// 2진수: binary