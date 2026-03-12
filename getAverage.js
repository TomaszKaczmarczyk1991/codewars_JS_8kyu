function getAverage(marks){
  return Math.floor(marks.reduce((acc, val) => {
    return acc += val 
  },0) / marks.length)
}