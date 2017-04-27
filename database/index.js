var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
// var db = mongoose.connection;

var repoSchema = mongoose.Schema({
  name: String,
  description: String
});

var Repo = mongoose.model('Repo', repoSchema);

// var test3 = new Repo({name: 'hi3', description: 'hiiii3'});
// test3.save(function (err,result){
//   console.log('result', result);
// });


module.exports = Repo;