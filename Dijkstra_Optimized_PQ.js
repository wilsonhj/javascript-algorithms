class WeightedGraph {
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight){
    this.adjacencyList[vertex1].push( {node: vertex2, weight} );
    this.adjacencyList[vertex2].push( {node: vertex1, weight });
  }
  Dijkstra(start, finish){ // []
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    for(let vertex in this.adjacencyList) { // build initial state
      if(vertex === start){
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      }else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    } // as long as there is something to visit
    while(nodes.values.length){
      smallest = nodes.dequeue().val;
      if(smallest === finish){
        while(previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if(smallest || distances[smallest] !== Infinity){
        for(let neighbour in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbour];
          console.log(nextNode);
          //calulate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight; 
          let nextNeighbour = nextNode.node;
          if(candidate < distances[nextNeighbour]){
            // updating new smallest distance to neighbour
            distances[nextNeighbour] = candidate;
            // updating previous : how we got to neigbhbour
            previous[nextNeighbour] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

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
      if (element.priority >= parent.priority) break;
      else {
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }
  }

  dequeue(){ // bubble down
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
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
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length){ // idx exists
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild.priority < element.priority) || 
          (swap !== null && rightChild.priority < leftChild.priority) ) 
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




const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"), "shortest path A -> E"); 
console.log(graph.Dijkstra("B", "F"), "shortest path B -> F"); 