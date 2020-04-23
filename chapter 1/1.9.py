#1.9 String Rotation; Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, si and s2, write code to check if s2 is a rotation of si using only one call to isSubstring [e.g., "water bottle" is a rotation of 'erbottlewat"], 

#34, 1.9 If a string is a rotation of another, then it's a rotation at a particular point. For example, a rotation of water bottle at character 3 means cutting water bottle at character 3 and putting the right half (erbottle) before the left half (wat). 

#88. 1.9 We are essentially asking if there's a way of splitting the first string into two parts, x and y, such that the first string is xy and the second string is yx. For example, x = wat and y = erbottle. The first string is xy = waterbottle. The second string is yx = erbottlewat

#104. 1.9 Think about the earlier hint. Then think about what happens when you concatenate erbottlewat to itself. You get erbottlewaterbottlewat


def isSubstring(str1, str2):
    if len(str1) < len(str2):
        subString = str1
        string = str2
    if len(str1) >= len(str2):
        subString = str2
        string = str1
    
    i = 0
    j = 0
    matchCount = len(subString)
    while i < len(string):
        if string[i] == subString[j]:
            i += 1
            j += 1
            matchCount -= 1
            if matchCount == 0:
                return True
        if string[i] != subString[j]:
            i += 1
            j = 0
            matchCount = len(subString)

        return False

def isStringRotation(s1, s2):
    if len(s1) != len(s2):
        return False
    s3= s1+s1
    if isSubstring(s3, s2):
        return True
    return False

str1 = "waterbottle"
str2 = "terbottlewa"

print(isStringRotation(str1,str2))