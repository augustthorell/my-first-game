const cards = document.querySelectorAll('.memory-c');

function flipCard() {
   this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

