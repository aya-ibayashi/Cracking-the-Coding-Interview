# 1.5
# One Away: There are three types of edits that can be performed on strings: insert a character,
# remove a character, or replace a character. Given two strings, write a function to check if they are
# one edit (or zero edits) away. 

def OneAway(str1, str2):
    # quick exits
    if str1 == str2:
        return True
    if abs( len(str1) - len(str2) ) > 1:
        return False
    
    # if string lengths are the same
    editCount = 0
    if len(str1) == len(str2):
        for i in range(0, len(str1)):
            if str1[i] != str2[i]:
                editCount +=1
                if editCount > 1:
                    return False
        return True

    # if strings' lengths are different
    editCount = 0
    i = 0
    j = 0
    if len(str1) > len(str2):
        longString = str1
        shortString = str2
    if len(str2) > len(str1):
        longString = str2
        shortString = str1

    while j < len(shortString):
        if longString[i] != shortString[j]:
            editCount += 1
            i += 1
        else:
            i += 1
            j += 1

        if editCount > 1:
            return False

    return True

    # check below if a character is deleted before the end    
    # if shortString[len(shortString)] != longString[len(longString)]

testString0 = "pile"
testString1 = "pale"
testString2 = "pike"
testString3 = "pal"
testString4 = "paler"
testString5 = "pat"
testString6 = "apt"
testString7 = "pie"

print(OneAway(testString0, testString1))
