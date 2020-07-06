// Remove Dups: Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed? 

// I: unsorted linked list
// O: linked list without duplicates
// C: ascii? unicode?
// E: empty list? 

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
    removeDuplicates(){
        if( this.head == null || this.head.next == null){
            return self
        }

        let current = this.head;
        while(current != null){
            let runner = current
            while(runner.next != null){
                if(runner.next.value == current.value){
                    runner.next = runner.next.next
                } else {
                    runner = runner.next
                }
            }
            current = current.next
        } 
        return this
    }
    //     let runner = this.head;
    //     let current = this.head;
    //     let prev = this.head;
    //     let hasDuplicate = false;
    //     while(current != null ){
    //         while(runner != null && runner.next != null ){
    //             if(runner.next.value == current.value){
    //                 runner.next = runner.next.next
    //                 if(hasDuplicate == false){
    //                     hasDuplicate = !hasDuplicate
    //                 }
    //             }
    //             runner = runner.next
    //             if(runner.next.next == null){
    //                 if (runner.next.value == current.value){
    //                     runner = null
    //                 }
    //             }
    //         }
    //         if(hasDuplicate){
    //             if(current == this.head){
    //                 this.head = current.next

    //             } else {
    //                 current = current.next;
    //                 prev.next = prev.next.next
    //             }
    //             hasDuplicate = !hasDuplicate  
    //             runner = current
    //         } else {
    //             prev = current;
    //             current = current.next;
    //             runner = current
    //         }
    //     }
    //     return this
    // }
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
sll.append(3)
console.log("******printing original SLL******")
sll.printAll()
console.log("********after removing duplicates******")
sll.removeDuplicates()
sll.printAll()




