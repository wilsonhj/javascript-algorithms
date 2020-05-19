class Node{
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val){
		let newNode = new Node(val);
		if (!this.head){
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop(){ // delete tail
		if(!this.head) return undefined;
		let tailToBeRemoved = this.tail;
		if(this.length === 1) { 
			this.head = null; 
			this.tail = null; 
		}
		else{
			this.tail = tailToBeRemoved.prev;
			this.tail.next = null;
			tailToBeRemoved.prev = null;
		}
		this.length--;
		return tailToBeRemoved;
	}
	print(){
		const arr = [];
		let current = this.head;
		while(current){
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);	
	}
	shift(){ //delete head
		if (this.length === 0) return undefined;
		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		}
		else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}
	unshift(val){ // add new Head
		let newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(idx){
		if (idx < 0 || idx >= this.length) return undefined;
		let count, current;
		if (idx <= this.length/2){
			count = 0;
			current = this.head;
			while(count !== idx){
				current = current.next; // traverse 
				count++;
			}
			return current;
		}
		else{
			count = this.length - 1;
			current = this.tail;
			while(count !== idx){
				current = current.prev;
				count--;
			}
			return current;
		}
	}
	set(idx, val){
		let gottenNode = this.get(idx);
		if (gottenNode) {
			gottenNode.val = val;
			return true;
		} else { return false; }
	}
	insert(idx, val){
		if (idx < 0 || idx >= this.length) return undefined;
		if (idx === 0) return !!this.unshift(val);
		if (idx === this.length) return !!this.push(val);

		else {
			let newNode = new Node(val);
			let beforeNode = this.get(idx-1);
			let afterNode = beforeNode.next;
			beforeNode.next = newNode, newNode.prev = beforeNode;
			newNode.next = afterNode, afterNode.prev = newNode;
			this.length++;
			return true;
		}
	}
	remove(idx){
		if(idx < 0 || idx >= this.length) return undefined;
		if(idx === 0) return !!this.shift();
		if(idx === this.length-1) return !!this.pop();
		else{
			let toRemove = this.get(idx);
			let prevNode = toRemove.prev;
			let afterNode = toRemove.next;
			prevNode.next = afterNode;
			afterNode.prev = prevNode;
			toRemove.next = null;
			toRemove.prev = null;
			this.length--;
			return toRemove;
		}
	}
}

const dll = new DoublyLinkedList();

dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.push("last");

dll.print();

// console.log(dll.pop(), "pop");

// dll.print();

// console.log(dll.shift(), "shift");

// dll.print();
console.log(dll.unshift(1), "unshift");
dll.print();
// console.log(dll.get(1), "get() val at Index");
// dll.print();
// console.log(dll.set(1, "setval"));
// dll.print();

// console.log(dll.insert(3, "inserted"));
// dll.print();

// console.log(dll.remove(5, "remove"));
// dll.print();

