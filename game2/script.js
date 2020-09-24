const cards = document.querySelectorAll('.memory-c');

function flipCard() {
   this.classList.toggle('flip');
   console.log('test');
}

cards.forEach(card => card.addEventListener('click', flipCard));

