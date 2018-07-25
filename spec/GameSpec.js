describe("Game", function() {
  var game;
  var player;

  beforeEach(function() {
    player1 = new Player("X");
    player2 = new Player("O");
    game = new Game(player1, player2);
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
    expect(game.play(player2, 3)).toEqual("Already taken, try again");
  });
});
