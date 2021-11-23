const fibonacci = function (fibo) {
    let number = parseInt(fibo);
    if (number < 0) {
        return 'OOPS';
        console.log('OOPS');
    } else {
        let n1 = 0, n2 = 1, nextTerm;
        for (i = 1; i <= number; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
        return n1;
    }
};
fibonacci(6);
// Do not edit below this line
module.exports = fibonacci;
