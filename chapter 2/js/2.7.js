// Intersection; Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth
// node of the first linked list is the exact 

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
}

function isIntersecting(sll1, sll2){
    if(sll1.head == null | sll2.head ==  null){
        return false;
    }
    let runner1 = sll1.head;
    let runner2 = sll2.head;
    let count1 = 0;
    let count2 = 0;
    while(runner1.next != null || runner2.next != null){
        if(runner1.next != null){
            count1 ++;
            runner1 = runner1.next;
        }
        if(runner2.next != null){
            count2 ++;
            runner2 = runner2.next;
        }
    }
    if(runner1 != runner2){
        return false;
    }
    let count = Math.abs(count1 - count2)
    if(count1 > count2){
        runner1 = sll1.head;
        runner2 = sll2.head;
        for(let i=1; i<=count; i++){
            runner1 = runner1.next;
        }
    }
    if(count2 > count1){
        runner1 = sll1.head;
        runner2 = sll2.head;
        for(let i=1; i<=count; i++){
            runner2 = runner2.next;
        }
    }
    while(runner1 != null && runner2 != null){
      
        if(runner1 === runner2){
            return runner1;
        }
        runner1 = runner1.next;
        runner2 = runner2.next;
    }
    return false;
}

let sll1 = new SLL()
sll1.append(6)
sll1.append(1)
sll1.append(7)
sll1.append(8)
sll1.append(9)
let sll2 = new SLL()
sll2.append(2)
sll2.append(9)
sll2.append(5)
// let newNode = new Node(2)
// sll1.add(newNode)
// sll2.add(newNode)
sll1.append(5)
sll2.append(3)

console.log("Values in sll1")
sll1.printAll();

console.log("Values in sll2")
sll2.printAll();

console.log(isIntersecting(sll1, sll2))