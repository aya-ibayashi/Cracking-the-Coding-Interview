// Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
// before all nodes greater than or equal to x. Ifxis contained within the list, the values of x only need
// to be after the elements less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions. 

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

    partition(x){
    if(this.head == null || this.head.next == null){
        return this
    }
    let runner = this.head;
    let prevHead = this.head;
    while(runner.next != null){
        if(runner.next.value < x){
            this.head = runner.next;
            runner.next = runner.next.next;
            this.head.next = prevHead
            prevHead = this.head
            // this.printAll();
        } else {
            runner = runner.next; 
        }
    }
    return this
    }
}
let sll = new SLL()
sll.append(5)
sll.append(3)
sll.append(7)
sll.append(5)
sll.append(6)
sll.append(2)
sll.append(2)
sll.append(1)
sll.partition(5)
sll.printAll()