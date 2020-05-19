class Node{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(val){
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } 
    else {
      let current = this.root;
      while(true){
        if(val === current.val) return undefined;
        if (val < current.val){
          if(current.left === null){
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if(current.right === null){
            current.right = newNode;
            return this;
          } else{
            current = current.right;
          }
        }
      }
    }
  }
  contains(val){
    if(this.root === null) return false;
    if (this.root.val === val) return true;
    let current = this.root;
    let found = false;
    while(current && !found){
      if(val < current.val){
        current = current.left;
      } else if(val > current.val){
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS(){
    const q = []; 
    const data = [];
    let node = this.root;
    q.push(node);

    while(q.length){
      node = q.shift();
      data.push(node.val);
      if(node.left) data.push(node.left.val);
      if(node.right) data.push(node.right.val);
    }
    return data;
  }
  DFSPreOrder(){
    const data = [];
    const recurse = (node) => {
      data.push(node.val);
      if (node.left) recurse(node.left);
      if (node.right) recurse(node.right);
    }
    recurse(this.root);
    return data;
  }
  DFSPostOrder(){
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder(){
    const data = [];
    const traverse = (node) => {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}


const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left =  new Node(7);

tree.insert(5);
tree.insert(11);
tree.insert(7);
tree.insert(20);

console.log(tree.BFS());
console.log(tree.DFSPreOrder(), " | DFS PreOrder");
console.log(tree.DFSPostOrder(), " | DFS PostOrder");
console.log(tree.DFSInOrder(), " | DFS InOrder ");
// else {
//   if(newNode.val > this.root.val){ // right
//     if(newNode.right) return this.insert(newNode.right.val);
//     else{
//       newNode.right = newNode;
//       return this;
//     } 
//   }
//   else{ // left
//     if (newNode.left) return this.insert(newNode.left.val);
//     else { 
//       newNode.left = newNode;
//       return this;
//     }
//   }
// } 