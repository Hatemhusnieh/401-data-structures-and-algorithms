'use strict';

class Node {
  constructor(value, type, next = null) {
    this.value = value;
    this.type = type;
    this.next = next;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = null;
    this.cats = null;
  }

  enqueue(val, type) {
    if (val) {
      const animal = new Node(val, type);
      let pointer;
      if (animal.type === 'dog') {
        pointer = this.dogs;
        if (!pointer) {
          this.dogs = animal;
          return;
        }
        while (pointer.next) {
          pointer = pointer.next;
        }
        pointer.next = animal;
        return;
      }

      if (animal.type === 'cat') {
        pointer = this.cats;
        if (!pointer) {
          this.cats = animal;
          return;
        }
        while (pointer.next) {
          pointer = pointer.next;
        }
        pointer.next = animal;
        return;
      }
      return 'Only accept Dogs and Cats';
    }
    return 'void is not an animal';
  }

  dequeue(pref) {
    if (pref !== 'dog' && pref !== 'cat') { return null; }

    if (pref === 'dog') {
      if (!this.dogs) { return 'someone let the dogs out !'; }
      const removed = this.dogs.value;
      this.dogs = this.dogs.next;
      return removed;
    }

    if (pref === 'cat') {
      if (!this.cats) { return 'No meow here :('; }
      const removed = this.cats.value;
      this.cats = this.cats.next;
      return removed;
    }
  }

}

module.exports = AnimalShelter;