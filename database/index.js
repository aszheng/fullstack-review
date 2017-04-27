var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
// var db = mongoose.connection;

var repoSchema = mongoose.Schema({
  name: String,
  description: String,
  created_at: String,
  url: String  
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;