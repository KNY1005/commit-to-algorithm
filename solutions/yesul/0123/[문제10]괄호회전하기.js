function solution(s) {
    let answer = 0;
    const n = s.length;

    // 1. x만큼 회전시키기 위한 반복문 (0부터 n-1까지)
    for (let x = 0; x < n; x++) {
        // 회전된 문자열 만들기
        const rotated = s.slice(x) + s.slice(0, x);

        // 2. 해당 문자열이 올바른지 체크
        if (isValid(rotated)) {
            answer++;
        }
    }

    return answer;
}

// 올바른 괄호인지 체크하는 별도의 함수
function isValid(str) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of str) {
        // 닫는 괄호인 경우
        if (pairs[char]) {
            // 스택이 비어있거나 짝이 안 맞으면 탈락
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
        // 여는 괄호인 경우 스택에 추가
        else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0