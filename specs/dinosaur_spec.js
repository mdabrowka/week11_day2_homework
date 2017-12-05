const Dinosaur = require('../dinosaur.js');
const assert = require('assert');


describe('Dinosaur', function() {
   let dinosaur;


  beforeEach(function () {
     dinosaur = new Dinosaur("T-Rex", 2);
 })

  it('dinosaur has a type', function () {
    assert.strictEqual(dinosaur.type, "T-Rex");
  });

  it('dinosaur has a number of offspring per year', function () {
    assert.strictEqual(dinosaur.offspringPerYear, 2);
  });



  });
