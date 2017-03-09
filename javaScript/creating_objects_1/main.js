function VehicalConsturctor(name, wheels, passengers){
  var vehical = {};
  //properties of the vehical
  vehical.name = name;
  vehical.wheels = wheels;
  vehical.passengers = passengers;
  // methods for the vehical
  vehical.makeNoise = function (){
    console.log('I am a ' + name + ', I have ' + wheels + ' wheels and can carry ' + passengers + ' passangers! ZOOOM');
  }
  return vehical;
}

//creating a Bike
var bike = VehicalConsturctor('bike','2','2');
bike.makeNoise();
//reasiging the bikes makeNoise to "ring ring"
bike.makeNoise = function(){
  console.log('ring ring');
}
bike.makeNoise();

//creating a sedan
var sedan = VehicalConsturctor('sedan','4','5');
sedan.makeNoise();
//reasiging the sedans makeNoise to "honk honk"
sedan.makeNoise = function(){
  console.log("honk honk");
}
sedan.makeNoise();

//creating a bus
var bus = VehicalConsturctor('bus','6',22);
//making a new method for the bus to add people to the passenger count
bus.pickUp = function(picked_up){
  bus.passengers += picked_up;
}
bus.pickUp(4);
console.log(bus.passengers);
