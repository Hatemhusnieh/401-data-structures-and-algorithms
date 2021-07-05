'use strict';
const LinkedList = require('../linkedList');

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
    expect(ll.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  })
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
    ll.insertBefore('b', 'z')
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual('z');
    expect(ll.head.next.next.next).toEqual(null);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.insertBefore('a', 'z')
    expect(ll.head.value).toEqual('z');
    expect(ll.head.next.value).toEqual('a');
    expect(ll.head.next.next.next).toEqual(null);
  })

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.insertAfter('b', 'z');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('z');
    expect(ll.head.next.next.next.value).toEqual('c');
  })

  it('Can successfully insert a node after the last node of the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.insertAfter('b', 'z');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('z');
    expect(ll.head.next.next.next).toEqual(null);
  })
});