const express = require('express');
const { getHello } = require('../controllers/studentController');
const router = express.Router();


router.route('/hello').get(getHello);


module.exports = router;
