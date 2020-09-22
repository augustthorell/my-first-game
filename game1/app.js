// Generate a random number and choosing rock, paper, scissor for the computer //
function random(a) {
    let randomNumber = Math.floor(Math.random() * 3);
    let computer = document.getElementById('computer');
    let result = document.getElementById('show-result');
    let rock = 0;
    let paper = 1;

    if (randomNumber == rock) {
        computer.innerHTML = '<img src=images/rock.svg>';
        if (randomNumber == a) {
            result.innerHTML = "It's a Draw";
        } else if (a == 2) {
            result.innerHTML = "You Lose";            
        } else if (a == 1) {
            result.innerHTML = "You Win";
        }
    } else if (randomNumber == paper) {
        computer.innerHTML = '<img src=images/paper.svg>';
        if (randomNumber == a) {
            result.innerHTML = "It's a Draw";
        } else if (a == 0) {
            result.innerHTML = "You Lose";
        } else if (a == 2) {
            result.innerHTML = "You Win";
        }
    } else {
        computer.innerHTML = '<img src=images/scissor.svg>';
        if (randomNumber == a) {
            result.innerHTML = "It's a Draw";
        } else if (a == 1) {
            result.innerHTML = "You Lose";
        } else if (a == 0) {
            result.innerHTML = "You Win";
        }
    }
}

// Changes the image for the computer //

function computer(b) {
    let randomNumber = Math.floor(Math.random() * 3);
    let computer = document.getElementById('computer');

    if (randomNumber === 0) {
        computer.innerHTML = '<img src=images/rock.svg>';
        calc(0);
    } else if (randomNumber === 1) {
        computer.innerHTML = '<img src=images/paper.svg>';
        calc(1);
    } else if (randomNumber === 2) {
        computer.innerHTML = '<img src=images/scissor.svg>';
        calc(2);
    }
}

// Changes the image depending on the input from the user //

function user(a) {
    if (a == 0) {
        document.getElementById('userInput').innerHTML = '<img src=images/rock.svg>';
        calc(0);
    } else if (a == 1) {
        document.getElementById('userInput').innerHTML = '<img src=images/paper.svg>';
        calc(1);
    } else if (a == 2) {
        document.getElementById('userInput').innerHTML = '<img src=images/scissor.svg>';
        calc(2);
    }
}



// Starts the game and calculate who is the winner //

function init(a) {

    // Store the values from the computer //
    user(a);
    // Store the values from the User //
    computer();
    // Initialize the other functions //

    // Calculate who won //

    // OPTIONAL: Calculate the scores //
}

function calc(a, b) {
    let result = document.getElementById('show-result');
    if (a == b) {
        result.innerHTML = "It's a Draw";
        console.log('test');
    } else if (a == 1 && b == 2) { 
        result.innerHTML = "You Lose";
    } else if (a == 2 && b == 1) {
         result.innerHTML = "You Win";
    }
}

rock = 0
paper = 1
scissor = 2