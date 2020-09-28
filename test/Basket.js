function Basket(x, y) {

	this.position = createVector(x, y);

	this.fluidColor = color("#FFFFFF");
}

Basket.prototype.update = function(x) {

	this.position.x = constrain(x, 0, width);
};

/**
 * draws the Basket
 */
Basket.prototype.draw = function() {

	/* calculate coordinates */
	var leftX = this.position.x - HALF_B_SIZE; // left-most X
	var rightX = this.position.x + HALF_B_SIZE; // right-most X

	var bottomY = this.position.y - HALF_B_SIZE; // bottom-most Y
	var topY = this.position.y + HALF_B_SIZE; // top-most Y

	/* contents */
	fill(this.fluidColor);
	noStroke();
	rect(leftX, this.position.y, B_SIZE, HALF_B_SIZE);

	stroke(255);
	strokeWeight(3);
	noFill();

	
};

