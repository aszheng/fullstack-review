var express = require('express');
var bodyParser = require('body-parser');
var GitHub = require('github-api');
var mongoose = require('mongoose');
var Repo = require('../database/index');
// var db = mongoose.connection;


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
        id: Number(data[i].id),
        owner: data[i].owner.login,
        name: JSON.stringify(data[i].name),
        description: data[i].description,
        created_at: data[i].created_at,
        url: data[i].html_url
      });

      userRepos.save(function (err, result){})
    }
  })
  .then( sdfsdfsd => {

    Repo.find({}, function (err, result) {
      console.log('result inside POST REPO FIND', result);
      res.json(result);        
    })
  
  })


  console.log('POST REQ SUCESS!!!!')
});

app.get('/repos', function (req, res) {
  Repo.
    find().
    limit(25).
    sort({ created_at: -1 }).
    exec(function (err,result){
      res.json(result);
    });
  
  console.log('GET REQ SUCESS!!!!')
});

app.post('/clear', function (req, res) {
  mongoose.connect('mongodb://localhost/fetcher',function(){
      mongoose.connection.db.dropDatabase();
  });
  res.end();
  console.log('tabledropped')
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

