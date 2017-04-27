var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
// var db = mongoose.connection;

var repoSchema = mongoose.Schema({
  id: {
    type: Number, unqiue: true
  },
  owner: String,
  name: {
    type: String, unqiue: true
  },
  description: String,
  created_at: String,
  url: String  
});


var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;