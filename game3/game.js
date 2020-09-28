const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const box = 25;

const canvasSize = 27;

// Score //
let score = 10;

// Load snake starting position //
let snake = [];

snake [0] = {
    x: Math.floor((canvasSize/2)) * box,
    y: Math.floor((canvasSize/2)) * box
}

// Set direction //

let dir;
document.addEventListener('keydown', direction);

function direction(event) {
    if(event.keyCode === 37 && dir != 'right') 
        dir = 'left';
    if(event.keyCode === 38 && dir != 'down') 
        dir = 'up';
    if(event.keyCode === 39 && dir != 'left')
        dir = 'right';
    if(event.keyCode === 40 && dir != 'up') 
        dir = 'down';
}

// Set the location of the food //
let food = {
    x: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
    y: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box
}

// Draw function //

function draw() {
    // Draw the background //
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(box, box, canvasSize*box - 1 - box, canvasSize*box-box)

    // Draw the snake head and tail//
    for(let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // Move the snake //
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(dir == 'left')
        snakeX -= box;
    if(dir == 'right')
        snakeX += box;
    if(dir == 'up')
        snakeY -= box;
    if(dir == 'down')
        snakeY += box; 
        

    // if the snace eats the food //
    if(snakeX == food.x && snakeY == food.y) {
        score -= 1;
        food = {
            x: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
            y: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box
        }
    } else {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    

    // Check collision //

    function collision(head, array) {
        for(let i = 0; i < array.length; i++) {
            if(head.x == array[i].x && head.y == array[i].y) {
                return true;
            }
        }
        return false;
    }
    if(snakeX < box || snakeY < box || snakeX > (canvasSize - 1) * box || snakeY > (canvasSize -1) * box || collision(newHead, snake)) {
        ctx.fillStyle = '#000';
        ctx.font = '50px Changa one';
        ctx.clearRect(0, 0, 50, 25);
        ctx.fillText('Game over', box, 350);
        clearInterval(game);
    }

    snake.unshift(newHead);

    
    // Draw in food //
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box)

    // Draw score //
    ctx.fillStyle = '#fff';
    ctx.font = '20px Changa one';
    ctx.clearRect(0, 0, 50, 25);
    ctx.fillText(score, 25, 20);
    ctx.fillText('apples left', 50, 20);
    
    gameWon();

    function gameWon() {
        if(score <= 0) {
            clearInterval(game);
            ctx.fillStyle = '#000';
            ctx.font = '50px Changa one';
            ctx.clearRect(0, 0, 50, 25);
            ctx.fillText('You won the game', canvas.width/4, canvas.height/2);
            clearInterval(game);
        }
    }
}
let game = setInterval(draw, 80);
