function points(games) {
  let ourScore = 0;

  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      ourScore += 3;
    } else if (games[i][0] === games[i][2]) {
      ourScore += 1;
    } else {
      ourScore += 0;
    }
  }
  
  return ourScore;
}