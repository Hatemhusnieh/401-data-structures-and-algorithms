'use strict';
const Tree = require('./tree').Tree;
const Node = require('./tree').Node;

class BST extends Tree {
  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    const _traverse = (temp) => {
      if (temp.value < node.value) {
        if (!temp.right) {
          temp.right = node;
          return;
        }
        _traverse(temp.right);
      }

      if (temp.value > node.value) {
        if (!temp.left) {
          temp.left = node;
          return;
        }
        _traverse(temp.left);
      }

      if (temp.value === node.value) throw new Error('can not add duplicate');
    };
    _traverse(this.root);
    return;
  }

  contains(val) {
    if (!this.root) throw new TypeError('Empty Tree');
    const _traverse = node => {
      if (node.value === val) return true;
      if (val > node.value && node.right) {return _traverse(node.right);}
      if (val < node.value && node.left) return _traverse(node.left);
      return false;
    };
    return _traverse(this.root);
  }
}

module.exports = BST;