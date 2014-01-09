describe("Game", function() {
	var game, p1, p2; 

	beforeEach(function() {
		p1 = new Player();
		p2 = new Player();
		game = new Game(p1,p2);
	});

	it('has two players', function() {
		expect(game.player1).toBe(p1);
		expect(game.player2).toBe(p2);
	});

	it('resets the score after 11 points for a player', function() {
	    game.player1.scorePoint();
	    game.player1.scorePoint();
	    game.player1.scorePoint();
	    game.player1.scorePoint();
	    game.player1.scorePoint();
	    game.player1.scorePoint();
	    game.player1.scorePoint();
	    game.player1.scorePoint();
	    game.player1.scorePoint();
	    game.player1.scorePoint();
	    game.player1.scorePoint();
	    expect(game.player1.score).toEqual(0)
  })


})
