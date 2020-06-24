# 1.6
# implement a method to perform basic string compression using the counts of repeated characters
# e.g. string 'aabcccccaaa' would become a2b1c5a3
# if the compressed string would not become shorter than the original string, return original string
# can assume the string has only uppercase and lowercase letters

def StringCompression(string):
    if len(string) > 1:
        newString = string[0]
        charCount = 1

        for i in range(1, len(string)):
            if string[i] == string[i-1]:
                charCount += 1
            if string[i] != string[i-1]:
                newString += str(charCount)
                charCount = 1
                newString += string[i]
            if(i == len(string)-1):
                newString += str(charCount)

        if len(newString) < len(string):
            return newString
        else:
            return string
    else:
        return "String cannot be compressed"

string1 = "aaabbbbbccddd"
string2 = "abcd"
string3 = "a"
string4 = "aaabccdddee"

print(StringCompression(string4))