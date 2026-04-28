function fiveLine(s){
  const trimmed = s.toString().trim()
  let count = 1
  let result = ""
  
  while(count <= 5){
    result += `${trimmed.repeat(count)}\n`
    count++
  }
  return result.slice(0,-1)
}