const router = require('express').Router();

const { getAllPosts, addPost, removePost,addReply, removeReply } = require('../../controllers/post-controller');

router
  .route('/')
  .get(getAllPosts)
  .post(addPosts);

router.route('/:postId/reactions')
.post(addReply)

router.route('/:postId/reactions/:reactionId')
.delete(removeReply)
  module.exports = router;