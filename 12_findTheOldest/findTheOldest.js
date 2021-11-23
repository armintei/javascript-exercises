const findTheOldest = function(arr) {
  check = arr.map(function(item) {return item["yearOfDeath"];})
  if(check.includes(undefined)){
    arr.splice(check.indexOf(undefined), 1);
  }
  result = arr.map(function(item) {return item["yearOfDeath"] - item["yearOfBirth"];})
  console.log(result);
  oldest = result.indexOf(Math.max.apply(Math, result));
  return arr[oldest];
  //return Math.min(...result) would return the same
};
const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
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
];

findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
