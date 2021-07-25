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
    const _traverse = (node) => {
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
    const _traverse = (node) => {
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
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      arr.push(node.value);
    };
    _traverse(this.root);
    return arr;
  }

  treeMax() {
    if (!this.root) throw new Error('Empty Tree');
    let max = this.root.value;
    const _traverse = (node) => {
      if (node.left) {
        if (node.left.value > max) max = node.left.value;
        _traverse(node.left);
      }
      if (node.right) {
        if (node.right.value > max) max = node.right.value;
        _traverse(node.right);
      }
    };
    _traverse(this.root);
    return max;
  }
}

module.exports = {
  Tree,
  Node,
};
