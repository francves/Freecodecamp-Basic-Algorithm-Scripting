function chunk(arr, size) {
  // Break it up.
  var strAux, arr2 = [];
  
  var i = 0; // inferior
  var j = size; //superior
  while(i < arr.length){
    strAux = arr.slice(i,j);
    arr2.push(strAux);
    i = i + size;
    j = j + size;
  }
  
  return arr2;
}

chunk([0, 1, 2, 3, 4, 5], 3);
