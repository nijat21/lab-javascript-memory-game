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

    // Add all the divs to the HTML
    document.querySelector('#memory-board').innerHTML = html;

    let count = 0;
    let cardsPicked = memoryGame.pickedCards;
    // Bind the click event of each element to a function
    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {
            // TODO: write some code here
            console.log(`Card clicked: ${card}`);

            // my code 
            cardsPicked.push(card);
            card.classList.toggleClass('turned');
            let cardName = cardsPicked.getAttribute('data-card-name');
            console.log(cardName);

            window.setTimeout(function () {
                card.children().children().toggleClass('turned');
            }, 4000)
        });
    });
    console.log(cardsPicked);





    // let n = cardsPicked.length;
    // if (n === 2) {
    //     let card1 = cardsPicked[n - 1].getAttribute('data-card-name');
    //     let card2 = cardsPicked[n - 2].getAttribute('data-card-name');

    //     if (!memoryGame.checkIfPair(card1, card2)) {
    //         card.classList.remove('turned');
    //     };

    // }

});

