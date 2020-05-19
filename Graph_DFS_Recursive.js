class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; 
  }
  addEdge(vertex1, vertex2){
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(v1, v2){
    if(this.adjacencyList[v1] && this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2); // returns new array
    }
    if(this.adjacencyList[v2] && this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
  }
  removeVertex(vertex){
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop(); // descriptive variable names
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  recursiveDFS(startNode){
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    
    (function traverse(vertex) {
      if (!vertex) return false;
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbour => {
        if (!visited[neighbour]) return traverse(neighbour);
      });
    })(startNode);  
    return results;
  }
  iterativeDFS(startNode){
    const stack = [startNode]; // init stack with start node
    const results = [];
    const visited = {};
    let currentVertex;
    visited[startNode] = true;

    while(stack.length) {
      console.log(stack); 
      currentVertex = stack.pop();
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbour => {
        if (!visited[neighbour]){
        visited[neighbour] = true;
        stack.push(neighbour);
        }
      });
    }
    console.log(results);
    return results;
  }
  iterativeBFS(start){
    const queue = [start];
    const result = [];
    const visitedObj = {};
    visitedObj[start] = true;
    let currentVertex; // init 

    while(queue.length){
      console.log(queue);
      currentVertex = queue.shift() // set
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbour => {
        if (!visitedObj[neighbour]) {
          visitedObj[neighbour] = true;
          queue.push(neighbour);
        }
      })
    }
    return result;
  }

}

const g = new Graph();
g.addVertex("A");
g.addVertex("B"); 
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// console.log(g.recursiveDFS("A"));
console.log(g.iterativeBFS("A"));
// g.iterativeDFS("A");
// console.log(g);
