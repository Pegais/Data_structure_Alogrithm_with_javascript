class Node{
    constructor(value) { 
        this.value = value;
        this.next = null;
    }
}


class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() { return this.size === 0 }
    getSize() { return this.size }
// add value to list at front of list ----Prepend
    prepend(value) { 
        const node = new Node(value);
        if (this.isEmpty()) { 
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }


    // adding value to the end of list ----Append
    append(value) { 
        const node = new Node(value);
        if (this.isEmpty()) { 
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    // remove node from front

    removefromfront() { 
        if (this.isEmpty()) {
            return null;
        } else {
            const value = this.head.value;
            this.head = this.head.next;
            this.size--;
            return value;

        }
    }

    // remove from last of list;
    // logic => we must have a refrence to the node previous to tail;
    // and than shift the tail to that node and remove the last node which was tail;
    removefromLast() {
        if (this.isEmpty()) {
            return null;
        }
        else {
            const value = this.tail.value;
            if (this.size == 1) {
                this.tail = null;
                this.head = null;
            } else {
                let prev = this.head;
                while (prev.next != this.tail) {
                    prev = prev.next;
                }
                prev.next = null;
                this.tail = prev;
            }
            this.size--;
            return value;
        }
    }

    print() { 
        let list = ""
        let prev = this.head;
        if (this.isEmpty()) { 
            console.log("List is empty");
        }
        while (prev) {
            list += `${prev.value} `
            prev = prev.next;
        }
        console.log(list)
    }

}



module.exports = LinkedList;

