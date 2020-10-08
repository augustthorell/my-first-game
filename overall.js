function reload() {
    window.location.reload();
}
function moveOn(a) {
    if(a === 0.5) {
        window.location.href= 'extra/beforegame1.html';
    } else if(a === 1) {
        window.location.href= '../game1/index.html';
    } else if(a === 1.5) {
        window.location.href= '../extra/beforegame2.html';
    } else if(a === 2) {
        window.location.href= '../game2/index.html';
    } else if(a === 2.5) {
        window.location.href= '../extra/beforegame3.html';
    } else if(a === 3) {
        window.location.href= '../game3/index.html';
    } else if(a === 3.5) {
        window.location.href= '../extra/beforegame4.html';
    } else if(a === 4) {
        window.location.href= '../game4/index.html';
    } else if(a === 4.5) {
        window.location.href= '../extra/endsite.html';
    } else if(a === 5) {
        window.location.href= '../preview/index.html';
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