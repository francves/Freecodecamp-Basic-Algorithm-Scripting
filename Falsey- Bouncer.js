function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function test(value){
    
    return value !== false && value !== "" && value !== null && value !== 0 && value !== undefined && value !== isNaN;
  }
  
  return arr.filter(test);
   
}

bouncer([7, 'ate', '', false, 9]);
