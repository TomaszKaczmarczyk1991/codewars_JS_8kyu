function noSpace(x){
  const result = [];
  
  for(let a of x) {
    if(a !== ' ') result.push(a);
  }
  return result.join('');
}