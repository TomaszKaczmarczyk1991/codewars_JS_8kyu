var countSheep = function (num){
  let str = ""
  let counter = 1
  
  while(counter <= num){
  let pattern = `${counter} sheep...`
    str += pattern
    counter++
  }
  return str
}