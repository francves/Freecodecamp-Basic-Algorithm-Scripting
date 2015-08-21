function mutation(arr) {
  var indice;
  var i = 0;
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
    while( indice != -1 && i < arr[1].length){
      indice = arr[0].indexOf(arr[1].charAt(i));
      i++;
    }
  if(indice == -1)
    return false;
  else
    return true;
}

mutation(['Hello', 'hEy']);
