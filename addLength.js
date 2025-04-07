function addLength(str) {
    const arr = str.split(' ');
    return arr.map(word => word + ' ' + word.length)
}   

// function addLength(str){
//   return str.split(" ").map(s => `${s} ${s.length}`)
// }