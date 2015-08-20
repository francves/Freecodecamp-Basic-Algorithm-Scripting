function titleCase(str) {
  var auxWord;
  str = str.toLowerCase();
  var strSplit = str.split(" ");
  for(var i = 0; i < strSplit.length; i++){
    auxWord = strSplit[i];
    auxWord = auxWord.replace(auxWord.charAt(0), auxWord.charAt(0).toUpperCase()); // Change the first letter to upper
    strSplit[i] = auxWord;
  }
  strSplit = strSplit.join(" "); // join strings separated by a space
  return strSplit;
}

titleCase("I'm a little tea pot");
