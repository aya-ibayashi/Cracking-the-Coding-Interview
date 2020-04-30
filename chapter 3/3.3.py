# 3.3 
# Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
# Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
# threshold. Implement a data structure SetOfStack s that mimics this. SetOfStack s should be
# composed of several stacks and should create a new stack once the previous one exceeds capacity.
# SetOfStack s .push() and SetOfStack s .pop() should behave identically to a single stack
# (that is, pop( ) should return the same values as it would if there were just a single stack).
# FOLLOW UP
# Implement a function popAt( in t index ) which performsa pop operation on a specific sub-stack.
# Hints: #64, #81 


class Stack:
    def __init__(self):
        self.items = []
        self.minTracker = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        if self.isEmpty():
            self.minTracker.append(item)
        elif item < self.minTracker[len(self.minTracker)-1]:
            self.minTracker.append(item)
        else:
            self.minTracker.append(self.minTracker[len(self.minTracker)-1])
        self.items.append(item)

    def pop(self):
        if self.isEmpty():
            return None
        else:
            self.minTracker.pop()
            return self.items.pop()

# [10, 1, 9, 5, 2, 0, -3]
    # self.minTracker = [10, 1, 1, 1, 1, 0, -3]

    def peek(self):
        return self.items[len(self.items)-1]

    def size(self):
        return len(self.items)


class SetOfStacks:
    def __init__ (self, max):
        self.setOfStacks = [Stack()]
        self.max = max
    
    def push (self, item):
        lastStack = self.setOfStacks[len(self.setOfStacks)-1]
        if lastStack.isEmpty() or lastStack.size() < self.max:
            lastStack.push(item)
        else:
            newStack = Stack()
            self.setOfStacks.append(newStack.push(item))

    def pop (self):
        lastStack = self.setOfStacks[len(self.setOfStacks)-1]
        poppedItem = lastStack.pop()
        if lastStack.isEmpty():
            del lastStack
        return poppedItem
    


set = SetOfStacks(3)
print(set.max)
set.push(1)
set.push(2)
set.push(3)
set.push(4)
set.push(5)
print(len(set.setOfStacks[0].items))
set.pop()
set.pop()
print(len(set.setOfStacks))
print(set)
        


