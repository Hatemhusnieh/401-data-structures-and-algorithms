'use strict';
const Queue = require('../Stack-and-Queue/queue');

function breadthFirst(tree) {
  if (!tree || !tree.root) throw new Error('can not traverse empty / nonexistent tree');
  const breadth = [];
  const queue = new Queue();
  let temp = tree.root;
  queue.enqueue(temp);
  while (queue.front) {
    temp = queue.dequeue();
    breadth.push(temp.value);
    if (temp.left) queue.enqueue(temp.left);
    if (temp.right) queue.enqueue(temp.right);
  }
  return breadth;
}

module.exports = breadthFirst;
