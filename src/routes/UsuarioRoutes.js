const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

router.post('/', UsuarioController.criarUsuario);

router.get('/:id', auth, UsuarioController.obterUsuario);
router.put('/:id', auth, UsuarioController.atualizarUsuario);
router.delete('/:id', auth, UsuarioController.excluirUsuario);

module.exports = router;
