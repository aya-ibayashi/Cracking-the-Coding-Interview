#Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks. 
#FIFO (first in first out)

class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

class MyQueue:
    def __init__(self):
        self.head = None
        self.size = 0

    def isEmpty(self):
        return self.size == 0

    def addNode(self, newNode):
        if self.isEmpty():
            self.head = newNode
        else:
            current = self.head
            while current.next != None:
                current = current.next
            current.next = newNode
        self.size += 1

    def removeNode(self):
        if self.isEmpty():
            print("Queue is empty")
        else:
            self.head = self.head.next
            self.size -= 1

    def printAll(self):
        if self.isEmpty():
            print("Queue is empty")
        else:
            current = self.head
            while current != None:
                print(current.val)
                current = current.next

# class Stack:
#     def __init__(self):
#         self.items = []

#     def isEmpty(self):
#         return self.items == []

#     def push(self, item):
#         self.items.append(item)

#     def pop(self):
#         return self.items.pop()

#     def peek(self):
#         return self.items[len(self.items)-1]

#     def size(self):
#         return len(self.items)
    
#     def printAll(self):
#         for data in self.items[::-1]:
#             print(data)

# class MyQueue:
#     def __init__ (self):
#         self.stack1 = Stack()
#         self.stack2 = Stack()
    
#     def isEmpty(self):
#         return self.stack1.isEmpty()
    
#     def peek(self):
#         if self.isEmpty():
#             return "The Queue is empty"
#         else:
#             return self.stack1.items[0]
    
#     def size(self):
#         return self.stack1.size()

#     def printAll(self):
#         for i in self.stack1.items:
#             print(i)

#     def push(self, item):
#         if self.isEmpty():
#             self.stack1.push(item)
#         else:
#             while not self.stack1.isEmpty():
#                 self.stack2.push(self.stack1.pop())
#             self.stack2.push(item)
 
#             while not self.stack2.isEmpty():
#                 self.stack1.push(self.stack2.pop())
    
#     def pop(self):
#         if self.isEmpty():
#             print("Queue is empty")
#         else:
#             stack1Length = self.stack1.size()
#             for i in range(stack1Length-1, 0, -1):
#                 self.stack2.push(self.stack1.pop()) 
#             poppedItem = self.stack1.pop()

#             stack2Length = self.stack2.size()
#             for i in range(stack2Length-1, -1, -1):
#                 self.stack1.push(self.stack2.pop())
#             return poppedItem
        

            
#Queue made using a SLL
# node1 = Node(1)
# node2 = Node(2)
# node3 = Node(3)
# node4 = Node(4)
# node5 = Node(5)

# q = MyQueue()
# q.addNode(node1)
# q.addNode(node2)
# q.addNode(node3)
# q.addNode(node4)
# q.addNode(node5)
# q.removeNode()
# q.printAll()

#Queue with two stacks

# q = MyQueue()
# q.push(2)
# q.push(3) 
# q.push(4) 
# q.printAll()
# q.pop()
# q.pop()
# q.push(5)
# q.push(6)
# q.printAll()



