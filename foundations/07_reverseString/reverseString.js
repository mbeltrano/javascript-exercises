const reverseString = function(stringa) {
    let result = "";
    for(let i = stringa.length-1; i >=0 ; i--){
        result += stringa[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
