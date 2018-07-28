describe("Game", function() {
  var game;
  var player;

  beforeEach(function() {
    player1 = new Player("X");
    player2 = new Player("O");
    game = new Game(player1, player2);
    spyOn(window, "alert");
  });

  it("should give 9 empty places", function() {
    expect(game.grid).toEqual([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  });

  it("should have 2 players", function() {
    expect(game.player1).toEqual(player1);
    expect(game.player2).toEqual(player2);
  });

  it("should let the player choose a position and change it in the players' token", function() {
    game.play(player1, 2);
    expect(game.grid).toEqual([" ", " ", "X", " ", " ", " ", " ", " ", " "]);
  });

  it("doesn't let the player choose an already taken position", function() {
    game.play(player1, 3);
    game.play(player2, 3);
    expect(window.alert).toHaveBeenCalledWith("Already taken, try again");
  });

  it("only lets player have one turn", function() {
    expect(game.currentPlayer).toBe(player1);
    game.play(game.currentPlayer, 1);
    expect(game.currentPlayer).toBe(player2);
  });

  it("lets a player win", function() {
    game.play(game.currentPlayer, 0);
    game.play(game.currentPlayer, 3);
    game.play(game.currentPlayer, 1);
    game.play(game.currentPlayer, 4);
    game.play(game.currentPlayer, 2);
    expect(window.alert).toHaveBeenCalledWith("X Won!");
  });

  it("should be a draw if all cells filled and no winner", function() {
    game.play(game.currentPlayer, 0);
    game.play(game.currentPlayer, 1);
    game.play(game.currentPlayer, 2);
    game.play(game.currentPlayer, 3);
    game.play(game.currentPlayer, 4);
    game.play(game.currentPlayer, 6);
    game.play(game.currentPlayer, 5);
    game.play(game.currentPlayer, 8);
    game.play(game.currentPlayer, 7);
    expect(window.alert).toHaveBeenCalledWith("It's a draw");
  });
});
