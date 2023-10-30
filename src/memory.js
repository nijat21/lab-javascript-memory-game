class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffledCards = [];
  }


  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return;
    }

    shuffledCards = JSON.parse(JSON.stringify(this.cards));
    const n = shuffledCards.length;

    for (let i = 0; i < n; i++) {
      let j = Math.floor(Math.random() * i);
      let temp = shuffledCards[i];
      if (j !== i) {
        shuffledCards[i] = shuffledCards[j];
      }
      shuffledCards[j] = temp;
    }
    return shuffledCards;
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
}

