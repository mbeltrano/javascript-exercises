//const findTheOldest = function() {};
const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
function findTheOldest(people){
    let currentYear = new Date().getFullYear();
    let nameAge = people.map((item) => 
        {let data = {"name": item.name, "age": ""}; 
    if(item.yearOfDeath === undefined)  {data['age'] = parseInt(currentYear) -  parseInt(item.yearOfBirth)}
    else {data['age'] = parseInt(item.yearOfDeath) -  parseInt(item.yearOfBirth) }
    return data;})
}
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
