function Game(player1 = new Player("X"), player2 = new Player("O")){
    this.grid = ["", "", "", "", "", "", "", "", ""];
    this.player1 = player1
    this.player2 = player2
}
Game.prototype.play = function(player, position){
  this.grid[position] = player.token
}
