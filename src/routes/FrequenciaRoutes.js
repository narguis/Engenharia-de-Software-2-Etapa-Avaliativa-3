const express = require('express');
const router = express.Router();
const FrequenciaAcademiaController = require('../controllers/FrequenciaAcademiaController');
const auth = require('../middlewares/auth');

router.post('/', auth, FrequenciaAcademiaController.registrarFrequencia);
router.get('/:id', auth, FrequenciaAcademiaController.obterFrequenciaPorId);
router.put('/:id', auth, FrequenciaAcademiaController.atualizarFrequencia);
router.delete('/:id', auth, FrequenciaAcademiaController.excluirFrequencia);

module.exports = router;
