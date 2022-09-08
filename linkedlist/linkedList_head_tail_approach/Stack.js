const LinkedList = require("./linkedList");

// making of stack from Linked List;
// Stack is linear data structure which follows a principle of last-in-first-out;
// in sort the last data inserted into the stack will be the first data to be removed;

// to make LIFO work in stack ,we will make use of our linkedlist methods prepend to add element to the head of the stack and
// removefromFirst to remove the first element of linkedList;

class Stack{
    constructor() {
        this.list=new LinkedList();
    }

    push(value) {
        this.list.prepend(value);
    }
    pop() {
        this.list.removefromfront();
    }
    peek() {
        return this.list.head.value;
    }
    isEmpty() { 
        return this.list.isEmpty();
    }
    getSize() {
        return this.list.getSize();
    }
    print() { 
        return this.list.print();
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();


stack.pop();
stack.print();
console.log(stack.getSize());
console.log("peek",stack.peek());