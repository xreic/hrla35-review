const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to Pokedex'));

module.exports = db;
