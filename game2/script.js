let cards = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard, lastCard;
let stop = false;
let gameFinished = 0;

function flip() {
   if(stop) return;
   if (this === firstCard) return;

   this.classList.toggle('flip');

   if(!flippedCard) {
      flippedCard = true;
      firstCard = this;
   } else {
      flippedCard = false;
      lastCard = this;
      match();
      
   }
}

function match() {
   if(firstCard.dataset.framework === lastCard.dataset.framework) {
      gameFinished += 1;
      disableCard();
      gameWon(1);
   } else {
      unflipCards();
   }
}

function disableCard() {
   firstCard.removeEventListener('click', flip);
   lastCard.removeEventListener('click', flip);
   resetGame();
}
function unflipCards() {
   stop = true;
   setTimeout(() => {
      firstCard.classList.remove('flip');
      lastCard.classList.remove('flip');
      
      resetGame();
   }, 1000)
}

function resetGame() {
   [flippedCard, stop] = [false, false];
   [firstCard, lastCard] = [null, null];
}

(function shuffle() {
   cards.forEach(card => {
      let randomNumber = Math.floor(Math.random() * 16);
      card.style.order = randomNumber;
   })
})();




cards.forEach(card => card.addEventListener('click', flip));

function moveOn() {
   window.location.href= '../game3/index.html';
}