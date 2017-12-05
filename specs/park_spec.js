const Park = require('../park.js');
const assert = require('assert');

describe('Park', function() {
   let park;


  beforeEach(function () {
     park = new Park();
 })

 it('enclosure starts empty', function () {
   assert.strictEqual(park.enclosureSize(), 0);
 });





});
