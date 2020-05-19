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
}

const g = new Graph();
g.addVertex("tokyo");
g.addVertex("aspen");
g.addVertex("dallas");
g.addVertex("los angeles");
g.addVertex("hong kong");
g.addEdge("dallas", "tokyo");
g.addEdge("dallas", "aspen");
g.addEdge("hong kong", 'tokyo');
g.addEdge("hong kong", "dallas");
g.addEdge("los angeles", "hong kong");
g.addEdge("los angeles", "aspen");

console.log(g);
g.removeEdge("dallas", "aspen");
console.log(g);
g.removeEdge('dallas', 'tokyo');
console.log(g);
g.removeVertex('hong kong');
console.log(g);
g.removeVertex('tokyo');
console.log(g);
g.removeVertex('los angeles');
console.log(g);