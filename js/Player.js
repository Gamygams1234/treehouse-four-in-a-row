class Player {
  constructor(playerName, id, color, isTurn = false) {
    this.playerName = playerName;
    this.id = id;
    this.color = color;
    this.isTurn = isTurn;
    this.tokens = [];
  }
}
