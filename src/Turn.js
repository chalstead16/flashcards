class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.card = currentCard;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.guess;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    }
    return false;
  }
}

module.exports = Turn;
