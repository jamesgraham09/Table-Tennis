describe("Game", function() {
	var game; 

	beforeEach(function() {
		p1 = new Player();
		p2 = new Player();
		game = new Game(p1,p2);
	});

	it('has two players', function() {
		expect(game.player1).toBe(p1);
		expect(game.player2).toBe(p2);
	});

})
