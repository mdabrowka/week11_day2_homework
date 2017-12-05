const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');
const assert = require('assert');

describe('Park', function() {
   let park;
   let dinosaur1;
   let dinosaur2;


  beforeEach(function () {
     park = new Park();
     dinosaur1 = new Dinosaur("Diplodocus", 7);
     dinosaur2 = new Dinosaur("Styracosaurus", 5);
 })

 it('enclosure starts empty', function () {
   assert.strictEqual(park.enclosureSize(), 0);
 });

it('should add a dino to an enclosure', function () {
  park.addToEnclosure(dinosaur1);
  assert.strictEqual(park.enclosureSize(), 1);
})

it('should remove a dino to an enclosure', function () {
  park.addToEnclosure(dinosaur1);
  park.removeFromEnclosure("Diplodocus");
  assert.strictEqual(park.enclosureSize(), 0);
})

});
