class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST{
  
  insert(root, val){
    if(root === null ) return new Node(val);
    
    if (val < root.val) root.left = insert(root.left, val);
    else{
      root.right = insert(root.right, val);
    }
    return root;
  }
}

let root = null;
const vals = [15,10,20,8,5];
const bst = new BST();
const insertion = vals.forEach(v => bst.insert(root, v));
bst.insert(null, 10);
console.log(bst);