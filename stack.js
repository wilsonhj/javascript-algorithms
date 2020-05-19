class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  push(val){
    let newNode = new Node(val);
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return this.size += 1;
  }
  pop(){
    if(this.size === 0) return null; // !this.first
    else {
      let temp = this.first;
      if (this.first === this.last){ // 1 node
        this.last = null;
      }
      else { // > 1 node
        this.first = this.first.next;
        this.size -= 1;
      }
      return temp.val;
    }
  }
}
const stack = new Stack();
stack.push(1);
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(3);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);

