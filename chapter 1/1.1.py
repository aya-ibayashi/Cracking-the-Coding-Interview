# 1.1
# Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
# cannot use additional data structures? 

def isUnique (string):
    for i in range(len(string)):
        currentChar = string[i]
        for j in range(i+1, len(string)):
            if string[j] == currentChar:
                return False
    return True
print(isUnique(str))