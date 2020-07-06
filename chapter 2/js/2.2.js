// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list. 

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
    kthToLast(k){
        if(this.head == null || k == 0){
            return null
        }
        let first = this.head;
        let second = this.head;
        for(let i=1; i<=k; i++){
            if(first == null){
                return false
            }
            first = first.next;
        }
        while(first != null && second.next != null){
            first = first.next;
            second = second.next;
        }
        return second.value;
    }
}

let node = new Node(3)
console.log(node)
let sll = new SLL()
sll.append(2)
sll.append(3)
sll.append(4)
sll.append(5)
sll.append(6)
sll.append(7)
sll.append(3)
sll.append(5)
console.log(sll.kthToLast(5))