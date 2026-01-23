function solution(s) {
    const stack = [];

    for (const char of s) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            // 스택이 비어있는데 닫는 괄호가 들어오면 즉시 false
            if (stack.length === 0) {
                return false;
            }
            // stack에 남아있는 '('를 제거하면서 ()가 올바른지 확인할 수 있음
            stack.pop();
        }
    }

    return stack.length === 0;
}

// stack 말고 푸는 방법
function solution2(s) {
    let count = 0;
    for (const char of s) {
        if (count === 0 && char === ')') return false;
        char === '(' ? count++ : count--;
    }
    return count === 0;
}

console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false