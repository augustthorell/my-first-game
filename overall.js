function reload() {
    window.location.reload();
}
function moveOn(a) {
    if(a === 1) {
        window.location.href= '../game1/index.html';
    } else if(a === 2) {
        window.location.href= '../game2/index.html';
    } else if(a === 3) {
        window.location.href= '../game3/index.html';
    } else if(a === 4) {
        window.location.href= '../game4/index.html';
    }
    
}

function gameOver(a) {
    if (a === 1) {
        document.getElementById('main').style.display = 'none';
        document.getElementById('gameWon').style.display = 'block';
    } else if (a === 2) {
        document.getElementById('main').style.display = 'none';
        document.getElementById('gameLost').style.display = 'block';
    }
}