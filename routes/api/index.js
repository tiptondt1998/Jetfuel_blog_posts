const router = require('express').Router({ mergeParams: true });
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/thoughts', postRoutes);

router.use('/users', userRoutes);

module.exports = router;