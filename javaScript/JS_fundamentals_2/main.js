// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum
function sum(number1, number2){
  var b = 0;
  for (var i = number1; i <= number2; i++){
    var b = b + i;
  }
  console.log(b);
}
sum(2,4);

// Write a loop that will go through an array, find the minimum value, and then return it
var arr;
function min_array(){
  var y = arr[0];
  for (var i = 1; i < arr.length; i++){
    if (arr[i] < y){
      y = arr[i];
    }
  }
  console.log(y);
  return y;
}
arr = [1,5,90,25,-3,0]
min_array(arr);

// Write a loop that will go through an array, find the average of all of the values, and then return it
var arr;
var dem;
var sum;
var ave;
function average(){
  for (var i = 0; i < dem; i++){
    sum = arr[i] + sum;
  }
  ave = sum/dem;
  console.log(ave);
  return ave;
}
arr = [1,5,90,25,-3,0];
dem = arr.length;
sum = 0;
average(arr);

// Rewrite these as methods of an object
var object;
object = {
  sum:function (number1, number2){
    var b = 0;
    for (var i = number1; i <= number2; i++){
      var b = b + i;
    }
    console.log(b);
  },
  min_array:function(){
    var y = arr[0];
    for (var i = 1; i < arr.length; i++){
      if (arr[i] < y){
        y = arr[i];
      }
    }
    console.log(y);
    return y;
  },
  average:function average(){
    var arr;
    var dem;
    var sum;
    var ave;
    for (var i = 0; i < dem; i++){
      sum = arr[i] + sum;
    }
    arr = [1,5,90,25,-3,0];
    dem = arr.length;
    sum = 0;
    ave = sum/dem;
    console.log(ave);
    return ave;
  },
}

// Create a JavaScript object called person with the following properties/methods
var person;
person = {
  name:'Brandon',
  distance_traveled:0,
  say_name:function(){console.log(person.name)},
  say_something:function(something){console.log(person.name, something)},
  walk:function(){distance_traveled = distance_traveled + 3, console.log(person.name, 'is walking')},
  run:function(){distance_traveled = distance_traveled + 10, console.log(person.name, 'is running')},
  crawl:function(){distance_traveled = distance_traveled + 1, console.log(person.name, 'is crawling')},
}
