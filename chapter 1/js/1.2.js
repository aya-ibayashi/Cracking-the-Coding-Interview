// Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other. 
// I: two strings
// O: boolean
// C: none
// E: empty  strings, different lengths

function isPermutation(str1,str2){
    if (str1.length == 0 || str2.length == 0){
        return false
    }
    if (str1.length != str2.length){
        return false
    }
    let checker = {}
    for (let i=0; i<str1.length; i++){
        if (!checker[str1[i]]){
            checker[str1[i]] = 1;
        } else{
            checker[str1[i]] += 1;
        }
    }
    for (let i=0; i<str2.length; i++){
        if (!checker[str2[i]]){
            return false
        }
        else if (checker[str2[i]] < 0){
            return false
        }
        checker[str2[i]] -= 1;
    }
    return true;
}

console.log(isPermutation("hellooheel", "hellohello"))