const sumAll = function(num1, num2) {
    if((num1 < 0 || num2 < 0) || (!Number.isInteger(num1) ||!Number.isInteger(num2) )) return "ERROR";
    let i;
    let j;
    let result = 0;
    if(num1 > num2) 
        {i = num2;j = num1;} 
    else {i = num1;j = num2;}
    while(i <= j){
        result+=i;
        i++;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
