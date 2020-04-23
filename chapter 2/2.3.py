# 2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
# the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
# that node. 

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
                

list = SLL()
list.addNode("a")
list.addNode("b")
list.addNode("c")
list.addNode("c")
list.addNode("d")
list.addNode("c")
list.addNode("e")
# list.printAll()
list.removeFromMiddle("c")
list.printAll()