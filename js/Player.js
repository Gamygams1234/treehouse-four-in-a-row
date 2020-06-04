class Player {
  constructor(playerName, id, color, isTurn = false) {
    this.playerName = playerName;
    this.id = id;
    this.color = color;
    this.isTurn = isTurn;
    this.tokens = this.createTokens(21);
  }
  createTokens(num) {
    // this array will be populated
    const tokens = [];

    for (let i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }

    return tokens;
  }
}
