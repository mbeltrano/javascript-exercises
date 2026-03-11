const removeFromArray = function(arrayIn,...args) {
  let result = []
  for(let i = 0; i < arrayIn.length; i++){
    if(!args.includes(arrayIn[i])) 
      result.push(arrayIn[i])}
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
