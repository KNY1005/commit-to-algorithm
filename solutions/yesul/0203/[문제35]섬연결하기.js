function solution(n, costs) {
    const parent = Array.from({ length: n }, (_, i) => i);

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
            parent[rootY] = rootX;
            return true;
        }
        return false;

    }

    // 가장 적은 다리 건설 비용
    costs.sort((a, b) => a[2] - b[2]);

    let total = 0;

    for (const [from, to, cost] of costs) {
        if (union(from, to)) {
            total += cost;
        }
    }

    return total;
}