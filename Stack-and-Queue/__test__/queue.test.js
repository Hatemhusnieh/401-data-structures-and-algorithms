'use strict';
const Queue = require('../queue');

describe('Queue', ()=>{
  it('Can successfully instantiate an empty queue', ()=>{
    const q = new Queue();
    expect(q).toBeDefined();
  });

  it('Can successfully enqueue into a queue', ()=>{
    const q = new Queue();
    q.enqueue(1);
    expect(q.front.value).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', ()=>{
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.front.value).toEqual(1);
    expect(q.front.next.value).toEqual(2);
    expect(q.back.value).toEqual(3);
  });

  it('Can successfully dequeue out of a queue the expected value', ()=>{
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    expect(q.dequeue()).toEqual(1);
    expect(q.front.value).toEqual(2);
  });

  it('Can successfully peek into a queue, seeing the expected value', ()=>{
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    expect(q.peek()).toEqual(1);
  });

  it('Can successfully empty a queue after multiple dequeues', ()=>{
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.dequeue();
    q.dequeue();
    expect(q.front).toBeNull();
  });

  it('Calling dequeue or peek on empty queue raises exception', ()=>{
    const q = new Queue();
    expect(q.dequeue()).toEqual('exception');
    expect(q.peek()).toEqual('exception');
  });
});