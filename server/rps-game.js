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
    this._sentToPlayer(playerIndex, `You selected ${turn}`);
  }
}

module.exports = RpsGame;
