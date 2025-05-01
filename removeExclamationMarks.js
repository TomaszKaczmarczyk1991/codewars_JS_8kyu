function removeExclamationMarks(s) {
  return [...s].filter((char) => char !== '!').join('');  
}