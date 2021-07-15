'use strict';
const Stack = require('../stack');

describe('Stack', () => {
  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });
  describe('push', () => {
    it('Can successfully push onto a stack', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.front.value).toEqual(1);
    });
    it('Can successfully push multiple values onto a stack', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.front.value).toEqual(3);
      expect(stack.front.next.value).toEqual(2);
      expect(stack.front.next.next.value).toEqual(1);
    });
  });

  describe('pop', () => {
    it('Can successfully pop off the stack', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.pop()).toEqual(1);
    });
    it('Can successfully empty a stack after multiple pops', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.front).toBeNull();
    });
  });

  describe('peek', () => {
    it('Can successfully peek the next item on the stack', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      expect(stack.peek()).toEqual(2);
    });
    it('Calling pop or peek on empty stack raises exception', () => {
      const stack = new Stack();
      expect(stack.pop()).toEqual('exception');
      expect(stack.peek()).toEqual('exception');
    });
  });

  describe('getMax', () => {
    it('return exception when stack is empty', () => {
      const stack = new Stack();
      expect(stack.getMax()).toEqual('Stack is EMPTY');
    });
    it('return biggest value', () => {
      const stack = new Stack();
      stack.push(6);
      stack.push(67);
      stack.push(34);
      stack.push(73);
      expect(stack.getMax()).toEqual(73);
    });
  });
});