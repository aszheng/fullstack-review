var express = require('express');
var bodyParser = require('body-parser');
var GitHub = require('github-api');



var app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/repos/import', function (req, res) {
  var searchUser = req.body.username;
  
  var gh = new GitHub({
    username: 'aszheng',
    password: 'd75e14dd734a456197ece8f88a6daa4a88f5601c'
  });

  var user = gh.getUser(searchUser); // no user specified defaults to the user for whom credentials were provided
  user.listRepos(function(err, notifications) {
    console.log('notifications', notifications.length);
    res.json(notifications.length);
  });

  console.log('POST REQ SUCESS!!!!')
});

app.get('/repos', function (req, res) {
  console.log('GET REQUEST WORKS');
  res.end('TESTTESTTEST');
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

