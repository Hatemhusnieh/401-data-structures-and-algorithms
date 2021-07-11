'use strict';
const Stack = require('./stack');
class PseudoQueue {
  constructor() {
    this.qf = new Stack();
    this.qb = new Stack();
  }

  enqueue(val) {
    if (!this.qf.front) {
      this.qf.push(val);
      return;
    }
    while (this.qf.front) {
      this.qb.push(this.qf.pop());
    }
    this.qf.push(val);
    while (this.qb.front) {
      this.qf.push(this.qb.pop());
    }
  }

  dequeue() {
    return this.qf.pop();
  }
}

module.exports = PseudoQueue;