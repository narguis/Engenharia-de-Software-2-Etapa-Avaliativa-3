const mongoose = require('mongoose');

const TreinoSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
  exercicios: [{ type: String, required: true }],
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
});

module.exports = mongoose.model('Treino', TreinoSchema);
