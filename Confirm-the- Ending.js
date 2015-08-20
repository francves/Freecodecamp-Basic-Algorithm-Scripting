function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var subStr = str.substr(str.length - target.length,target.length);
  if(subStr == target)
  return true;
  else
    return false;
}

end('Bastian', 'n');
