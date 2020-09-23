function start() {
    document.getElementById('start-container').classList.add("end");
    document.getElementById('main').style.display = 'block';
    setTimeout(function() {
        document.getElementById('start-container').style.display = 'none';
    }, 10000);
}

 