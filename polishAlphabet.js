function correctPolishLetters (string) {
  const letters = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z'
}
  return string.split('').map(letter => letters[letter] || letter).join('')
}