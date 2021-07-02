'use strict';
const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value){
    let pointer = this.head;
    while(pointer.value !== value){
      pointer = pointer.next;
      if(pointer === null){
        return false;
      }
    }
    return true;
  }
  
  toString(){
    let pointer = this.head;
    let result = '';
    while(pointer){
      result += `{ ${pointer.value} } -> `;
      pointer = pointer.next;
      if(!pointer){
        result += 'NULL'
      }
    }
  return result;    
  }
}

module.exports = LinkedList;