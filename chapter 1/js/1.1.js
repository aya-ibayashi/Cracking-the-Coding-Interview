// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

// Input: string
// Output: Boolean
// Constraints: no additional data structures, optimize
// Edge Cases: empty string

// function isUnique(str){
//     if (str.length == 0){
//         return null
//     }
//     if (str.length == 1) {
//         return true;
//     }
//     for (let i=0; i<str.length; i++){
//         for (let j=i+1; j<str.length; j++){
//             if (str[i] == str[j]){
//                 return false
//             }
//         }
//     }
//     return true;
// }


//Answer using a hashmap
// function isUnique(str){
//     if (str.length == 0){
//         return null
//     }
//     if (str.length == 1){
//         return true
//     }
//     let arr = [];
//     for (let i=0; i<str.length; i++){
//         asciiCode = str.charCodeAt(i);
//         if (!arr[asciiCode]){
//             arr[asciiCode] = str[i];
//         } else {
//             return false
//         }
//     }
//     return true;
// }
// console.log(isUnique('??'))