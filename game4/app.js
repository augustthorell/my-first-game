const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size = 25;




let score = 0;

// Load basket starting position //
let basket = {
    x:canvas.width/2 - 50,
    y:canvas.height - 25,
    speed: 20
}
// Randomize the falling position //
let food = [];







// Moving the basket //
document.addEventListener('keydown', direction);

function direction(event) {
    if(event.keyCode === 37) {
        basket.x -= basket.speed;
        if(basket.x < 0) {
            basket.x = 0;
        }
    }
    if(event.keyCode === 39) {
        basket.x += basket.speed;
        if(basket.x > 600) {
            basket.x = 600;
        }
    }
}


// Create falling objects //



// Keeping the score //

// Game over function //
function draw() {
    // Draw background //
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 700, 700)

    // Draw basket //
    ctx.fillStyle = 'green';
    ctx.fillRect(basket.x, basket.y, 100, 25)
    ctx.fillRect(basket.x, basket.y - 70, 10, 70)
    ctx.fillRect(basket.x + 90, basket.y - 70, 10, 70);

    // Draw droped items //
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, size, size);
    
    falling();
    attemptNewFood();
  
}

function falling() {
    for(let i = food.length - 1; i >= 0; i--) {
        if(food[i].onScreen) {
            food[i].update();
            food[i].draw();
            if(food[i].caughtBy(basket)) {
                score += 1;
                basket.catch(food[i]);
                food.splice(i, 1);
                if(food[i].caughtBy(basket)) {
                    score += 1;
                    basket.catch(food[i]);
                    food.splice(i, 1);
                }
            } 
        } else {
            endGame();
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

			var food = new Ball(random(width), 0, size, color, velocity);
			food.push(food);
		}
	}
}

function endGame() {
noLoop();
  textSize(60);
  noStroke();
  fill(255);
  text("Game Over!", width / 2, height / 2);
}

let game = setInterval(draw, 10);