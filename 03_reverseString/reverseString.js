const reverseString = function(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
};
reverseString('hello world!23');
// Do not edit below this line
module.exports = reverseString;
