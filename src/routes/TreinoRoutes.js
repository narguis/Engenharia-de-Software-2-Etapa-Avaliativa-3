const express = require('express');
const router = express.Router();
const TreinoController = require('../controllers/TreinoController');
const auth = require('../middlewares/auth');

router.post('/', auth, TreinoController.criarTreino);
router.get('/', auth, TreinoController.obterTodosTreinos);
router.get('/:id', auth, TreinoController.obterTreinoPorId);
router.put('/:id', auth, TreinoController.atualizarTreino);
router.delete('/:id', auth, TreinoController.excluirTreino);

module.exports = router;
