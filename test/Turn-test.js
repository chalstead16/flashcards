const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turns', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function')
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn)
  });

  it('should have a property of guess', function() {
    const turn = new Turn('blue');

    expect(turn.guess).to.be.equal('blue')
  });

  it('should have a property for the current card', function() {
    const card = new Card(2,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const turn = new Turn('blue', card);

    expect(turn.card).to.be.equal(card)
  });

  it('should be able to store the user\'s guess for the question', function() {
    const card = new Card(2,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const turn = new Turn('blue');

    expect(turn.guess).to.equal('blue');
  });

  it('should be able to store the user\'s guess for the question', function() {
    const card = new Card(2,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const turn = new Turn('blue', card);

    expect(turn.guess).to.deep.equal('blue');
    expect(turn.card).to.deep.equal(card);
  });

  it('should be able to return the user\'s guess for the question', function() {
    const card = new Card(2,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const turn = new Turn('blue', card);

    expect(turn.guess).to.deep.equal('blue');
    expect(turn.card).to.deep.equal(card);
    expect(turn.returnGuess()).to.equal('blue');
  });

  it('should be able to returns the current card', function() {
    const card = new Card(2,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const turn = new Turn('blue', card);

    expect(turn.guess).to.equal('blue')
    expect(turn.card).to.deep.equal(card)
    expect(turn.returnCard()).to.equal(card)
  });

  it('should be able to evaluate the user\'s guess is incorrect', function() {
    const card = new Card(2,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const turn = new Turn('blue', card);

    expect(turn.guess).to.equal('blue');
    expect(turn.card).to.deep.equal(card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to evaluate the user\'s guess is correct', function() {
    const card = new Card(2,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const turn = new Turn('orange', card);

    expect(turn.guess).to.equal('orange');
    expect(turn.card).to.deep.equal(card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give feedback if the user\'s guess is incorrect', function() {
    const card = new Card(2,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const turn = new Turn('blue', card);

    expect(turn.guess).to.equal('blue');
    expect(turn.card).to.deep.equal(card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

  it('should give feedback if the user\'s guess is correct', function() {
    const card = new Card(2,'What is Casey\'s favorite color?', ['blue', 'pink', 'orange'], 'orange');
    const turn = new Turn('orange', card);

    expect(turn.guess).to.equal('orange');
    expect(turn.card).to.deep.equal(card);
    expect(turn.giveFeedback()).to.equal('correct!');
  });
});
