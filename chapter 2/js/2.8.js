// Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
// beginning of the loop. 

class Node{
    constructor(value){
        this.value = value;
        this.next = null 
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    
    add(node){
        if(this.head == null){
            this.head = Node;
            return;
        }
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = node;
    }

    append(val){
        let newNode = new Node(val);
        if (this.head == null){
            this.head = newNode
            return
        }
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }   
        runner.next = newNode;
        return
    }
    printAll(){
        let runner = this.head
        while(runner != null){
            console.log(runner.value)
            runner = runner.next
        }
    }
    loopDetection(){
    if(this.head == null){
        return null;
    }
    let fast = this.head;
    let slow = this.head;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow){
            break;
        }
    }
    if(fast == null || fast.next == null){
        return false;
    }
    fast = this.head;
    while(fast != slow){
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
    }
}

let list = new SLL();
list.append(1)
let node = new Node(2)
list.add(node)
list.append(3)
list.append(4)
let newNode = new Node(5)
list.add(newNode);
newNode.next = node
console.log(list.loopDetection())