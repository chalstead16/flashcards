const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.currentTurn = '';
    this.incorrectAnswers = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    this.currentTurn = new Turn (guess, this.returnCurrentCard());
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectAnswers.push(this.returnCurrentCard())
    }
    this.deck.shift();
    this.turns ++;
    return this.currentTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    const rawScore = this.turns - this.incorrectAnswers.length;
    return (rawScore / this.turns) * 100;
  }
}

module.exports = Round;
