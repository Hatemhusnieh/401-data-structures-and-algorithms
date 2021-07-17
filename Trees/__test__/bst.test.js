'use strict';
const BST = require('../BST');
// const Node = require('../tree').Node;

describe('Binary Search Tree', () => {
  let tree;
  beforeAll(() => {
    tree = new BST();
    tree.add(50);
    tree.add(7);
    tree.add(34);
  });

  it('add in the right order', () => {
    tree.add(25);
    tree.add(70);
    expect(tree.preOrder()).toEqual([50, 7, 34, 25, 70]);
  });

  it('return error if trying to add duplicate', () => {
    try {
      tree.add(25);
    } catch (error) {
      expect(error.message).toEqual('can not add duplicate');
    }
  });

  it('searches for values', () => {
    expect(tree.contains(70)).toBeTruthy();
    expect(tree.contains(7)).toBeTruthy();
    expect(tree.contains(25)).toBeTruthy();
  });

  it('search return false for none existing values', () => {
    expect(tree.contains(33)).toBeFalsy();
  });

  it('return error if tree is empty', () => {
    const tree2 = new BST();
    try {
      tree2.contains(33);
    } catch (error) {
      expect(error.message).toBe('Empty Tree');
    }
  });
});