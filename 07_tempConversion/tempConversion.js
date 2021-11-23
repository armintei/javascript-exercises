const ftoc = function(tempF) {
  let toC = (tempF - 32) * (5/9);
  return Math.round(toC * 10) / 10;
  
};

const ctof = function(tempC) {
  let toF = (tempC * (9/5)) + 32;
  return Math.round(toF * 10) / 10; 
};
ftoc(32);
//ctof(25)
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
