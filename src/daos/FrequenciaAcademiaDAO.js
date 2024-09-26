const FrequenciaAcademia = require('../models/FrequenciaAcademia');

class FrequenciaAcademiaDAO {
  async create(frequenciaData) {
    const frequencia = new FrequenciaAcademia(frequenciaData);
    return await frequencia.save();
  }

  async findById(id) {
    return await FrequenciaAcademia.findById(id).populate('treinoRealizado');
  }

  async update(id, updateData) {
    return await FrequenciaAcademia.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    return await FrequenciaAcademia.findByIdAndDelete(id);
  }
}

module.exports = new FrequenciaAcademiaDAO();
