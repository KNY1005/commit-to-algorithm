function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // 스택의 마지막 문자가 현재 문자와 같다면 (짝이 맞으면)
        if (stack.length > 0 && stack.at(-1) === char) {
            stack.pop(); // 제거
        } else {
            // 짝이 안 맞으면 넣어둠
            stack.push(char);
        }
    }

    // 모든 문자를 돌았을 때 스택이 비어있으면 다 지워진 진거!
    return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0