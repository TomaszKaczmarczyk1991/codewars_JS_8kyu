function addLength(str) {
    const arr = str.split(' ');
    return arr.map(word => word + ' ' + word.length)
}   