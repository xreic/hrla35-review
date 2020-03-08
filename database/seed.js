const PokeModel = require('./schema.js');
const Pokemans = require('../pokemon.json');

PokeModel.insertMany(Pokemans)
  .then((result) => console.log('Pokemans added.'))
  .catch((err) => console.error(err));
