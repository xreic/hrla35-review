const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/getall')
  .get(controller.getAll);

router
  .route('/get/:type')
  .get(controller.getByType);

router
  .route('/changeName/:id')
  .put(controller.updateName);

module.exports = router;
