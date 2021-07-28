'use strict';
const Node = require('../k.aryTree').Node;
const KaryTree = require('../k.aryTree').KaryTree;
const fizzBuzz = require('../k.aryTree').fizzBuzz;

describe('K-ary Tree', () => {
  let n1 = new Node(3, 4, 5);
  let n2 = new Node(5, 11, 12);
  let n3 = new Node(3, 20, 45);
  let n4 = new Node(10, 4, 7);
  let n5 = new Node(9, 1, 23);
  let n6 = new Node(15, 3, 47);
  let n7 = new Node(17, 2, 10);
  let n8 = new Node(18, 2, 6);
  let kTree = new KaryTree();

  kTree.add(n1);
  kTree.add(n2);
  kTree.add(n3);
  kTree.add(n4);
  kTree.add(n5);
  kTree.add(n6);
  kTree.add(n7);
  kTree.add(n8);

  it('Instantiate and empty k-ary tree', () => {
    let karyTree = new KaryTree();
    expect(karyTree instanceof KaryTree).toBeTruthy();
  });

  it('Add to the K-ary tree', () => {
    expect(kTree.root.value).toBe(3);
  });

  it('Produces expected output', () => {
    expect(fizzBuzz(kTree)).toEqual({
      'value': 'Fizz',
      'NoOfChildren': 4,
      'child1': {
        'value': 'Buzz',
        'NoOfChildren': 4,
        'child1': {
          'value': 'Fizz',
          'NoOfChildren': 2,
          'child1': { 'value': null, 'NoOfChildren': null },
          'child2': { 'value': null, 'NoOfChildren': null },
        },
        'child2': { 'value': null, 'NoOfChildren': null },
        'child3': { 'value': null, 'NoOfChildren': null },
        'child4': { 'value': null, 'NoOfChildren': null },
      },
      'child2': {
        'value': 'Fizz',
        'NoOfChildren': 1,
        'child1': { 'value': null, 'NoOfChildren': null },
      },
      'child3': {
        'value': 'FizzBuzz',
        'NoOfChildren': 3,
        'child1': { 'value': null, 'NoOfChildren': null },
        'child2': { 'value': null, 'NoOfChildren': null },
        'child3': { 'value': null, 'NoOfChildren': null },
      },
      'child4': {
        'value': '17',
        'NoOfChildren': 2,
        'child1': { 'value': null, 'NoOfChildren': null },
        'child2': { 'value': null, 'NoOfChildren': null },
      },
    });
  });

  it('return exception if tree is empty', () => {
    let karyTree = new KaryTree();
    expect(fizzBuzz(karyTree)).toEqual('Empty Tree');
  });
});
