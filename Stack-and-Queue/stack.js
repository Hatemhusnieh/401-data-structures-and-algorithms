'use strict';
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.front = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
    } else {
      node.next = this.front;
      this.front = node;
    }
  }

  pop() {
    if (this.front) {
      const removed = this.front.value;
      this.front = this.front.next;
      return removed;
    } else {
      return 'exception';
    }
  }

  peek() {
    return this.front ? this.front.value : 'exception';
  }

  isEmpty() {
    return this.front ? true : false;
  }

  getMax() {
    if (!this.front) { return 'Stack is EMPTY'; }
    let pointer = this.front;
    let limit = this.front;
    while (limit) {
      if (pointer.value < pointer.next.value) { pointer = pointer.next; }
      limit = limit.next;
    }
    return pointer.value;
  }
}

module.exports = Stack;