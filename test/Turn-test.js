const chai = require('chai');
const expect = chai.expect;

describe('Turns', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function')
  });
});
