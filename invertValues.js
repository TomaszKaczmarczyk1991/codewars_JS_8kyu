// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers. Do not mutate the input array.

function invert(array) {
    resultArr = [];
    for(let i = 0; i < array.length; i++) {
        resultArr.push((array[i] - array[i] * 2));
    }
    return resultArr;
}