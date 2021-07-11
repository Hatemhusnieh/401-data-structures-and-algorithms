'use strict';
const PseudoQueue = require('../pseudoQueue');

describe('Pseudo-Queue', ()=>{
  it('Enqueue', ()=>{
    const q = new PseudoQueue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.qf.front.value).toEqual(1);
    expect(q.qf.front.next.value).toEqual(2);
    expect(q.qf.front.next.next.value).toEqual(3);
  });

  it('Dequeue', ()=>{
    const q = new PseudoQueue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
    expect(q.dequeue()).toEqual('exception');
  });
});