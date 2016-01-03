var router = require("express").Router();

router.use('/user', require('./user.controller.js'));

module.exports = router;