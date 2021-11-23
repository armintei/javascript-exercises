const palindromes = function (maybePalin) {
    let splitPalin = maybePalin.split("");
    let revPalin = splitPalin.reverse();
    //.replace(/\W/g, '') ignores non-alphanumeric chars in the string.
    let joinPalin = revPalin.join("").toLowerCase().replace(/\W/g, '');
    maybePalin = maybePalin.toLowerCase().replace(/\W/g, '');
    console.log(joinPalin, maybePalin);
    if(joinPalin === maybePalin){
        return true;
        console.log('true');
      } else {
        return false;
        console.log('false')
      }
};
palindromes('Racecar');
// Do not edit below this line
module.exports = palindromes;
