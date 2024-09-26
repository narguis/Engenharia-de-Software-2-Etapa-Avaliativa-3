const mongoose = require('mongoose');

const FrequenciaAcademiaSchema = new mongoose.Schema({
  data: { type: Date, required: true },
  treinoRealizado: { type: mongoose.Schema.Types.ObjectId, ref: 'Treino' },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
});

module.exports = mongoose.model('FrequenciaAcademia', FrequenciaAcademiaSchema);
