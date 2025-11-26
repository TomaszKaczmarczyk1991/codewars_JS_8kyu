String.prototype.toAlternatingCase = function () {
  return this.toString().split('').map((x) => (x === x.toLowerCase()) ? x.toUpperCase() : x.toLowerCase()).join('')
}

console.log('HeLLo WoRLD'.toAlternatingCase()) // hEllO wOrld