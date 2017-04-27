var express = require('express');
var bodyParser = require('body-parser');
var GitHub = require('github-api');
var mongoose = require('mongoose');
var Repo = require('../database/index');
// mongoose.connect('mongodb://localhost/fetcher');


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
  user.listRepos(function(err, data) {

    //write to DB  
    for (var i=0; i<data.length; i++){
      var userRepos = new Repo({
        name: data[i].name,
        description: data[i].description
      });
      console.log(data.name);
      console.log(data.description);
      userRepos.save(function (err, result){
        console.log('results', result);
      })
    }
    res.json(data.length);
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

