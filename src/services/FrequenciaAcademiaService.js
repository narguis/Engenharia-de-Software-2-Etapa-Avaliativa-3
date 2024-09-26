const FrequenciaAcademiaDAO = require('../daos/FrequenciaAcademiaDAO');

class FrequenciaAcademiaService {
  async registrarFrequencia(frequenciaData) {
    return await FrequenciaAcademiaDAO.create(frequenciaData);
  }

  async obterFrequenciaPorId(id) {
    return await FrequenciaAcademiaDAO.findById(id);
  }

  async atualizarFrequencia(id, updateData) {
    return await FrequenciaAcademiaDAO.update(id, updateData);
  }

  async excluirFrequencia(id) {
    return await FrequenciaAcademiaDAO.delete(id);
  }
}

module.exports = new FrequenciaAcademiaService();
