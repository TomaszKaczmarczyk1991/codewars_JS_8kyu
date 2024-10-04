function reverseWords(str){
  const splitted = str.split(" ").reverse().join(" ");

  return splitted;
}

console.log(reverseWords("yoda doesn't speak like this"))