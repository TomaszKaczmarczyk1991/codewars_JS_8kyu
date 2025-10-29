function countSheeps(sheep) {
  let counter = 0;
  
  for(const item of sheep) {
      if(item === true) counter++;
  }
  return counter;
}

console.log(countSheeps([true, true, true, false, true, true, true, true , true, false, true, false, true, false, false, true , true, true, true, true , false, false, true, true])