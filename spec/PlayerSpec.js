describe("Player", function() {
  var player;
  beforeEach(function() {
    player = new Player("X");
  });

  it("should give player a token", function(){
    expect(player.token).toEqual("X")
  })

});
