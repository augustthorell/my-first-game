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
            document.querySelector('.thumb').style.display = "block";
        } else if (a == 1) {
            result.innerHTML = "You Win";
            document.querySelector('.thumb').style.display = "block";
        }
    } else if (randomNumber == paper) {
        computer.innerHTML = '<img src=images/paper.svg>';
        if (randomNumber == a) {
            result.innerHTML = "It's a Draw";
        } else if (a == 0) {
            result.innerHTML = "You Lose";
            document.querySelector('.thumb').style.display = "block";
        } else if (a == 2) {
            result.innerHTML = "You Win";
            document.querySelector('.thumb').style.display = "block";
        }
    } else {
        computer.innerHTML = '<img src=images/scissor.svg>';
        if (randomNumber == a) {
            result.innerHTML = "It's a Draw";
        } else if (a == 1) {
            result.innerHTML = "You Lose";
            document.querySelector('.thumb').style.display = "block";
        } else if (a == 0) {
            result.innerHTML = "You Win";
            document.querySelector('.thumb').style.display = "block";
        }
    }
}


// Changes the image depending on the input from the user //

function rock() {
    document.getElementById('userInput').innerHTML = '<img src=images/rock.svg>';
    random(0);
}
function paper() {
    document.getElementById('userInput').innerHTML = '<img src=images/paper.svg>';
    random(1);
}
function scissor() {
    document.getElementById('userInput').innerHTML = '<img src=images/scissor.svg>';
    random(2);
}



// Starts the game and calculate who is the winner //

function init() {
    // Store the values from the computer //
    
    // Store the values from the User //

    // Initialize the other functions //

    // Calculate who won //

    // OPTIONAL: Calculate the scores //
}

