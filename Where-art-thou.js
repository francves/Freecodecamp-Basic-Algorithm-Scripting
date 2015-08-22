function where(collection, source) {
  var arr = [];
  var obj;
  for(var i = 0; i < collection.length; i++){
    obj = collection[i];
    if(obj['last'] == source['last']) // to acces the value of the propertie
      arr.push(obj);
    // obj['first']; 
  }
  return arr;
  
  
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
