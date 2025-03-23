function betterThanAverage(classPoints, yourPoints) {
    const average = classPoints.reduce((acc, num) => {
        return acc += num;
    }, 0) / classPoints.length;
    return true ? yourPoints > average : false;
}

console.log(betterThanAverage([2,3], 5))