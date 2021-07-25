'use strict';
const Tree = require('../tree').Tree;
const Node = require('../tree').Node;

describe('Trees', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new Tree();
    expect(tree).toBeDefined();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const node = new Node(3);
    const tree = new Tree(node);
    expect(tree.root).toBeDefined();
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    const node = new Node(3);
    const node2 = new Node(5);
    const node3 = new Node(6);
    node.left = node2;
    node.right = node3;
    const tree = new Tree(node);
    expect(tree.root.left).toBeDefined();
    expect(tree.root.left.value).toEqual(5);
    expect(tree.root.right).toBeDefined();
    expect(tree.root.right.value).toEqual(6);
  });

  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    one.left = two;
    one.right = three;
    two.left = six;
    three.left = four;
    three.right = five;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new Tree(one);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    expect(tree.preOrder()).toEqual(expected);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    expect(tree.inOrder()).toEqual(expected);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    expect(tree.postOrder()).toEqual(expected);
  });

  describe('Tree Max', () => {
    const n1 = new Node(7);
    const n2 = new Node(2);
    const n3 = new Node(15);
    const n4 = new Node(31);
    const n5 = new Node(13);
    const n6 = new Node(66);
    const n7 = new Node(54);
    const n8 = new Node(78);
    const n9 = new Node(9);
    n1.left = n2;
    n1.right = n3;
    n2.left = n6;
    n3.left = n4;
    n3.right = n5;
    n6.right = n7;
    n7.left = n8;
    n7.right = n9;
    const tree2 = new Tree(n1);

    it('returns highest value', () => {
      expect(tree2.treeMax()).toEqual(78);
    });

    const tree3 = new Tree();
    it('throws an error on an empty tree', () => {
      try {
        tree3.treeMax();
      } catch (error) {
        expect(error.message).toBe('Empty Tree');
      }
    });
  });
});
