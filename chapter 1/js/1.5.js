// One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.
// EXAMPLE
// pale , pi e - > tru e
// pales , pal e - > tru e
// pale , bal e - > tru e
// pale , bak e - > fals e 

function oneAway(str1,str2){
    if (Math.abs(str1.length - str2.length)>1){
        return false;
    }
    if (str1 == str2){
        return true;
    }
    let oneDifferent = false;
    let strL = str1;
    let strS = str2;
    if (str1.length < str2.length){
        strL = str2;
        strS = str1;
    }
    let longStrIndex = 0;
    let shortStrIndex = 0;

    while(shortStrIndex < strS.length){
        console.log(strS[shortStrIndex])
        if(strS[shortStrIndex] != strL[longStrIndex]){
                if (oneDifferent){
                    return false
                }
                oneDifferent = true;
            if(strS.length == strL.length){
                shortStrIndex ++;
            }
        } else {
            shortStrIndex ++;
        }
        longStrIndex ++;
    }
    return true;
}

testString0 = "pile"
testString1 = "pale"
testString2 = "pike"
testString3 = "pal"
testString4 = "paler"
testString5 = "pat"
testString6 = "apt"
testString7 = "pie"

console.log(oneAway(testString7, testString0))