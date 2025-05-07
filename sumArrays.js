function sum (numbers) {
    return numbers.reduce((acc, val) => {
        return acc + val;
    }, 0);
  }

console.log(sum([1, 5.2, 4, 0, -1])); // 9.2