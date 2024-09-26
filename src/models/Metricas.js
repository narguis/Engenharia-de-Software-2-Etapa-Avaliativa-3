const mongoose = require('mongoose');

const MetricasSchema = new mongoose.Schema({
  altura: { type: Number, required: true },
  peso: { type: Number, required: true },
  imc: { type: Number, required: true },
  bf: { type: Number, required: true },
  agua: { type: Number, required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
});

module.exports = mongoose.model('Metricas', MetricasSchema);
