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
    array.map((data) => {
      return (results += data[1][0] + ' ');
    });
    return results;
  }

  treeHeight() {
    if (!this.root) throw new Error('Empty Tree');
    const _traverse = (node) => {
      if (!node) return 0;
      let lHeight = _traverse(node.left);
      let rHeight = _traverse(node.right);
      if (lHeight > rHeight) return lHeight + 1;
      return rHeight + 1;
    };
    return _traverse(this.root) - 1;
  }
}

// time: O(n)
// space: O(h)
const invertTree = (root) => {
  if (!root) return root;
  if (root) {
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
  }
  return root;
};

function isSameTree(p, q) {
  if (q == null && p == null) return true;
  if (q == null && p != null) return false;
  if (q != null && p == null) return false;
  if (p.value != q.value) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

//          1
//      2   |   2
//    4 | 3 | 3 | 4
// ==> true
function isSymmetric(root) {
  if (!root) return true;
  const _check = (left, right) => {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (left.value !== right.value) return false;
    return _check(left.left, right.right) && _check(left.right, right.left);
  };
  return _check(root.left, root.right);
}

// return true if height of branches in a tree are not different than 1
// Time complexity: O(n).
// Space complexity: O(h)
const isBalanced = (root) => {
  if (root === null) return true;
  const checkHeight = (node) => {
    if (node === null) return 0;
    const left = checkHeight(node.left);
    const right = checkHeight(node.right);
    if (left === false || right === false || Math.abs(left - right) > 1) return false;
    return Math.max(left, right) + 1;
  };
  return checkHeight(root) !== false;
};

// calculate the minimum height of a tree
//Time complexity : O(n).
//Space complexity : O(1).
function minDepth(root) {
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

// return true if the sum of node values to a leaf equal the target value
//Time complexity : O(n).
//Space complexity : O(1).
function hasPathSum(root, sum) {
  if (!root) return false;
  if (root.value === sum && !root.left && !root.right) return true;
  return hasPathSum(root.left, sum - root.value) || hasPathSum(root.right, sum - root.value);
}

function binaryTreePaths(root) {
  if (!root) return [];

  let counter = 0;
  const paths = [],
    traverse = (node, path) => {
      if (!node) return;

      path += node.value;

      if (!node.left && !node.right) {
        paths[counter] = path;
        return counter++;
      }

      if (node.left) traverse(node.left, `${path}->`);
      if (node.right) traverse(node.right, `${path}->`);
    };

  traverse(root, '');
  return paths;
}

// Find the sum of all left leaves in a binary tree
// Time: O(n)
// Space O(n)
function sumOfLeftLeaves(root) {
  if (!root) return 0;
  let sum = 0;
  const nodeSum = (node) => {
    if (node == null) return 0;
    if (!node.left && !node.right) return 0;
    if (node.left && node.left.left == null && node.left.right == null) return (sum += node.left.value + nodeSum(node.left));
    if (node.left) nodeSum(node.left);
    if (node.right) nodeSum(node.right);
  };
  nodeSum(root);
  return sum;
}

// Time: O(n)
// Space O(n)
function diameterOfBinaryTree(root) {
  const depth = (node) => {
    if (!node) return 0;

    const left = depth(node.left);
    const right = depth(node.right);

    // update diameter at every node
    diameter = Math.max(diameter, left + right);

    // update the max path of the current node
    // 1 is the height of the node itself + longest path of children
    return Math.max(left, right) + 1;
  };
  let diameter = 0;
  depth(root);
  return diameter;
}

function findTilt(root) {
  const _traverse = (root) => {
    if (!root) {
      return 0;
    }
    const left = _traverse(root.left);
    const right = _traverse(root.right);

    sum += Math.abs(left - right);
    return root.value + left + right;
  };

  let sum = 0;
  _traverse(root);
  return sum;
}

// Find the lowest common node between two nodes
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left ? left : right;
}
module.exports = {
  Tree,
  Node,
  isSameTree,
  isSymmetric,
  isBalanced,
  minDepth,
  hasPathSum,
  invertTree,
  binaryTreePaths,
  sumOfLeftLeaves,
  diameterOfBinaryTree,
  findTilt,
  lowestCommonAncestor,
};
