// Generate a random number and choosing rock, paper, scissor for the computer //
function random() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computer = document.getElementById('computer');

    if (randomNumber == 0) {
        computer.innerHTML = '<img src=images/rock.svg>';

    } else if (randomNumber == 1) {
        computer.innerHTML = '<img src=images/scissor.svg>';
    } else {
        computer.innerHTML = '<img src=images/paper.svg>';
    }
    
}


// Changes the image depending on the input from the user //

function rock() {
    document.getElementById('userInput').innerHTML = '<img src=images/rock.svg>';
    random();
}
function paper() {
    document.getElementById('userInput').innerHTML = '<img src=images/paper.svg>';
    random();
}
function scissor() {
    document.getElementById('userInput').innerHTML = '<img src=images/scissor.svg>';
    random();
}


// Starts the game and calculate who is the winner //

function init() {
    // Store the values from the computer //
    
    // Store the values from the User //

    // Initialize the other functions //

    // Calculate who won //

    // OPTIONAL: Calculate the scores //
}