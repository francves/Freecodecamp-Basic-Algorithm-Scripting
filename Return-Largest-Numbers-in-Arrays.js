function largestOfFour(arr) {
  // You can do this!
  
  function compareNumbers(a, b) {
  return a - b;
}
  
  var arrLargest = [];
  var arrSort;
for(var i = 0; i < arr.length; i++){
  arrSort = arr[i].sort(compareNumbers);
  arrLargest.push(arrSort[3]);
}
  return arrLargest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
