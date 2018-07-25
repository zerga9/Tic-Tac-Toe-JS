function Game(player1 = new Player("X"), player2 = new Player("O")) {
  this.grid = Array(9).fill(" ");
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = player1;
}
Game.prototype.play = function(player, position) {
  if (this.grid[position] === " ") {
    this.grid[position] = player.token;
  } else {
    return "Already taken, try again";
  }
  this.switchTurns();
};

Game.prototype.switchTurns = function() {
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
};
Game.prototype.display = function() {
  console.log(this.grid[0] + this.grid[1] + this.grid[2]);
  console.log(this.grid[3] + this.grid[4] + this.grid[5]);
  console.log(this.grid[6] + this.grid[7] + this.grid[8]);
};
