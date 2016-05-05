function Car(make) {
  this.make = make;
  this.stat = "stopped";
  this.elecStarter = elecStarter;
  this.fuelPump = fuelPump;
  this.mainEngine = mainEngine;
}

function elecStarter() {
  this.fuelPump();
}

function fuelPump() {
  this.mainEngine();
}

function mainEngine() {
  this.stat = "running";
}

ford = new Car("Ford");
ford.elecStarter();

console.log(ford.stat);
