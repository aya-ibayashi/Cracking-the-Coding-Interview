// Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
//     the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
//     that node. 
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
        return second;
    }

    deleteMiddleNode(Node){
        if(this.head == null || this.head.next == null || this.head.next.next == null){
            return
        }
        let runner = this.head;
        while(runner.next.next != null){
            if(runner.next == Node){
                runner.next = runner.next.next
                return
            }
            runner = runner.next
        }
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
let middleNode = sll.kthToLast(8)
sll.deleteMiddleNode(middleNode)
sll.printAll()