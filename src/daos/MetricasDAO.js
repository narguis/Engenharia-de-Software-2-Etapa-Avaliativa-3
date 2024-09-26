const Metricas = require('../models/Metricas');

class MetricasDAO {
  async create(metricasData) {
    const metricas = new Metricas(metricasData);
    return await metricas.save();
  }

  async findByUsuario(usuarioId) {
    return await Metricas.findOne({ usuario: usuarioId });
  }

  async update(id, updateData) {
    return await Metricas.findByIdAndUpdate(id, updateData, { new: true });
  }
}

module.exports = new MetricasDAO();
