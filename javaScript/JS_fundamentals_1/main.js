var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
for (var i = 0; i < x.length; i++){
  console.log(x[i]);
}

x.push(100);
x.push(['hello', 'world', 'Javascript is fun']);
console.log(x);

function sum(number){
  var b = 0;
  for (var i = 1; i <= number; i++){
    var b = b + i;
  }
  console.log(b);
}
sum(500);

var arr = [1,5,90,25,-3,0];
var y = arr[0];
for (var i = 1; i < arr.length; i++){
  if (arr[i] < y){
    y = arr[i];
  }
}
console.log(y);

var arr = [1,5,90,25,-3,0];
var dem = arr.length;
var sum = 0;
for (var i = 0; i < dem; i++){
  sum = arr[i] + sum;
}
var ave = sum/dem;
console.log(ave);

var new_ninja = {
  name: 'Jessica',
  profession: 'coder',
  favorite_language: 'JavaScript',
  dojo: 'Dallas'
}
for (var key in new_ninja){
  console.log(new_ninja[key]);
}
