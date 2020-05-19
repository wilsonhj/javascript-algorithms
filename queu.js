class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){ // add to end
    let newNode = new Node(val);
    if (this.size === 0 ){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue(){ // remove from beginning
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last){
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      this.size--;
      return temp.val;
    }
  }
}

const q = new Queue();
q.enqueue(1);
console.log(q);
q.enqueue(2);
console.log(q);
q.enqueue(3);
console.log(q);
q.enqueue(4);
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);


// const q = [];
// q.push("First");
// q.shift();


// q.unshift(1);
// q.unshift(2);
// q.unshift(3);
// console.log(q);
// q.pop();
// q.pop();
// console.log(q);