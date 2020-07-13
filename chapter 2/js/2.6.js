// Palindrome: Implement a function to check if a linked list is a palindrome. 
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
    isPalindrome(){
        if(this.head == null){
            return null;
        }
        if(this.head.next == null){
            return true;
        }
        let fast = this.head;
        let slow = this.head;
        let checkList = new SLL();
        while(fast != null && fast.next != null){
            if(checkList.head == null){
                checkList.append(slow.value);
            } else {
                let newNode = new Node(slow.value);
                newNode.next = checkList.head;
                checkList.head = newNode;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        let checkListRunner = checkList.head;
        if(fast != null){
            slow = slow.next;
        }
        while (slow != null){
            if(checkListRunner.value != slow.value){
                return false
            }
            slow = slow.next;
            checkListRunner = checkListRunner.next;
        }
        return true;
    }
}

let sll1 = new SLL()
sll1.append(6)
sll1.append(1)
sll1.append(7)
sll1.append(7)
sll1.append(1)
sll1.append(6)

console.log(sll1.isPalindrome())

