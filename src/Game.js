function Game(p1, p2) {
	this.player1 = p1;
	this.player2 = p2;

	p1.game = this;
	p2.game = this;
}

Game.prototype.reset11 = function() {
	if(this.player1.score >= 11 || this.player2.score >= 11) {
		console.log('Player Wins');
		this.player1.score = 0;
		this.player2.score = 0;
	}
};