console.log('I am running from node, and making changes')

console.log(a);
var a = 'weird';

console.log(typeof(b));
var b = 'weird two';
console.log(typeof(b));

var arr = [3, 6];
arr[234] = 'hi';
console.log(arr.length);
console.log(arr[34]);
arr.length = 3;
console.log(arr[34]);
console.log(arr[234]);
console.log(arr.length);
arr.length = 500;
console.log(arr.length);
console.log(arr[234]);
