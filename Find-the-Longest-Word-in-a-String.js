function findLongestWord(str) {
  var maxLength = 0;
  strSplit = str.split(" ");
  for(var i = 0; i < strSplit.length; i++){
    if(maxLength < strSplit[i].length){
      maxLength = strSplit[i].length;
    }
  }
  return maxLength;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
