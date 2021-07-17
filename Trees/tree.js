'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(value = null) {
    this.root = value;
  }

  preOrder() {
    if (!this.root) throw new Error('can not traverse an empty tree');
    let arr = [];
    const _traverse = node => {
      arr.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return arr;
  }

  inOrder() {
    if (!this.root) throw new Error('can not traverse an empty tree');
    let arr = [];
    const _traverse = node => {
      if (node.left) _traverse(node.left);
      arr.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return arr;
  }

  postOrder() {
    if (!this.root) throw new Error('can not traverse an empty tree');
    let arr = [];
    const _traverse = node => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      arr.push(node.value);
    };
    _traverse(this.root);
    return arr;
  }
}

module.exports = {
  Tree,
  Node,
};