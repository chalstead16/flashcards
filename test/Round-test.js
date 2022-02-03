const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function () {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a property of deck', function () {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    expect(round.deck).to.equal([cardOne, cardTwo, cardThree]);
  });

  it('should have a way to return the current card', function() {
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(round.deck[0]);
  });
});
