class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }

  enqueue(val, priority){
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.swap();
  }

  swap(){ // bubble Up
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor( (index-1) / 2 );
      let parent = this.values[parentIndex];
      if (element.priority <= parent.priority) break;
      else {
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }
  }

  dequeue(){ // bubble down
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown(){
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) { //idx exists in array 
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length){ // idx exists
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild.priority > element.priority) || 
          (swap !== null && rightChild.priority > leftChild.priority) ) 
        {
          swap = rightChildIdx;
        }
      }
      if(swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue("cold", 1);
pq.enqueue("fever", 2);
pq.enqueue("covid-19", 3);
pq.enqueue("gunshot", 4);
console.log(pq);
pq.dequeue();
console.log(pq);