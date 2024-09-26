const MetricasDAO = require('../daos/MetricasDAO');

class MetricasService {
  async obterMetricas(usuarioId) {
    return await MetricasDAO.findByUsuario(usuarioId);
  }

  async atualizarMetricas(id, updateData) {
    return await MetricasDAO.update(id, updateData);
  }
}

module.exports = new MetricasService();
