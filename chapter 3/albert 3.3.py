class Stack:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[len(self.items)-1]

    def size(self):
        return len(self.items)
    
    def printAll(self):
        for data in self.items[::-1]:
            print(data)

# // [3.3] Stack of Plates
# //Stack of Plates: Imagine a stack of plates. If the stack gets too high, it might topple.
# // Therefore, IRL we would likely start new stack when previous stack exceeds threshold
# // Implement a data structure SetOfStack s that mimics this. SetOfStack s should be
# // composed of several stacks and create a new stack once the previous one exceeds capacity.
# // SetOfStack s .push() and SetOfStack s .pop() should behave identically to a single stack
# // (that is, pop( ) should return the same values as it would if there were just a single stack).
class SetOfStacks:
    def __init__(self, stackCapacity=6):
        self.items = [ ]
        self.currentStack = 0
        self.stackCapacity = stackCapacity

    def isEmpty(self):
        return self.items == []

    def peek(self):
        return self.items[self.currentStack][len(self.items[self.currentStack])-1]

    def size(self):
        count = 0
        for i in range( 0, len(self.items) ):
            count += len(self.items[i])
        return count

    def printSet(self):
        #incomplete
        #Ask why p
        for i in range( len(self.items)-1, -1, -1):
            print( "------", i, "---------")
            print( self.items[i].printAll() )
        return "Print completed"

    def push(self, item):
        if len( self.items ) == 0:
            self.items.append( Stack() )
        if self.items[self.currentStack].size() < self.stackCapacity:
            self.items[self.currentStack].push(item)
        elif self.items[self.currentStack].size() >= self.stackCapacity:
            self.items.append( Stack() )
            self.currentStack += 1
            self.items[self.currentStack].push(item)

    def pop(self):
        if not self.items[self.currentStack].isEmpty():
            poppedItem = self.items[self.currentStack].items.pop()
            if self.items[self.currentStack].isEmpty():
                del self.items[self.currentStack]
                self.currentStack -= 1
            return poppedItem
    def popAt(self, stackIndex):
        if stackIndex > len( self.items )-1:
            return "Stack Index is out of range"
        else:
            return self.items[stackIndex].pop()


newSetOfStacks = SetOfStacks()
newSetOfStacks.push(-1)
newSetOfStacks.push(5)
newSetOfStacks.push(1)
newSetOfStacks.push(7)
newSetOfStacks.push(1)
newSetOfStacks.push(8)
newSetOfStacks.push(6)
newSetOfStacks.push(-3)
newSetOfStacks.push(2)
newSetOfStacks.push(4)
newSetOfStacks.push(512)
newSetOfStacks.push(13)
newSetOfStacks.push(7)
newSetOfStacks.push(8)
newSetOfStacks.push(9)
newSetOfStacks.push(-31)
# print( newSetOfStacks.popAt(45) )
# newSetOfStacks.popAt(0)

newSetOfStacks.printSet()