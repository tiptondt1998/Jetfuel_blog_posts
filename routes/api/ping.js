const router = require('express').Router();

const { } = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

router.route('/:thoughtId/reactions')
.post(addReply)

router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReply)
  module.exports = router;