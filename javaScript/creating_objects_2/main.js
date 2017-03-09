function VehicalConsturctor(name, wheels, passengers, speed){
  if (!(this instanceof VehicalConsturctor)) {
   // the constructor was called without "new".
   return new VehicalConsturctor(name, wheels, passengers, speed);
 }
 
  // PRIVATE
  var self=this;
  var distance_travelled=0;
  var privateVar = "This is a private variable";
  var updateDistanceTravelled = function() {
    distance_travelled += self.speed;
  }
  // PUBLIC
  this.name=name || 'moped';
  this.wheels=wheels || 2;
  this.passengers=passengers || 1;
  this.speed=speed || -1;

  this.makeNoise = function(){
    console.log('I am a ' + this.name + ', I have ' + this.wheels + ' wheels and can carry ' + this.passengers + ' passangers! ZOOOM');
  }
  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise;
    console.log('The ' + this.name + ' is moving, with a speed of ' + this.speed)
  }
  this.checkMiles = function(){
    console.log(distance_travelled);
  }
}

//creating a Bike
var bike = new VehicalConsturctor('bike','2','2', 32);
bike.makeNoise();
bike.move();
bike.checkMiles();
//reasiging the bikes makeNoise to "ring ring"
bike.makeNoise = function(){
  console.log('ring ring');
}
bike.makeNoise();

//creating a sedan
var sedan = new VehicalConsturctor('sedan','4','5');
sedan.makeNoise();
//reasiging the sedans makeNoise to "honk honk"
sedan.makeNoise = function(){
  console.log("honk honk");
}
sedan.makeNoise();

//creating a bus
var bus = new VehicalConsturctor('bus','6', 22, 20);
//making a new method for the bus to add people to the passenger count

bus.pickUp = function(picked_up){
  this.passengers += picked_up;
}
bus.pickUp(5);
console.log(bus.passengers);
bus.makeNoise();
