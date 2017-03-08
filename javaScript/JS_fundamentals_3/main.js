function personConstructor(name){
  var person;
  person = {
    name:name,
    distance_traveled:0,
    say_name:function(){console.log(person.name)},
    say_something:function(something){console.log(person.name, something)},
    walk:function(){distance_traveled = distance_traveled + 3, console.log(person.name, 'is walking')},
    run:function(){distance_traveled = distance_traveled + 10, console.log(person.name, 'is running')},
    crawl:function(){distance_traveled = distance_traveled + 1, console.log(person.name, 'is crawling')},
  }
}
personConstructor("Brandon");


function ninjaConsturctor(name){
  var ninja = {
    name: name,
    cohort: 'online',
    belt: 'yellow-belt',
    levelUp: function(){
      if (ninja.belt == 'yellow-belt'){
        ninja.belt = 'red-belt';
      }
      if (ninja.belt == 'red-belt'){
        ninja.belt = 'black-belt';
      }
      return ninja;
    }
  }
  // console.log(ninja);
  return ninja;
}
ninjaConsturctor('Brandon');
