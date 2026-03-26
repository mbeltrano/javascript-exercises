const getTheTitles = function(arrayOfBooks) {
  /*let result =[];
  for(let tit of arrayOfBooks){
  
  result.push(tit.title)
  }
  console.log(result);
  return result;
  */
  return arrayOfBooks.map((book) => book.title);

};

// Do not edit below this line
module.exports = getTheTitles;
