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

  // root >> left >> right
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

  // left >> root >> right
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

  // left >> right >> root
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

  topView() {
    if (!this.root) throw new Error('Empty Tree');
    let m = new Map();
    let hd = 0;
    let vd = 0;
    this.root.hd = hd;
    this.root.vd = vd;
    const _traverse = (node) => {
      hd = node.hd;
      vd = node.vd;
      if (m.get(node.hd) && m.get(node.hd)[1] < vd) {
        return;
      }
      m.set(hd, [node.value, vd]);
      if (node.left) {
        node.left.hd = node.hd - 1;
        node.left.vd = node.vd + 1;
        _traverse(node.left);
      }
      if (node.right) {
        node.right.hd = node.hd + 1;
        node.right.vd = node.vd + 1;
        _traverse(node.right);
      }
    };
    _traverse(this.root);
    const array = Array.from(m);
    array.sort((a, b) => a[0] - b[0]);
    let results = ' ';
    const res = array.map((data, idx) => {
      return (results += data[1][0] + ' ');
    });
    return results;
  }
}

module.exports = {
  Tree,
  Node,
};
