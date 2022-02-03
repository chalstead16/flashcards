const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a property of deck', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    expect(round.deck).to.equal(deck.cards);
  });

  it('should have a way to return the current card', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(cardOne);
  });

  it('should have a property to track the turns count', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should update turn regardless if the guess is correct or incorrect', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    round.takeTurn();

    expect(round.turns).to.equal(1);
  });

  it('should create a new turn instance', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    round.takeTurn();

    expect(round.currentTurn).to.be.an.instanceOf(Turn);
  });

  it('should add incorrect guesses to an incorrect answer array', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    round.takeTurn('pink');

    expect(round.incorrectAnswers[0]).to.equal(cardOne);
  });

  it('should provide feedback for incorrect guesses', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    expect(round.takeTurn('pink')).to.equal('incorrect!');
  });

  it('should provide feedback for correct guesses', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    expect(round.takeTurn('orange')).to.equal('correct!');
  });

  it('should update the current card', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    round.takeTurn();

    expect(round.deck[0]).to.equal(cardTwo);
  });

  it('should calculate the percentage of correct guesses', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    round.takeTurn('orange');

    expect(round.calculatePercentCorrect()).to.equal(100);
  });
});
