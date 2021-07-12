'use strict';
const AnimalShelter = require('../stack-queue-animal-shelter');

describe('AnimalShelter',()=>{

  describe('instantiate', ()=>{
    it('can instantiate empty animal List', ()=>{
      const list = new AnimalShelter();
      expect(list).toBeDefined();
      expect(list.dogs).toBeDefined();
      expect(list.cats).toBeDefined();
    });
  });

  describe('Enqueue',()=>{
    it('adds a cat or a dog',()=>{
      const list = new AnimalShelter();
      list.enqueue('momo', 'cat');
      list.enqueue('fofo', 'dog');
      expect(list.cats.value).toBeDefined();
      expect(list.dogs.value).toBeDefined();
    });

    it('adds multiple cats or dogs',()=>{
      const list = new AnimalShelter();
      list.enqueue('1', 'cat');
      list.enqueue('2', 'cat');
      list.enqueue('3', 'cat');
      list.enqueue('1', 'dog');
      list.enqueue('2', 'dog');
      list.enqueue('3', 'dog');
      expect(list.cats.value).toEqual('1');
      expect(list.cats.next.value).toEqual('2');
      expect(list.cats.next.next.value).toEqual('3');
      expect(list.dogs.value).toEqual('1');
      expect(list.dogs.next.value).toEqual('2');
      expect(list.dogs.next.next.value).toEqual('3');
    });
  });
});

describe('Dequeue', ()=>{
  it('removes dogs or cats',()=>{
    const list = new AnimalShelter();
    list.enqueue('1', 'cat');
    list.enqueue('2', 'cat');
    list.enqueue('1', 'dog');
    list.enqueue('2', 'dog');
    expect(list.dequeue('cat')).toEqual('1');
    expect(list.cats.value).toEqual('2');
    expect(list.dequeue('dog')).toEqual('1');
    expect(list.dogs.value).toEqual('2');
  });

  it('can\'t return with wrong preference',()=>{
    const list = new AnimalShelter();
    expect(list.dequeue('lion')).toBeNull();
    expect(list.dequeue('cat')).toEqual('No meow here :(');
    expect(list.dequeue('dog')).toEqual('someone let the dogs out !');
    list.enqueue('1', 'cat');
    expect(list.dequeue()).toBeNull();
  });
});