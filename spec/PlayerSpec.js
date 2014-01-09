describe("Player", function() {
  var player;

  beforeEach(function() {
    player1 = new Player();
    player2 = new Player();
    new Game(player1, player2);
  })

  it('starts with a score of zero', function() {
    expect(player1.score).toEqual(0);
    expect(player2.score).toEqual(0);
  })

  it('can score a point', function() {
    player1.scorePoint();
    expect(player1.score).toEqual(1);
  })

})
