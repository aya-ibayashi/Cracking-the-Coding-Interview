// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
// EXAMPLE
// Input: Tac t Coa
// Output: Tru e (permutations : "tac o cat" , "atc o eta" , etc. ) 

// I: string
// O: boolean
// C: does not have to be dictionary words. ascii? unicode?
// E: empty string

function isPalindromePerm(originalStr){
    if (originalStr.length == 0){
        return null;
    }
    let str = originalStr.toLowerCase();
    console.log(str);
    let dict = {};
    let count = 0;
    for (let i=0; i<str.length; i++){
        if (!dict[str[i]] || dict[str[i]] == 0){
            dict[str[i]] = 1;
            count ++;
        }
        else if (dict[str[i]] == 1){
            dict[str[i]] = 0;
            count --;
        }
    }
    if (count > 1){
        return false;
    }
    return true;
}
