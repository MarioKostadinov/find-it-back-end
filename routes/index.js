var express = require("express");
var fs = require("fs");
var router = express.Router();


router.get('/', function(request, response){
    fs.readFile('index.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });
});


module.exports = router;
