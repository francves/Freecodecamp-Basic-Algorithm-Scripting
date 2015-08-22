function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort();
  var i = 0;
  while(num > arr[i]){
    i++;
  }
  return i;
}

where([40, 60], 50);
