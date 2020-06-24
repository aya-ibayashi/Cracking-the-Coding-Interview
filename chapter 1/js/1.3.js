// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.) 

function uRLify(str){
    if(str.length == 0){
        return str;
    }
    let strArr=str.split(" ");
    console.log(strArr)
    let newStr = "";
    for (let i=0; i<strArr.length-1; i++){
        newStr = newStr + strArr[i] + "%20";
    }
    newStr = newStr + strArr[strArr.length-1];
    return newStr;
}

// function uRLify(str){
//     if(str.length == 0){
//         return str;
//     }
//     let count = 0;
//     for (let i=0; i<str.length; i++){
//         if(str[i] == " "){
//             count ++;
//         }
//     }
//     count = count * 2;
//     for (let i=str.length-1; i>=0; i--){
//         if(str[i]!= " "){
//             str[i+count] = str[i]
//         }
//         if(str[i] == " "){
//             str[i] = "%20"
//         }
//         console.log("inside for loop: " + str)
//     }
//     return str;
// }

// console.log(uRLify("st ri ng"))
