# 2.5 Sum Lists: You have two numbers represented by a linked list, where each node contains a single
# digit. The digits are stored in reverse order, such that the Vs digit is at the head of the list. Write a
# function that adds the two numbers and returns the sum as a linked list.
# EXAMPLE
# Input: (7- > 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
# Output: 2 -> 1 -> 9. That is, 912.
# FOLLOW UP
# Suppose the digits are stored in forward order. Repeat the above problem.
# EXAMPLE
# Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is, 617 + 295,
# Output:9 -> 1 -> 2,Thatis,912.
# Hints: #7, #30, #71 #95, #109 

class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next
    
class SLL:
    def __init__ (self):
        self.head = None

    def printAll(self):
        current = self.head
        while current != None:
            print(current.val)
            current = current.next
    
    def addNode(self, val):
        if self.head == None:
            self.head = Node(val)
        else:
            newNode = Node(val)
            current = self.head
            while current.next != None:
                current = current.next
            current.next = newNode
    
    def removeFromMiddle(self, val):
        if self.head == None or self.head.next == None:
            return False
        current = self.head
        while current.next != None:
            if current.next.val == val and current.next.next != None:
                current.next = current.next.next
                isRemoved = True
                return 
            current = current.next
        print("the value does not exist")

def sumLists (SLL1, SLL2):
    if SLL1.head == None and SLL2.head == None:
        return None
    elif SLL1.head == None:
        return SLL2
    elif SLL2.head == None:
        return SLL1
    else:
        current = SLL1.head
        power = 0
        number1 = 0
        while (current != None):
            number1 += (current.val * (10**power))
            power += 1
            current = current.next
        
        current = SLL2.head
        power = 0
        number2 = 0
        while (current != None):
            number2 += (current.val * (10**power))
            power += 1
            current = current.next
        sum = number1 + number2
        strSum = str(sum)
        print(strSum)
        newList = SLL()
        for i in range(len(strSum)-1, -1, -1):
            newList.addNode(strSum[i])
        return newList.printAll()

SLL1 = SLL()
SLL1.addNode(7) 
SLL1.addNode(1) 
SLL1.addNode(6) 

SLL2 = SLL()
SLL2.addNode(5)
SLL2.addNode(9)
SLL2.addNode(2)

sumLists(SLL1,SLL2)
