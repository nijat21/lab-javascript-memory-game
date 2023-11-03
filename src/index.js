const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  document.getElementById('game-finished').style.display = 'none';

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);

      // push all the cards into the pickedCards array
      memoryGame.pickedCards.push(card);
      card.classList.toggle('turned');

      const cardsPicked = memoryGame.pickedCards;

      if (memoryGame.pickedCards.length === 2) {

        let card1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
        let card2 = memoryGame.pickedCards[1].getAttribute('data-card-name');

        if (!memoryGame.checkIfPair(card1, card2)) {
          memoryGame.pickedCards.forEach(element => {
            setTimeout(() => {
              element.classList.toggle('turned');
            }, 1000);
          });
        }
        // Empty the array for the next pair
        memoryGame.pickedCards = [];
      }

      // Updating the scorecard
      let clicked = document.getElementById('pairs-clicked');
      clicked.innerText = memoryGame.pairsClicked;
      let matched = document.getElementById('pairs-guessed');
      matched.innerText = memoryGame.pairsGuessed;

      if (memoryGame.checkIfFinished()) {
        // hide the game screen and show the end screen
        memoryGame.gameFinished();
      }

    });
  });

});
