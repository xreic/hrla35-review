const Pokes = require('./schema.js');

module.exports = {
  getAll: () => Pokes.find({}),
  getByType: (type) => Pokes.find({ type: type }),
  updateName: (id, name) => Pokes.findOneAndUpdate({ id: id }, { name: name }),
};
