function solution(k, operations) {
    const parent = Array.from({ length: k }, (_, index) => index);

    function find(x) {
        if (parent[x] === x) {
            return x;
        }

        return parent[x] = find(parent[x]);
    }

    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);

        if (rootX !== rootY) {
            if (rootY < rootX) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
            }
        }
    }

    for (const [operation, ...args] of operations) {
        if (operation === 'u') {
            union(...args);
        } else if (operation === 'f') {
            find(...args);
        }
    }

    // 집합의 개수 세기
    return parent.filter((val, idx) => val === idx).length;

}

console.log(solution(3, [['u', 0, 1], ['u', 1, 2], ['f', 2]])) // 1
console.log(solution(4, [['u', 0, 1], ['u', 2, 3], ['f', 0]])) // 2
