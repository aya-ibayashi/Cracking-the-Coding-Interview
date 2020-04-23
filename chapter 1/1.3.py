# 1.3
# URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
# has sufficient space at the end to hold the additional characters, and that you are given the "true"
# length of the string. (Note: If implementing in Java, please use a character array so that you can
# perform this operation in place.) 

def URLify (string):
    if ' ' not in string:
        return string
    else:
        list = string.split(" ")
        newString = ""
        for i in range(0,len(list)-1):
            newString += list[i]
            newString += "%20"
        newString += list[len(list)-1]
        return newString

print(URLify("Mr Jones hello"))    

1.4
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 


racecarr ayya \{r:2, a:2, c:2, e:1} {r:true a:truec:true e:false}
def palidnromePermutation (oldStr):
    dictionary = {}
    str = oldStr.lower()

    for i in range(len(str)):
        if str[i] not in dictionary and str[i] != " "  :
            dictionary[str[i]] = False
        elif str[i] in dictionary:
            dictionary[str[i]] = not dictionary[str[i]]
        
    print(dictionary)
    f = 0
    for key, value in dictionary.items():
        if value == False:
            f = f + 1

        if f > 1: 
           return False

    return True
print(palidnromePermutation("Taco cat"))