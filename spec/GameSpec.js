describe("Game", function(){
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should give 9 empty places", function(){
    expect(game.grid).toEqual(["", "", "", "", "", "", "", "", ""]);
  });
})
