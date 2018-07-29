function Game(player1, player2) {
  this.grid = Array(9).fill(" ");
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = player1;
}

Game.prototype.play = function(player, position) {
  if (this.grid[position] === " ") {
    this.grid[position] = player.token;
    if (this.win()) {
      alert(this.currentPlayer.token + " Won!");
    } else if (this.draw()) {
      alert("It's a draw");
    } else {
      this.switchTurns();
    }
  } else {
    alert("Already taken, try again");
  }
  document.getElementById(position).innerHTML = this.grid[position];
};

Game.prototype.switchTurns = function() {
  this.currentPlayer === this.player1
    ? (this.currentPlayer = this.player2)
    : (this.currentPlayer = this.player1);
};

Game.prototype.draw = function() {
  if (!this.grid.includes(" ")) {
    return true;
  }
};
Game.prototype.display = function() {
  console.log(this.grid[0] + "|" + this.grid[1] + "|" + this.grid[2]);
  console.log("-----");
  console.log(this.grid[3] + "|" + this.grid[4] + "|" + this.grid[5]);
  console.log("-----");
  console.log(this.grid[6] + "|" + this.grid[7] + "|" + this.grid[8]);
};
Game.prototype.reset = function() {
  for (var i = 0; i < 9; i++) {
    document.getElementById(i).innerHTML = " ";
  }
  this.currentPlayer = this.player1;
  this.grid = Array(9).fill(" ");
};

Game.prototype.win = function() {
  var xwon = [];
  var ywon = [];
  var won = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
  ];
  var sum = 0;
  for (var i = 0; i < 9; i++) {
    if (this.grid[i] === "X") {
      xwon.push(i);
    } else if (this.grid[i] === "Y") {
      ywon.push(i);
    }
  }
  for (var x = 0; x < won.length; x++) {
    if (
      (xwon.includes(won[x][0]) &&
        xwon.includes(won[x][1]) &&
        xwon.includes(won[x][2])) ||
      (ywon.includes(won[x][0]) &&
        ywon.includes(won[x][1]) &&
        ywon.includes(won[x][2]))
    ) {
      return true;
    }
  }
};
