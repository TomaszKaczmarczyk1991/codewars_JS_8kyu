function sumArray(array) {
  return (!array || array.length < 3)
    ? 0
    : [...array]
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, val) => acc + val, 0);
}