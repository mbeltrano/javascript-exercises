const repeatString = function(stringa, num) {
    if(num < 0 || isNaN(num)) return "ERROR";
    let repeat = ""
    for(let i = 0; i < num; i++){
        repeat += stringa;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
