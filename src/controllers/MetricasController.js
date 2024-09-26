const MetricasService = require('../services/MetricasService');

class MetricasController {
  async obterMetricas(req, res) {
    try {
      const metricas = await MetricasService.obterMetricas(req.params.usuarioId);
      if (!metricas) {
        return res.status(404).json({ message: 'Métricas não encontradas' });
      }
      res.json(metricas);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async atualizarMetricas(req, res) {
    try {
      const metricas = await MetricasService.atualizarMetricas(req.params.id, req.body);
      if (!metricas) {
        return res.status(404).json({ message: 'Métricas não encontradas' });
      }
      res.json(metricas);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new MetricasController();
