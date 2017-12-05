const Dinosaur = require('../dinosaur.js');
const assert = require('assert');


describe('Dinosaur', function() {
   let dinosaur;


  beforeEach(function () {
     dinosaur = new Dinosaur("T-Rex", 2);
 })

  it('dinosaur has a name', function () {
    assert.strictEqual(dinosaur.type, "T-Rex");
  });

  });
