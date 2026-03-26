const findTheOldest = function(arrayOfPeople){
  
  return arrayOfPeople.sort((a, b ) => age(b.yearOfDeath,b.yearOfBirth) - age(a.yearOfDeath,a.yearOfBirth) )[0];
};
function age(yearDeath, yearBirth ){
  yearDeath = (yearDeath)? yearDeath : new Date().getFullYear();
  console.log(yearDeath-yearBirth);
  return yearDeath-yearBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
