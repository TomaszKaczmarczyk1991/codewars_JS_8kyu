function grow(x){
  const sum = x.reduce((acc, val) => acc * val, 1)
  
  return sum;
}

console.log(grow([1, 2, 3]))

// better solution:
// const grow=x=> x.reduce((a,b) => a*b);