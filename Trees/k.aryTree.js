'use strict';
class Node {
  constructor(value = null, NoOfChildren = null) {
    this.value = value;
    this.NoOfChildren = NoOfChildren;

    for (let i = 1; i <= NoOfChildren; i++) {
      this[`child${i}`] = new Node();
    }
  }
}
class KaryTree {
  constructor() {
    this.root = null;
  }

  add(childNode) {
    if (!this.root) {
      this.root = childNode;
    } else {
      const addChild = (child) => {
        let check = false;
        for (let i = 1; i <= child.NoOfChildren; i++) {
          if (child[`child${i}`].value == null) {
            check = true;
          }
        }
        if (check) {
          for (let i = 1; i <= child.NoOfChildren; i++) {
            if (child[`child${i}`].value == null) {
              child[`child${i}`] = childNode;
              break;
            }
          }
        } else {
          for (let i = 1; i <= child.NoOfChildren; i++) {
            if (
              child[`child${i}`][`child${child[`child${i}`].NoOfChildren}`]
                .value == null
            ) {
              addChild(child[`child${i}`]);
              break;
            }
          }
        }
      };
      if (childNode.NoOfChildren > this.root.NoOfChildren) {
        return 'Number of children is higher than max';
      } else {
        addChild(this.root);
      }
    }
  }
}

function fizzBuzz(tree) {
  let newKTree = new KaryTree();
  let root = { ...tree.root };
  if (!tree.root) {
    return 'Empty Tree';
  }
  if (root.value % 3 == 0 && root.value % 5 !== 0) {
    root.value = 'Fizz';
  } else if (root.value % 3 == 0 && root.value % 5 == 0) {
    root.value = 'FizzBuzz';
  } else if (root.value % 5 == 0 && root.value % 3 !== 0) {
    root.value = 'Buzz';
  } else {
    root.value = root.value.toString();
  }
  newKTree.add(new Node(root.value, root.NoOfChildren));
  move(root);
  function move(child) {
    for (let i = 1; i <= child.NoOfChildren; i++) {
      if (child[`child${i}`].value !== null) {
        if (
          child[`child${i}`].value % 3 == 0 &&
          child[`child${i}`].value % 5 !== 0
        ) {
          child[`child${i}`].value = 'Fizz';
        } else if (
          child[`child${i}`].value % 3 == 0 &&
          child[`child${i}`].value % 5 == 0
        ) {
          child[`child${i}`].value = 'FizzBuzz';
        } else if (
          child[`child${i}`].value % 5 == 0 &&
          child[`child${i}`].value % 3 !== 0
        ) {
          child[`child${i}`].value = 'Buzz';
        } else {
          child[`child${i}`].value = child[`child${i}`].value.toString();
        }
      }
    }
    for (let i = 1; i <= child.NoOfChildren; i++) {
      move(child[`child${i}`]);
    }
  }
  return root;
}
module.exports = {
  Node,
  KaryTree,
  fizzBuzz,
};
