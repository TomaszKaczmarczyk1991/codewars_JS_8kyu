function duckDuckGoose(players, goose) {
    let currentIndex = 0;
    for (let i = 0; i < goose - 1; i++) {
        currentIndex = (currentIndex + 1) % players.length;
    }
    return players[currentIndex].name;
}
