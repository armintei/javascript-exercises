const removeFromArray = function(arr, rem) {
   let args = Array.from(removeFromArray);
   console.log(args);
    for(i = 1; i < arr.length; i++) {
    if(arr[i] === rem) {
        arr.splice(i, 1)
    }   
   }
   return arr;
};

removeFromArray([1, 2, 3, 4], 4, 3);
// Do not edit below this line
module.exports = removeFromArray;
