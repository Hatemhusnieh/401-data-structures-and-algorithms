'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  code(key) {
    const sumCharAsci = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return (sumCharAsci * 13) % this.size;
  }

  add(key, value) {
    const hash = this.code(key);
    if (this.storage[hash]) {
      this.storage[hash].prepend({ [key]: value });
    } else {
      const linkList = new LinkedList();
      linkList.prepend({ [key]: value });
      this.storage[hash] = linkList;
    }
  }

  get(key) {
    const hash = this.code(key);
    if (this.storage[hash]) {
      if (this.storage[hash].length > 1) {
        let node = this.storage[hash].head;
        while (node) {
          if (Object.keys(node.value)[0] === key) return Object.values(node.value)[0];
          node = node.next;
        }
      } else {
        return Object.values(this.storage[hash].head.value)[0];
      }
    }
    throw new Error('Value is not defined');
  }

  contains(key) {
    const hash = this.code(key);
    if (this.storage[hash]) return true;
    return false;
  }

  hash(key) {
    const hash = this.code(key);
    return this.storage[hash] ? hash : new Error('key does not exist');
  }
}

module.exports = Hashmap;
