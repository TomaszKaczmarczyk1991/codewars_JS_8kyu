function between(a, b) {
  const arr = [a]
  
  for(let i = 1; i <= b-a; i++){
      arr.push(i+a)
  }
  return arr
}