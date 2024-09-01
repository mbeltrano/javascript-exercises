const reverseString = function(word) {
    let reverseWord = "";
    let lengthWord = word.length;
    if(lengthWord === 0) return "";
    for(let i = (lengthWord-1); i >= 0; i--){
        reverseWord += word[i];
    }
    return reverseWord;

};
// Do not edit below this line
module.exports = reverseString;
