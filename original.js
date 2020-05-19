// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if (!this.head){ 
            this.head = newNode;
            this.tail = this.head;    
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;   
        }
        this.length++;
        return this;
    }
    pop(){ //delete tail
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){ //delete head
        if(this.length === 0) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }
    unshift(val){ // create new Head value
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx){
        if( idx < 0 || idx >= this.length) return null;
        let count = 0;
        let current = this.head;
        while(count !== idx){
            current = current.next;
            count += 1;
        }
        return current;
    }
    set(idx, val){
        if (!this.get(idx)) return false;
        else {
            this.get(idx).val = val;
            return true;
        } 
    }
    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) { return !!this.push(val); }
        if(idx === 0) { return !!this.unshift(val); }
        else{ 
            let prev = this.get(idx-1);
            let newNode = new Node(val);
            let temp = prev.next;
            prev.next = newNode;
            newNode.next = temp;
            this.length++;
            return true;
        }
    }
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === 0) return this.shift();
        if(idx === this.length-1) return this.pop();
        else{
            let previousNode = this.get(idx-1);
            let removed = previousNode.next;
            previousNode.next = removed.next;
            this.length--;
            return removed;
        }
    }    
    traverse(){
        let current = this.head;
        const arr = [];
        while(current){
            arr.push(current);
            current = current.next;
        }
        console.log(arr);
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next, prev = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}


const list = new SingleLinkedList()
list.push("1")
list.push("2")
list.push("3")
list.push("4")
list.push("5")

// list.pop(); 
// list.shift();
// list.unshift("unshift");
// list.get(0);
// list.set(5, "set value");
// console.log(list.insert(1, "inserted"));
// console.log(list.remove(4));
console.log(list.reverse());
list.traverse();
console.log(list.reverse());
list.traverse();



