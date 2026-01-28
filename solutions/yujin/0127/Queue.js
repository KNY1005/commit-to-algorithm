class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    let item = this.storage[front];
    delete this.storage[this.front];
    this.front++;

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }

    return item;
  }
}

let queue = new Queue();

queue.enqueue('hi');
queue.enqueue('bye');
queue.enqueue('good');
queue.enqueue('dog');

console.log(queue.storage);
