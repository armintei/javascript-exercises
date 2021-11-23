
const sumAll = function (start, end) {
    if( start < 0 || end < 0){
        console.log('ERROR');
    } else {
    let i = start;
    let sum = 0;
    if (start < end) {
        do {
            sum += i
            i++
            console.log(sum)
        }
        while (i <= end);
        return sum;
    } else {
        do {
            sum += i
            i--
            console.log(sum)
        }
        while (i >= end);
        return sum;
    }
    }
};
sumAll(-10, 4);

// Do not edit below this line
module.exports = sumAll;
