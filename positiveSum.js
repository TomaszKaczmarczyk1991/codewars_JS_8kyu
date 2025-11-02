function positiveSum(arr) {
  if(arr.length < 2) return 0;
  
  return arr.reduce((acc, val) => {
    return val >= 0 ? acc + val : acc;
    }, 0);
}

console.log(positiveSum([1, -4, 7, 12])) // 20