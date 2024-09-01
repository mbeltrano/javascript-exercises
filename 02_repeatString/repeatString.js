const repeatString = function (stringToRepeat, numOfRepeat) {
    let conc = "";
    if (numOfRepeat >= 0) {
        for (let i = 0; i < numOfRepeat; i++) {
            conc += stringToRepeat;
        }
        return conc;
    }
    
    else {
        return "ERROR";
    }


};

// Do not edit below this line
module.exports = repeatString;
