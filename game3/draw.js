const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;


let snake;
let gameOver = false;

(function setup() {
    snake = new Snake();
    snake.draw();
    checkGameOver();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        snake.draw();
    }, 100);
}());

window.addEventListener('keydown', ((e) => {
    let direction = e.key.replace('Arrow', '')
    
    console.log(direction);
    snake.changeDirection(direction);
    
    
}))

function checkGameOver() { 
    gameOver = true;
}