function squareSum(numbers){
    return numbers.reduce((acc, val) => {
        return acc += val**2
    },0)
}