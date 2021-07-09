const router = require('express').Router({ mergeParams: true });
const pingRoutes = require('./ping-routes');
const postRoutes = require('./post-routes');

router.use('/posts', postRoutes);

router.use('/ping', pingRoutes);

module.exports = router;