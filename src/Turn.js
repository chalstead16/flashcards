class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.card = currentCard;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    }
      return false;
  }

  giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
      return 'correct!';
    }
      return 'incorrect!';
  }
}

module.exports = Turn;
