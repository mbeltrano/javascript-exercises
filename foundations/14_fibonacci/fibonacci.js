const fibonacci = function (num) {
    if (typeof num !== 'number') {
        num = parseInt(num)
    } else num;
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    let tempNum1;
    let tempNum3 = [1, 1];
    if (num > 2) {
        for (let i = 0; i < num - 2; i++) {
            tempNum1 = tempNum3[i] + tempNum3[i + 1];
            tempNum3.push(tempNum1);
        }
    }
    console.log(tempNum3[num - 1]);
    return tempNum3[num - 1];

};

// Do not edit below this line
module.exports = fibonacci;
