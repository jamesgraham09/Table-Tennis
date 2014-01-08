function Player() {
	this.score = 0;
}

Player.prototype.scorePoint = function() {
	this.score += 1;
	this.reset11();
};

Player.prototype.reset11 = function() {
	if(this.score >= 11) {
		this.score = 0;
	}
};