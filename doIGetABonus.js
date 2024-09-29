function bonusTime(salary, bonus) {
    return bonus ?`£${salary*10}` : `£${salary}`
}

console.log(bonusTime(25000, true)) // £250000