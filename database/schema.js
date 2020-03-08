const mongoose = require('mongoose');
const db = require('./index.js');

var pokeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  img: String,
});

var PokeModel = mongoose.model('Pokemans', pokeSchema);

module.exports = PokeModel;
