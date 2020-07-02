// String Rotation; Assume you have a method isSubs t rin g which checks if one word is a substring
// of another. Given two strings, si and s2, write code to check if s2 is a rotation of si using only one
// call to isSubs t rin g [e.g., "waterbottle " is a rotation of'erbottlewat"), 
// I: S1 & S2
// O: Boolean
// C: use isSubstring Once
// E: empty string, one character, spaces, ASCII, unicode 

function isSubstring(str1, str2){
    if(str1.length == 0 || str2.length == 0){
        return false
    }
    let longStr = str1;
    let shortStr = str2;
    if(str1.length<str2.length){
        shortStr = str1
        longStr = str2
    }
    for(let i=0; i<longStr.length; i++){
        if(longStr[i] == shortStr[0]){
            let k = 1;
            let l = i+1;
            while(k<shortStr.length){
                if(shortStr[k] == longStr[l]){
                    if(k == shortStr.length-1){
                        return true
                    }
                    k++;
                    l++;
                } else {
                    break;
                }
            }
        }   
    }
    return false
}

let str1 = 'ttlewaterbot'
let str2 = 'waterbotttle'

// console.log(isSubstring(str1,str2))

function stringRotation(str1,str2){
    if(str1.length == 0 || str2.length == 0){
        return false
    }
    if(str1.length != str2.length){
        return false
    }
    let combinedStr = str2 + str2
    console.log(combinedStr)
    return isSubstring(str1, combinedStr)
}

console.log(stringRotation(str1,str2))