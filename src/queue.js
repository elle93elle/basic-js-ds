const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.value = null;
    this.next = null;
  }

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    if (!this.value) {
      this.value = value;
    } else if (!this.next) {
      this.next = new Node(value);
    } else {
      let node = this;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(value);
    }
  }

  dequeue() {
    let res = this.value;
    this.value = this.next.value;
    this.next = this.next.next;
    return res;
  }
}

module.exports = {
  Queue,
};
