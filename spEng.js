function spEng(sentence){
  return sentence.toLowerCase().split("english").length === 2
}

console.log(spEng("abcEnglishdef"))