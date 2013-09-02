var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var htmlfileabout = "about.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(fs.readFileSync(htmlfile).toString());
});

app.get('/about.html',function(requestion,response){
    response.send(fs.readFileSync(htmlfileabout).toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});