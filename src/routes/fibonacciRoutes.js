// fibonacciRoutes.js

const express = require('express');
const router = express.Router();
const { getFirst50 } = require('../controllers/fibonacciController');

router.get('/first50', getFirst50);

module.exports = router;
