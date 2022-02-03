const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a property of deck', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    expect(round.deck).to.equal([cardOne, cardTwo, cardThree]);
  });

  it('should have a property to track the turns count', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should have a way to return the current card', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(round.deck[0]);
  });

  it('should create a new turn instance when a guess is made' function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    const turn = new Turn('pink', round.deck.cards[0])

    round.takeTurn('pink');

    expect(round.currentTurn)to.equal(Turn);
  });

  it('should have a way to update turn regardless if the guess is correct or incorrect', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    round.takeTurn('pink');

    expect(round.turns).to.equal(1);
  });

  it('should update the current card when a guess is made', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    round.takeTurn('pink');

    expect(round.currentCard).to.equal(2);
  });

  it('should add incorrect gueses to an incorrect answer array', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    round.takeTurn('pink');

    expect(round.incorrectAnswers).to.equal(['pink']);
  })
});
