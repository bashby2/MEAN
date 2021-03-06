var express = require("express");

var app = express();
app.get('/', function(request, response) {
  response.send("Hello Express!");
})

app.listen(8000, function() {
  console.log("listening on port 8000");

})


// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
console.log(`here is the directory path ${__dirname}`);
