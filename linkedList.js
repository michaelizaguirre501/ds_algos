class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addElement(element) {
    var node = new Node(element);
    var current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index");
    } else {
      var node = new Node(element);
      var curr, prev;
      curr = this.head;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }
}

//checking for cycle

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function has_cycle(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true; // found the cycle (call calculate length)
    }
  }
  return false;
}

function calculate_cycle_length(slow) {
  let current = slow,
    current_length = 0;
  while (true) {
    current = current.next;
    current_length += 1;
    if (current === slow) {
      break;
    }
  }
  return current_length;
}

function find_cycle_start(head) {
  cycle_length = 0;
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      //found the cycle
      cycle_length = calculate_cycle_length(slow);
      break;
    }
  }
  return find_start(head, cycle_length);
}

function find_start(head, cycle_length) {
  let pointer1 = head,
    pointer2 = head;
  //move pointer 2 cycle length forward
  while (cycle_length > 0) {
    pointer2 = pointer2.next;
    cycle_length -= 1;
  }
  while (pointer1 != pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
