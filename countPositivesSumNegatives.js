function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  return input.reduce((acc, val) => {
    if (val > 0) {
      acc[0] += 1;
    } else if (val < 0) {
      acc[1] += val;
    }
    return acc;
  }, [0, 0]);
}



console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))