var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/repos/import', function (req, res) {
  
  // console.log('REQ' ,req);
  console.log('REQ BODY' ,req.body);
  console.log('REQ BODY stringify' ,JSON.stringify(req.body));
  console.log('POST REQ SUCESS!!!!')

  res.json(req.body);
});

app.get('/repos', function (req, res) {
  console.log('GET REQUEST WORKS');
  res.end('TESTTESTTEST');
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

