//declarations get hoisted
// var hello;
// function example() {
//   var hello;
//   hello = "hi!";
//   console.log(hello);
// }
//assignments and invocation maintain order
// hello = "interesting";
// example();
// console.log(hello);


// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);

console.log('Number One');
// Would be interpeted in JS as:

var first_variable;

function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
first_variable= "Yipee I was first!";
console.log(first_variable);

console.log('Number Two');
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);

var food;
function eat(){
  var food;
  food = 'half-chicken';
  console.log(food);
  food = 'gone';
  console.log(food);
}
food = 'Chicken';
eat();
console.log(food);

console.log('Number Three');
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);

var new_world;
function lastFunc(){
  new_world = 'old';
}
new_world = 'NEW!';
console.log(new_world);
