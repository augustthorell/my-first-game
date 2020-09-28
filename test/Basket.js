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







function falling() {
    for(let i = foods.length - 1; i >= 0; i--) {
        if(foods[i].onScreen) {
            foods[i].update();
            foods[i].draw();
            if(foods[i].caughtBy(basket)) {
                score += 1;
                basket.catch(food[i]);
                foods.splice(i, 1);
                if(foods[i].caughtBy(basket)) {
                    score += 1;
                    basket.catch(food[i]);
                    foods.splice(i, 1);
                }
            } 
        } else {
           
        }
    }
}

function attemptNewFood(frame) {

	if (frame % 20 === 0) { // every 1/3 second

		var chance = map(score, 0, 100, 0.25, 0.99);
		if (random() < chance) {
			// push to the orbs array

			/* build Ball */
			var color = randomColor();
			var size = random(20) + 10;
			var velocity = random(3) + 3;

			var foods = new Ball(random(width), 0, size, color, velocity);
			foods.push(food);
		}
	}
}
