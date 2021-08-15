'use strict';
const Tree = require('./tree').Tree;
const Node = require('./tree').Node;

class BST extends Tree {
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    const _traverse = (node, val) => {
      if (val < node.value) {
        if (node.left == null) return (node.left = new Node(val));
        _traverse(node.left, val);
      }
      if (val > node.value) {
        if (node.right == null) return (node.right = new Node(val));
        _traverse(node.right, val);
      }
    };

    _traverse(this.root, value);
  }

  contains(val) {
    if (!this.root) throw new TypeError('Empty Tree');
    const _traverse = (node) => {
      if (node.value === val) return true;

      if (val > node.value && node.right) return _traverse(node.right);

      if (val < node.value && node.left) return _traverse(node.left);

      return false;
    };
    return _traverse(this.root);
  }
}

// Return a BST from a sorted array
// [-5, -1, 0, 5, 7]
// -->
//      0
//     / \
//  -5     6
//  / \   /  \
// n  -1 n    7
function sortedArrayToBST(nums) {
  const traverse = (numbers, start, end) => {
    if (start > end) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);
    let root = new Node(numbers[mid]);
    root.left = traverse(numbers, start, mid - 1);
    root.right = traverse(numbers, mid + 1, end);
    return root;
  };
  return traverse(nums, 0, nums.length - 1);
}

// Find the lowest common node between two nodes
function lowestCommonAncestor(root, p, q) {
  if (p.val == root.val || q.val == root.val) return root;

  if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);

  if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);

  return root;
}

// find the node that is closest to a target value.
// only one value is close to the target value
// it is guaranteed to be a node that is close to the target value
//5.5 | 0
//     / \
//   1     6
//  / \   /  \
// n   2 n    7
// --> 6
function ClosestValue(root, target) {
  const hi = Math.floor(target);
  const lo = Math.ceil(target);

  const _compare = (node) => {
    if (node.value == hi || node.value == lo) return node.value;
    if (target < node.value) return _compare(node.left);
    if (target > node.value) return _compare(node.right);
  };
  return _compare(root);
}

// search the BST for a value and return the node that has the same value.
// If there is no matches, return null.
function searchBST(root, val) {
  if (root == null) return null;
  if (root.val == val) return root;
  if (val < root.val) return searchBST(root.left, val);
  if (val > root.val) return searchBST(root.right, val);
  return null;
}

module.exports = {
  BST,
  sortedArrayToBST,
  lowestCommonAncestor,
  ClosestValue,
  searchBST,
};
