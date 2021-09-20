class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length == 0) {
      return "Stack is empty";
    }
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}
