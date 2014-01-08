function Game() {
	this.player1 = p1;
	this.player2 = p2;

	p1.game = this;
	p2.game = this;
}