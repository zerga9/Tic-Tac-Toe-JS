describe("Game", function(){
  var game;

  beforeEach(function() {
    game = new Game("player1", "player2");
  });

  it("should give 9 empty places", function(){
    expect(game.grid).toEqual(["", "", "", "", "", "", "", "", ""]);
  });
  it("should have 2 players", function(){
    expect(game.player1).toEqual("player1")
    expect(game.player2).toEqual("player2")
  })
})
