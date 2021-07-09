const router = require('express').Router();

const { } = require('../../controllers/ping-controller');

router
  .route('/')
  .get(getAllPings)
  .post(addPing);

  module.exports = router;