function solutaion(num) {
    if (num === 0) return "0"; // 0 처리를 위한 예외 케이스

    let divide = num;
    let result = '';

    while (divide > 0) {
        // 현재 숫자를 2로 나눈 나머지를 구해서 '앞에' 붙임
        result = (divide % 2) + result;

        // 숫자를 2로 나누고 소수점을 버린다
        divide = Math.floor(divide / 2);
    }

    return result;
}

console.log(solutaion(10)); // 1010
console.log(solutaion(11)); // 1011
console.log(solutaion(12)); // 1100
console.log(solutaion(13)); // 1101
console.log(solutaion(14)); // 1110
console.log(solutaion(15)); // 1111