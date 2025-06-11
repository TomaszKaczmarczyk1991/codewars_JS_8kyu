function isVow(a) {
  const vowels = [
  { vowel: 'a', ascii: 97 },
  { vowel: 'e', ascii: 101 },
  { vowel: 'i', ascii: 105 },
  { vowel: 'o', ascii: 111 },
  { vowel: 'u', ascii: 117 },
  { vowel: 'A', ascii: 65 },
  { vowel: 'E', ascii: 69 },
  { vowel: 'I', ascii: 73 },
  { vowel: 'O', ascii: 79 },
  { vowel: 'U', ascii: 85 }
];

  const asciiVowels = vowels.map(v => v.ascii);

  return a.map(num => {
    if(asciiVowels.includes(num)) {
      return String.fromCharCode(num);
    } else {
      return num;
      }
  });
}

console.log(isVow([100,100,116,105,117,121]))
