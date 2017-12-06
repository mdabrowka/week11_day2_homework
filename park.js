const Park = function () {
  this.enclosure = [];
}

Park.prototype.enclosureSize = function () {
  return this.enclosure.length;
}

Park.prototype.addToEnclosure = function (dino) {
  this.enclosure.push(dino);
}


Park.prototype.removeFromEnclosure = function (type) {
    for (var dinosaur of this.enclosure) {
      if (dinosaur.type === type) {
        var index = this.enclosure.indexOf(dinosaur);
        this.enclosure.splice(index, 1);
        //needs to loop throught the entire array and remove all of the dinosaurs of that type
    }
  }
}


Park.prototype.moreThanTwoOffspring = function () {
  var fertileDinos = [];
  for (var dinosaur of this.enclosure) {
    if (dinosaur.offspringPerYear > 2) {
      fertileDinos.push(dinosaur);
    }
  }
  return fertileDinos;
}



module.exports = Park;
