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
            document.getElementById('righty').className = "right-result";
        } else if (a == 1) {
            result.innerHTML = "You Win";
            document.getElementById('lefty').className = "left-result";
        }
    } else if (randomNumber == paper) {
        computer.innerHTML = '<img src=images/paper.svg>';
        if (randomNumber == a) {
            result.innerHTML = "It's a Draw";
        } else if (a == 0) {
            result.innerHTML = "You Lose";
            document.getElementById('righty').className = "right-result";
        } else if (a == 2) {
            result.innerHTML = "You Win";
            document.getElementById('lefty').className = "left-result";
        }
    } else {
        computer.innerHTML = '<img src=images/scissor.svg>';
        if (randomNumber == a) {
            result.innerHTML = "It's a Draw";
        } else if (a == 1) {
            result.innerHTML = "You Lose";
            document.getElementById('righty').className = "right-result";
        } else if (a == 0) {
            result.innerHTML = "You Win";
            document.getElementById('lefty').className = "left-result";
        }
    }
}

function computer(b) {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        computer.innerHTML = '<img src=images/rock.svg>';
        init(0);
    } else if (randomNumber == 1) {
        computer.innerHTML = '<img src=images/paper.svg>';
        init(1);
    } else {
        computer.innerHTML = '<img src=images/scissor.svg>';
        init(2);
    }
    
}


// Changes the image depending on the input from the user //

function user(a) {
    if (a == 0) {
        document.getElementById('userInput').innerHTML = '<img src=images/rock.svg>';
        computer(0);
    } else if (a == 1) {
        document.getElementById('userInput').innerHTML = '<img src=images/paper.svg>';
        computer(1);
    } else if (a == 2) {
        document.getElementById('userInput').innerHTML = '<img src=images/scissor.svg>';
        computer(2);
    }
}



// Starts the game and calculate who is the winner //

function init(a, b) {

    // Store the values from the computer //
    user(a);
    // Store the values from the User //
    computer(b);
    // Initialize the other functions //

    // Calculate who won //

    // OPTIONAL: Calculate the scores //
}

