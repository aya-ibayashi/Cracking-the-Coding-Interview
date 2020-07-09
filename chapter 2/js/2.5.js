// Sum Lists: You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the Vs digit is at the head of the list. Write a
// function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input: (7- > 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem.
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is, 617 + 295, 

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
}
//reverse order
// function sumLists(list1,list2){
//     if(list1.head == null && list2.head == null){
//         return null;
//     } else if (list1.head == null || list2.head == null){
//         return list1.head == null? list2 : list1
//     }
//     let runner = list1.head;
//     let str1="";
//     let str2="";
//     while(runner != null){
//         str1 = runner.value + str1;
//         runner = runner.next
//     }
//     runner = list2.head;
//     while(runner != null){
//         str2 = runner.value + str2;
//         runner = runner.next
//     }
//     console.log(str1)
//     console.log(str2)
//     let sum = (+str1) + (+str2)
//     let sumStr = sum.toString()
//     let sumList = new SLL();
//     for(let i=sumStr.length-1; i>=0; i--){
//         sumList.append(sumStr[i])
//     }
//     console.log(sumList)
//     return sumList
// }

//forward order
function sumLists(list1,list2){
    if(list1.head == null && list2.head == null){
        return null;
    } else if (list1.head == null || list2.head == null){
        return list1.head == null? list2 : list1
    }
    let runner = list1.head;
    let str1="";
    let str2="";
    while(runner != null){
        str1 = str1 + runner.value;
        runner = runner.next
    }
    runner = list2.head;
    while(runner != null){
        str2 = str2 + runner.value;
        runner = runner.next
    }
    console.log(str1)
    console.log(str2)
    let sum = (+str1) + (+str2)
    let sumStr = sum.toString()
    let sumList = new SLL();
    for(let i=0; i<sumStr.length; i++){
        sumList.append(sumStr[i])
    }
    console.log(sumList)
    return sumList
}



let sll1 = new SLL()
sll1.append(6)
sll1.append(1)
sll1.append(7)
let sll2 = new SLL()
sll2.append(2)
sll2.append(9)
sll2.append(5)

let list = sumLists(sll1, sll2)
console.log(list)
list.printAll()
