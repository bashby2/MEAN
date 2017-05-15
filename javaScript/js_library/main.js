// //Can we make this into a method of an object?
// function each(arr, callback) {
//   // loop through the array
//   for(var i = 0; i < arr.length; i++) {
//     callback(arr[i]); // invoking the callback many times... delegation!
//   }
// }

var _ = {
   map: function() {

   },
   reduce: function() {
     // code here;
   },
   find: function() {
     // code here;
   },
   filter: function() {
     // code here;
   },
   reject: function() {
     // code here;
   }
 }
// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

// Solution was:

var _ = {
  map: function(array, callback){
    for (var i = 0; i < array.length; i++) {
      array[i] = callback(array[i]);
    }
  },
  reduce: function(array, callback, memo){
      var el = 0;
      if (!memo){
        memo = array[0];
        el = 1;
      }
      for (var i = el; i < array.length; i++) {
        memo = callback(array[i], memo);
      }
      return memo;

  },
  find: function(array, callback){
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])){
        return array[i];
      }
    }
  },
  filter: function(array, callback){
    var tempArray =[];
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])){
        tempArray.push(array[i]);
      }
    }
    // we could also modify the original array
    return tempArray;
  },
  reject: function(array, callback){
    var tempArray =[];
    for (var i = 0; i < array.length; i++) {
      if (!callback(array[i])){
        tempArray.push(array[i]);
      }
    }
    // we could also modify the original array
    return tempArray;
  },
}

var array = [3,4,5]
_.map(array, function callback(x){return x * 5;});
console.log(array);
console.log(_.reduce(array, function callback(x, memo){return x + memo;}));
console.log(_.find(array, function callback(x){return x == 15;}));
// note: we used named functions for clarity above, but we can also pass anonymous functions as the second parameter:
_.filter(array, function(x){return x > 20;})
console.log(array);
