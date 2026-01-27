class Queue {
    constructor() {
        this.items = [];
    }

    // 큐의 뒤에 데이터 삽입
    enqueue(item) {
        this.items.push(item);
    }

    // 큐의 앞에서 데이터 제거
    dequeue() {
        this.items.shift();
    }

    // 맨 앞 요소 반환
    front() {
        return this.items[0];
    }

    // 큐가 비어있는지 확인
    isEmpty() {
        return this.items.length === 0;
    }

    // 큐의 크기 반환
    size() {
        return this.items.length;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front()); // 1
console.log(queue.isEmpty()); // false
console.log(queue.size()); // 3 
