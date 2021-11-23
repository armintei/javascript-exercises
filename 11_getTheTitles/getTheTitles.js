const getTheTitles = function(arr) {
    outArr = arr.map(function(item) {return item["title"];})
    return outArr;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];

getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
