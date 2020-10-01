const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size = 100;




let score = 0;
let losing = 0;

// Load basket starting position //
let basket = {
    x:canvas.width/2 - 50,
    y:canvas.height - 25,
    speed: 20
}
// Randomize the falling position //

let fallingFood = [];



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
        if(basket.x > 580) {
            basket.x = 580;
        }
    }
}


// Keeping the score //

// Game over function //
function draw() {

    // Draw background //
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 700, 700)

    // Draw droped items //
    for (let i = 0; i >= 0 ; i--) {
        ctx.drawImage(fallingFood[i].image, fallingFood[i].x, fallingFood[i].y, 70, 70); 
        
        fallingFood[i].y += fallingFood[i].speed; 
        if (fallingFood[i].y > 695) {  
        fallingFood[i].y = -70 
        fallingFood[i].x = Math.floor(Math.random() * 600); 
        }

        if(fallingFood[i].y > 692 && fallingFood[i].x > (basket.x - 10) && (fallingFood[i].x + 65) < (basket.x + 130)) {
            score += 1;
            console.log('winning ' + score);
        } else if(fallingFood[i].y > 692 && (fallingFood[i].x > (basket.x - 10) || (fallingFood[i].x + 65) < (basket.x + 130))) {
            losing += 1;
            console.log('Losing ' + losing);
        }
        endGame();
    }
    // Draw basket //
    ctx.fillStyle = 'green';
    ctx.fillRect(basket.x, basket.y, 120, 25)
    ctx.fillRect(basket.x, basket.y - 70, 10, 70)
    ctx.fillRect(basket.x + 110, basket.y - 70, 10, 70);
    
    displayScore();
}


function setup() {

    

    // Randomizes the next food-item
    for (var i = 0; i >= 0; i--) {
        var fallingFd = new Object();
        fallingFd["image"] =  new Image();
        fallingFd.image.src = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/237/hamburger_1f354.png';
        fallingFd['x'] = Math.floor(Math.random() * 600);
        fallingFd['y'] = -70;
        fallingFd["speed"] = 4;
        fallingFood.push(fallingFd);
        }
}

function endGame() {
    if(score >= 10) {
        clearInterval(game);
        gameOver(1);
    } else if(losing >= 3) {
        clearInterval(game);
        gameOver(2);
    }
}

function displayScore() {
    document.getElementById("score").innerHTML =  'You have catched ' + score + ' burgers';
 }

let game = setInterval(draw, 10);
setup();











