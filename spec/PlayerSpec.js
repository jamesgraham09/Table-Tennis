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

  it('can score a point', function() {
    player1.scorePoint();
    expect(player1.score).toEqual(1);
  })

  it('resets the score after 11 points for a player', function() {
    player1.scorePoint();
    player1.scorePoint();
    player1.scorePoint();
    player1.scorePoint();
    player1.scorePoint();
    player1.scorePoint();
    player1.scorePoint();
    player1.scorePoint();
    player1.scorePoint();
    player1.scorePoint();
    player1.scorePoint();
    expect(player1.score).toEqual(0)
  })

})
