const caesar = function(string, num) {
    const alphabet = ["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    if(string.length == 1){
        for(i = alphabet.indexOf(string); i <= num; i++) {
            result = alphabet[i];
        }
        return result;
    } else {
        splitString = string.split("");

    }
};
caesar("a",1)
// Do not edit below this line
module.exports = caesar;
