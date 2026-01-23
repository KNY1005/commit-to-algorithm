function solution(s) {
    // 스택 역할을 할 배열 선언
    let stack = [];

    // 문자열을 앞에서부터 하나씩 순회
    for (let ch of s) {
        
        // 스택이 비어있지 않고, 스택 맨 위 문자와 현재 문자가 같다면
        if (stack.length > 0 && stack[stack.length - 1] === ch) {
            // 짝이 맞으므로 제거 (pop)
            stack.pop();
        } else {
            // 짝이 아니면 스택에 추가 (push)
            stack.push(ch);
        }
    }
    // 모든 문자가 제거되어 스택이 비어 있으면 성공 → 1
    // 남아 있으면 실패 → 0
    return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd"));   // 0