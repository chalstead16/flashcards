const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
//const Turn = require('../src/Turn');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();

    expect(Turn).to.be.a('function')
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();

    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have a property of cards', function(){
    const cardOne = new Card(1,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const cardTwo = new Card(2, 'What is Casey\'s favorite season?', ['winter', 'summer', 'autumn'], 'autumn');
    const cardThree = new Card(3, 'What is Casey\'s favorite food?', ['the limit does not exist', 'meatballs', 'sushi'], 'the limit does not exist');

    const deck = new Deck([cardOne, cardTwo, cardThree]);

    expect(deck.cards).to.deep.equal([cardOne, cardTwo, cardThree]);
  });
});
