const Usuario = require('../models/Usuario');

class UsuarioDAO {
  async create(usuarioData) {
    const usuario = new Usuario(usuarioData);
    return await usuario.save();
  }

  async findById(id) {
    return await Usuario.findById(id).populate('metricas treinos frequencias');
  }

  async findByEmail(email) {
    return await Usuario.findOne({ email });
  }

  async update(id, updateData) {
    return await Usuario.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    return await Usuario.findByIdAndDelete(id);
  }
}

module.exports = new UsuarioDAO();
