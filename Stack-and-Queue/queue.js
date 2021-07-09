'use strict';
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }

  dequeue() {
    if (!this.front) { return 'exception'; }
    const removed = this.front.value;
    this.front = this.front.next;
    return removed;
  }

  peek() {
    if (!this.front) { return 'exception'; }
    return this.front.value;
  }

  isEmpty() {
    if (this.front) { return true; }
    if (!this.front) { return false; }
  }
}

module.exports = Queue;