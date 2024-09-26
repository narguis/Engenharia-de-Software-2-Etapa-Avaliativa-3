const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  metricas: { type: mongoose.Schema.Types.ObjectId, ref: 'Metricas' },
  treinos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Treino' }],
  frequencias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FrequenciaAcademia' }],
});

UsuarioSchema.pre('save', async function(next) {
  if (!this.isModified('senha')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

UsuarioSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.senha);
};

module.exports = mongoose.model('Usuario', UsuarioSchema);
