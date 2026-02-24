function multipleOfIndex(array) {
  return array.filter((x, i) =>
    (i === 0 && x === 0) || (i !== 0 && x % i === 0)
  )
}