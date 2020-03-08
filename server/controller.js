const Pokes = require('../database/model.js');

const controller = {
  getAll: (req, res) => {
    Pokes.getAll()
      .then((data) => res.status(200).send(data).end())
      .catch((err) => res.status(400).send(err).end());
  },

  getByType: (req, res) => {
    Pokes.getByType(req.params.type)
      .then((data) => res.status(200).send(data).end())
      .catch((err) => res.status(400).send(err).end());
  },

  updateName: (req, res) => {
    Pokes.updateName(req.params.id, req.body.name)
      .then((data) => res.status(200).send(data).end())
      .catch((err) => res.status(400).send(err).end());
  }
};

module.exports = controller;
