function replace(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let result = [];

  for(const letter of s) {
    vowels.includes(letter) ?result.push('!') : result.push(letter)
    
  }
  return result.join('');
}