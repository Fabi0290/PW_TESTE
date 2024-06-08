const express = require('express');
const router = express.Router();
const controller = require('../../controllers/pgs/carros');

router.get('/testeConn', controller.testConnection); //le todos
//ainda nao dá

module.exports = router;