function unusualFive() {
    const date = new Date()
    return Number([...date.getFullYear().toString()].pop());
}

console.log(unusualFive()) // 5