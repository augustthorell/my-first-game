// Stores the values from the computer and the user in an array //

let userData = [];
let computerData = [];
let userScore = [];
let computerScore = [];

// Changes the image for the computer //
function computer() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computer = document.getElementById('computer');
    if (randomNumber === 0) {
        computer.innerHTML = '<img src=images/rock.svg>';
        computerData.unshift(0);
    } else if (randomNumber === 1) {
        computer.innerHTML = '<img src=images/paper.svg>';
        computerData.unshift(1);
    } else if (randomNumber === 2) {
        computer.innerHTML = '<img src=images/scissor.svg>';
        computerData.unshift(2);
    }
}

// Changes the image depending on the input from the user //

function user(a) {
    if (a == 0) {
        document.getElementById('userInput').innerHTML = '<img src=images/rock.svg>';
        userData.unshift(0);
    } else if (a == 1) {
        document.getElementById('userInput').innerHTML = '<img src=images/paper.svg>';
        userData.unshift(1);
    } else if (a == 2) {
        document.getElementById('userInput').innerHTML = '<img src=images/scissor.svg>';
        userData.unshift(2);
    }
}

// Starts the game and //

function init(a) {

    // Get's the value from the user
    user(a);

    // Get's the value from the computer //
    computer();

    // Calculate who won between the computer and the user //
    calc();
}

// Calculates who won between the computer and the user //

function calc() {
    let user = userData[0];
    let computer = computerData[0];
    let result = document.getElementById('show-result');
    let displayUserScore = document.getElementById('userScore');
    let displayComputerScore = document.getElementById('computerScore');
   
    if (user == computer) {
        result.innerHTML = "It's a Draw";
    } else if ((user == 0 && computer == 1) || (user == 1 && computer == 2) || (user == 2 && computer == 0)) { 
        result.innerHTML = "Point for the computer";
        computerScore += [1];
        displayComputerScore.innerHTML = 'Computer score : ' + computerScore.length;
    } else if ((user == 1 && computer == 0) || (user == 2 && computer == 1) || (user == 0 && computer == 2)) {
         result.innerHTML = "Point for you";
         userScore.push(1);
         displayUserScore.innerHTML = 'Your score : ' + userScore.length;
    }
    if (userScore.length === 5) {
        document.querySelector('main').style.display = 'none';
        document.getElementById('gameWon').style.display = 'block';
    } else if (computerScore.length === 5) {
        document.querySelector('main').style.display = 'none';
        document.getElementById('gameLost').style.display = 'block';
    }
}

// Depending on if you won or not, the functions will send you to different places //
function reload() {
    window.location.reload();
}
function moveOn() {
    window.location.href= '../game2/index.html';
}
