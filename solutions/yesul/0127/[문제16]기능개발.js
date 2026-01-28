function solution(progresses, speeds) {
    const answer = [];

    const availableDays = progresses.map((progress, index) =>
        Math.ceil((100 - progress) / speeds[index]));

    let maxDay = availableDays[0];
    let count = 0;

    for (let i = 0; i < availableDays.length; i++) {
        // 기준일보다 빨리 끝났다면 같이 배포
        if (availableDays[i] <= maxDay) {
            count++;
        } else {
            // 그게 아니라면 이전까지의 작업을 배포
            answer.push(count);
            maxDay = availableDays[i];
            count = 1;
        }
    }

    answer.push(count);
    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //[1, 3, 2]