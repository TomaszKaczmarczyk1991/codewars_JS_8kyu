function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let result = 0;
  for (let num of array) {
    result += num;
  }
  return result / array.length;
}