class Guesser {
  constructor(number, lives) {
    this.number = number
    this.lives = lives
  }
  
  guess(n) {
    if(this.lives <= 0) throw new Error
    
      if(this.lives > 0){
      if(n === this.number) return true
      if(n !== this.number){
        this.lives--
        return false
      }
    }
  }
}