// Generate a random number for the computer //
function myFunction() {
    let randomer = Math.floor(Math.random() * 3);
    let computer = document.getElementById('computer');

    if (randomer == 0) {
        computer.innerHTML = '<img src=images/rock.svg>';
    } else if (randomer == 1) {
        computer.innerHTML = '<img src=images/scissor.svg>';
    } else {
        computer.innerHTML = '<img src=images/paper.svg>';
    }
}
let userInput = document.getElementById('userInput')

function rock() {
    userInput.innerHTML = '<img src=images/rock.svg>';
    myFunction();
}
function paper() {
    userInput.innerHTML = '<img src=images/paper.svg>';
    myFunction();
}
function scissor() {
    userInput.innerHTML = '<img src=images/scissor.svg>';
    myFunction();
}



