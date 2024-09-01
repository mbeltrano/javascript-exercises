const fibonacci = function(position) {
    let convertPosition = parseInt(position);
    if(convertPosition === 0) return 0;
    if(convertPosition === 1 || convertPosition === 2) return 1;
    if(convertPosition < 0) return "OOPS";
    let fiboStart = [1 , 1];
    for(let i = 2; i <= convertPosition; i++){
        fiboStart.push(fiboStart[0] + fiboStart[1]);
        fiboStart.shift();
    }
    return fiboStart[0];


};
fibonacci("8");
// Do not edit below this line
module.exports = fibonacci;
