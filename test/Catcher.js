const B_SIZE = 50;
const HALF_B_SIZE = B_SIZE / 2;

var basket; // player
var orbs = []; // falling Balls

var score;

function setup() {

  createCanvas(400, 600);

  basket = new Basket(width / 2, height - B_SIZE);

  score = 0;
  textAlign(CENTER);
}

function draw() {

  background(51);

	handleOrbs();
  attemptNewOrb(frameCount);

	basket.update(mouseX);
	basket.draw();

	drawScore();
}

/**
 * updates & draws Balls in orbs array
 * handles catching
 * triggers endGame
 */
function handleOrbs() {

	for (var i = orbs.length - 1; i >= 0; i--) {
		// loop through all orbs

    if (orbs[i].onScreen) {

			/* update & draw */
      orbs[i].update();
      orbs[i].draw();

      if (orbs[i].caughtBy(basket)) {
				// we've caught the orb

        score += 1;
				basket.catch(orbs[i]);
        orbs.splice(i, 1);
      }

    } else {
			// Ball has gone off-screen

      endGame();
    }
  }
}

/**
 * attempts to push a new Ball to the
 * orbs array
 */
function attemptNewOrb(frame) {

	if (frame % 20 === 0) { // every 1/3 second

		var chance = map(score, 0, 100, 0.25, 0.99);
		if (random() < chance) {
			// push to the orbs array

			/* build Ball */
			var color = randomColor();
			var size = random(20) + 10;
			var velocity = random(3) + 3;

			var food = new Ball(random(width), 0, size, color, velocity);
			foods.push(food);
		}
	}
}


/**
 * ends the loop, draws game over message
 */
function endGame() {

  noLoop();
  textSize(60);
  noStroke();
  fill(255);
  text("Game Over!", width / 2, height / 2);
}

/**
 * returns a random color
 */
function randomColor() {
  return color(rgba(163, 218, 71));
}