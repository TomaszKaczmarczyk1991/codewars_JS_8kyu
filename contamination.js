function contamination(text, char) {
  let arr = [...text];
  
  return arr.map(() => char).join(''); 
}