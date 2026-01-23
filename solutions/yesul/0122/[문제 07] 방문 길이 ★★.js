const coordinate = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
}

function solution(dirs) {
    let x = 0, y = 0;
    const visited = new Set();

    [...dirs].forEach(dir => {
        const [dx, dy] = coordinate[dir];
        // 좌표평면의 경계를 넘어가는 명령어는 무시
        if (x + dx > 5 || x + dx < -5 || y + dy > 5 || y + dy < -5) return;

        const road = [`${x},${y}`, `${x + dx},${y + dy}`].sort().join('-')
        visited.add(road);

        x += dx;
        y += dy;
    })

    return visited.size;
}

console.log(solution("ULURRDLLU"))
console.log(solution("LULLLLLLU"))