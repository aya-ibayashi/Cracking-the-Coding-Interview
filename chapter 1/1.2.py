# 1.2
# Check Permutation: Given two strings, write a method to decide if one is a permutation of the
# other. 

def isPermutation(str1, str2):
    if len(str1) != len(str2):
        return False
    charCounter = {}
    for i in str1:
        if i not in charCounter:
            charCounter[i] = 1
        else:
            charCounter[i] += 1
    for i in str2:
        if i in charCounter:
            charCounter[i] -= 1
            if charCounter[i] == 0:
                charCounter.pop(i)
        else:
            charCounter[i] = 1
    if charCounter == {}:
        return True
    return False

str1="abcc"
str2="cabcc"

print(isPermutation(str1,str2))