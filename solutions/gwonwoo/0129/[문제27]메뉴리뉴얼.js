function solution(orders, course) {
  const result = course.reduce((acc, cur, index) => {
    if (!acc[cur]) acc[cur] = [];
    const order = orders[index];
    for (let i = 0; i < order.length - cur; i++) {
      for (let j = 0; j < cur; j++) {
        acc[cur].push();
      }
    }
    return acc;
  }, {});
}

// 시밤 모르겠다
