class Animal:
    def __init__(self, type, next=None):
        self.type = type
        self.next = next

class AnimalShelter:
    def __init__(self):
        self.head = None
        self.catList = []
        self.dogList = []
        

    def isEmpty(self):
        return self.totalCount == 0

    def enqueue(self, newAnimal):
        if self.isEmpty():
            self.head = newAnimal
        else:
            current = self.head
            while current.next != None:
                current = current.next
            current.next = newAnimal
        if newAnimal.type == "cat":
            self.catCount += 1
        else:
            self.dogCount += 1
        self.totalCount += 1

    def dequeueAny(self):
        if self.isEmpty():
            print("The animal shelter is empty")
        else:
            if self.head.type == "cat":
                self.catCount -= 1
            elif self.head.type == "dog":
                self.dogCount -= 1
            self.totalCount -= 1
            adoptedAnimal = self.head
            self.head = self.head.next
            return adoptedAnimal
    
    def dequeueCat(self):
        if self.catCount == 0:
            print("The animal shelter does not have any cats")
        elif self.head.type == "cat":
            adoptedCat = self.head
            self.head = self.head.next
            self.catCount -= 1
            self.totalCount -= 1
            return adoptedCat
        else:
            current = self.head
            prev = self.head
            while current != None:
                if current.type == "cat":
                    adoptedCat = current
                    prev.next = current.next
                    self.catCount -= 1
                    self.totalCount -= 1
                    return adoptedCat
                prev = current
                current = current.next

    def dequeueDog(self):
        if self.dogCount == 0:
            print("The animal shelter does not have any dogs")
        elif self.head.type == "dog":
            adoptedDog = self.head
            self.head = self.head.next
            self.dogCount -= 1
            self.totalCount -= 1
            return adoptedDog
        else:
            current = self.head
            prev = self.head
            while current != None:
                if current.type == "dog":
                    adoptedDog = current
                    prev.next = current.next
                    self.dogCount -= 1
                    self.totalCount -= 1
                    return adoptedDog
                prev = current
                current = current.next