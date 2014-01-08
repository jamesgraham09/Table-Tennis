describe("Player", function() {
  var player;

  beforeEach(function() {
    player1 = new Player();
    player2 = new Player();
  })

  it('starts with a score of zero', function() {
    expect(player1.score).toEqual(0);
    expect(player2.score).toEqual(0);
  })
})