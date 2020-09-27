function start() {
    document.getElementById('start-container').classList.add("end");
    document.getElementById('main').style.display = 'block';
    setTimeout(function() {
        document.getElementById('start-container').style.display = 'none';
        moveOn();
    }, 1000);
}

function moveOn () {
    setTimeout(function() {
        window.location.href= '../game1/index.html';
    }, 1000);
}

 