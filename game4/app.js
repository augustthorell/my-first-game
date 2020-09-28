const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size = 100;


let randomX = Math.floor(Math.random() * canvas.width);

let score = 0;

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
    console.log(score);
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


// Create falling objects //



// Keeping the score //

// Game over function //
function draw() {
    let a = basket.x + 120
    let b = fallingFood.x + 70
    // Draw background //
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 700, 700)

  
    
    // Draw droped items //
    for (let i = 0; i >= 0 ; i--)
        {
        ctx.drawImage(fallingFood[i].image, fallingFood[i].x, fallingFood[i].y, 70, 70); //The rain drop
        fallingFood[i].y += fallingFood[i].speed; //Set the falling speed
        if (fallingFood[i].y > 650) {  //Repeat the raindrop when it falls out of view
        fallingFood[i].y = -70 //Account for the image size
        fallingFood[i].x = 0;    //Make it appear randomly along the width    
        
        if(fallingFood[i].y < 600 && fallingFood[i].x == basket.x) {
            console.log('test');
        }
        }
    }
    // Draw basket //
    ctx.fillStyle = 'green';
    ctx.fillRect(basket.x, basket.y, 120, 25)
    ctx.fillRect(basket.x, basket.y - 70, 10, 70)
    ctx.fillRect(basket.x + 110, basket.y - 70, 10, 70);
    

}

function setup() {

        setInterval(draw, 50);


        for (var i = 0; i >= 0; i--) {
            var fallingFd = new Object();
            fallingFd["image"] =  new Image();
            fallingFd.image.src = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/237/hamburger_1f354.png';
            fallingFd["x"] = 0;
            fallingFd["y"] = -25;
            fallingFd["speed"] = 1.5 + Math.random() * 5;
            fallingFood.push(fallingFd);
            }
            if(fallingFd.y === 700) {
                console.log('test');
            }
            
        }


 
setup()









