var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
// var db = mongoose.connection;

var repoSchema = mongoose.Schema({
  id: {
    type: Number, unique: true, dropDups: true
  },
  owner: String,
  name: {
    type: String
  },
  description: String,
  created_at: String,
  url: String  
});


var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;