const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArr) {
  let result = 0;
  for (i = 0; i < numArr.length; i++) {
    result += numArr[i];
  }
  return result;
  console.log(result);
};

const multiply = function (numArr) {
  let result = 1;
  for (i = 0; i < numArr.length; i++) {
    result *= numArr[i];
  }
  return result;
  console.log(result);
};

const power = function (num1, num2) {
  return num1 **= num2
};

const factorial = function (num) {
  if (num == 0) {
    console.log(1);
  } else {
    result = 1;
    for (i = num; i > 0; i--) {
      result *= i;
    }
    return result;
    console.log(result);
  }
};
add(1, 2);
subtract(7, 4);
sum([7, 11]);
multiply([2, 4])
power(4,3);
factorial(0);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
