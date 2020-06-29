// 1.6 String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3, If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z). 
// I: string
// O: string
// C: compressed str cannot be larger than original
// E: empty string

function compressStr(str){
    if (str.length == 0){
        return null;
    }
    let newStr = "";
    let count = 1;
    let char = str[0];
    for (let i =1; i<=str.length; i++){
        if(char != str[i]){
            newStr = newStr + char + count;
            char = str[i];
            count = 1;
        } else {
            count ++;
        }
    }
    if (str.length <= newStr.length){
        return str;
    }
    return newStr;
}

// console.log(compressStr("aabcccccaaa"))
// console.log(compressStr("bbbbbbccaasst"))