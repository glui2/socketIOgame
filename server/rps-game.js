// holds game logic between two players
class RpsGame {
  constructor(p1, p2) {
    this._players = [p1, p2]; // underscores indicate private variable
    this._turns = [null, null];
    this._sendToPlayers("Beginning next game of Rock Paper Scissors!");

    this._players.forEach((player, index) => {
      player.on("turn", (turn) => {
        this._onTurn(index, turn);
      });
    });
  }

  _sendToPlayer(playerIndex, msg) {
    this._players[playerIndex].emit("message", msg);
  }

  _sendToPlayers(msg) {
    this._players.forEach((player) => {
      player.emit("message", msg);
    });
  }

  _onTurn(playerIndex, turn) {
    this._turns[playerIndex] = turn;
    this._sendToPlayer(playerIndex, `You selected ${turn}.`);
    this._checkGameOver();
  }

  _checkGameOver() {
    const turns = this._turns;

    if (turns[0] && turns[1]) {
      this._sendToPlayers("Game Over! " + turns.join(" : "));
      this._getGameResult();
      this._turns = [null, null];
      this._sendToPlayers("Starting the next game!");
    }
  }

  // pretend each move has a numerical value like so - rock : 0, paper : 1, scissors : 2
  // the difference between the two values will determine the winner (p2 - p1)
  // (p2 - p1 + 3)%3 to account for negative values
  // 1 = p1 winner
  // 2 = p2 winner
  // 0 = draw

  _getGameResult() {
    const p0 = this._decodeTurn(this._turns[0]);
    const p1 = this._decodeTurn(this._turns[1]);

    const distance = (p1 - p0 + 3) % 3;

    switch (distance) {
      case 0:
        this._sendToPlayers("Draw!");
        break;
      case 1:
        this._sendWinMessage(this._players[1], this._players[0]);
        break;
      case 2:
        this._sendWinMessage(this._players[0], this._players[1]);
        break;
    }
  }

  _sendWinMessage(winner, loser) {
    winner.emit("message", "Congratulations, you won! ");
    loser.emit("message", "Sorry mate, you lost... ");
  }

  _decodeTurn(turn) {
    switch (turn) {
      case "rock":
        return 0;
      case "paper":
        return 1;
      case "scissors":
        return 2;
      default:
        throw new Error(`Could not decode turn ${turn}`);
    }
  }
}

module.exports = RpsGame;
