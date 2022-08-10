function createStack() {
    // Write Your code here...
    items = [];
    return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  }
}
  
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  console.log(stack.pop()); // => 5
  console.log(stack.items); // => undefined