function twoSort(s) {
  const str = s.sort();
  const result = [...str[0]].map(x => x + '***').join('').slice(0, -3);
  
  return result;
}