'use strict';
const LinkedList = require('../linked-list/linkedList').LinkedList;
const zipLists = require('../linked-list/linkedList').zipLists;
const reversedList = require('../linked-list/linkedList').reveredList;

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const linkList = new LinkedList();
    expect(linkList).toBeDefined();
    expect(linkList.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next).toBeNull();
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    expect(ll.head.value).toEqual('b');
    expect(ll.head.next.value).toEqual('a');
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const ll = new LinkedList();
    ll.insert('c');
    ll.insert('b');
    ll.insert('a');
    expect(ll.head.value).toBeDefined();
    expect(ll.head.next.value).toBeDefined();
    expect(ll.head.next.next.value).toBeDefined();
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const ll = new LinkedList();
    ll.insert('c');
    ll.insert('b');
    ll.insert('a');
    expect(ll.includes('a')).toBeTruthy();
    expect(ll.includes('b')).toBeTruthy();
    expect(ll.includes('c')).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const ll = new LinkedList();
    ll.insert('a');
    expect(ll.includes('b')).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const ll = new LinkedList();
    ll.insert('c');
    ll.insert('b');
    ll.insert('a');
    expect(ll.toString()).toBeDefined();
    expect(ll.toString().length).toBeGreaterThan(0);
    expect(ll.toString()).toEqual('{ a } -> { b } -> { c } -> X');
  });
});

describe('Linked List Insertions', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('c');
    expect(ll.head.next.value).toEqual('c');
    expect(ll.head.next.next).toEqual(null);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('c');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.insertBefore('b', 'z');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual('z');
    expect(ll.head.next.next.next).toEqual(null);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.insertBefore('a', 'z');
    expect(ll.head.value).toEqual('z');
    expect(ll.head.next.value).toEqual('a');
    expect(ll.head.next.next.next).toEqual(null);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.insertAfter('b', 'z');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('z');
    expect(ll.head.next.next.next.value).toEqual('c');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.insertAfter('b', 'z');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('z');
    expect(ll.head.next.next.next).toEqual(null);
  });
});

describe('linked list kth', () => {
  it('k is greater than the length of the list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    expect(ll.kthFromEnd(2)).toEqual('exception');
  });

  it('k equal the length of the array', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    expect(ll.kthFromEnd(1)).toEqual('{ a }');
  });

  it('k is negative number', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    expect(ll.kthFromEnd(-1)).toEqual('error');
  });

  it('k is negative number', () => {
    const ll = new LinkedList();
    ll.append('a');
    expect(ll.kthFromEnd(0)).toEqual('{ a }');
  });

  it('k is negative number', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.append('f');
    ll.append('g');
    expect(ll.kthFromEnd(3)).toEqual('{ c }');
  });
});

describe('Linked-List-Zip', () => {
  it('dsgdfgd', () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    ll1.append('a');
    ll1.append('b');
    ll1.append('c');
    ll2.append('1');
    ll2.append('2');
    ll2.append('3');
    let list = zipLists(ll1, ll2);
    expect(list.length).toBeGreaterThan(0);
    expect(list).toEqual('{ a } -> { 1 } -> { b } -> { 2 } -> { c } -> { 3 } -> X');
  });
});

describe('Revered Linked List', () => {
  it('return reversed list', ()=>{
    const ll = new LinkedList();
    ll.append('1');
    ll.append('2');
    ll.append('3');
    ll.append('4');
    const ll2 = reversedList(ll);
    expect(ll2.head.value).toEqual('4');
    expect(ll2.head.next.value).toEqual('3');
    expect(ll2.head.next.next.value).toEqual('2');
  });
});