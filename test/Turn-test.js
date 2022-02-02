const chai = require('chai');
const expect = chai.expect;

describe('Turns', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function')
  });

  it('should be an instance of Turn', fuction() {
    const turn = new Turn();

    expect(Turn).to.be.an.instanceof(Turn);
  });

   //with an argument to represent a user\'s guess to the question
});
