function tripleTrouble(one, two, three){
  let text = ""
  
  for (const i in one){
    text += one[i] + two[i] + three[i]
  }
  return text
}