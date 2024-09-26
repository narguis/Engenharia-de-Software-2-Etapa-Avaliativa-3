const express = require('express');
const router = express.Router();
const MetricasController = require('../controllers/MetricasController');
const auth = require('../middlewares/auth');

router.get('/:usuarioId', auth, MetricasController.obterMetricas);
router.put('/:id', auth, MetricasController.atualizarMetricas);

module.exports = router;
