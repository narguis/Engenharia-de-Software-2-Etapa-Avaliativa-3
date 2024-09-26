const express = require('express');
const router = express.Router();
const AutenticacaoController = require('../controllers/AutenticacaoController');

router.post('/register', AutenticacaoController.register);
router.post('/login', AutenticacaoController.login);

module.exports = router;
