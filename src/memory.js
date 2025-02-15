class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards() {
    // ... write your code here
    if (this.cards) {
      return this.cards.sort(() => Math.random() - 0.5);
    }
  }


  checkIfPair(card1, card2) {
    // ... write your code here
    let card1Content = JSON.stringify(card1);
    let card2Content = JSON.stringify(card2);

    this.pairsClicked++;
    if (card1Content === card2Content) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
  }

  gameFinished() {
    const gameFinished = document.getElementById('game-finished');
    document.getElementById('memory-board').style.display = 'none';
    gameFinished.style.display = 'block';
    gameFinished.style.backgroundColor = 'white';
  }
}

