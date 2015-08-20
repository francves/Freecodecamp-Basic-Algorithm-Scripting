function palindrome(str) {
  // Good luck!
 var noSpace = str.replace(/\W/g, '').toLowerCase();
  var reverseString = noSpace.split('').reverse().join('');
  if(reverseString == noSpace)
    return true;
  else
    return false;

}

palindrome("eye");

