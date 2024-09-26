const UsuarioDAO = require('../daos/UsuarioDAO');
const MetricasDAO = require('../daos/MetricasDAO');

class UsuarioService {
  async criarUsuario(usuarioData) {
    const metricas = await MetricasDAO.create(usuarioData.metricas);
    usuarioData.metricas = metricas._id;
    return await UsuarioDAO.create(usuarioData);
  }

  async obterUsuario(id) {
    return await UsuarioDAO.findById(id);
  }

  async atualizarUsuario(id, updateData) {
    return await UsuarioDAO.update(id, updateData);
  }

  async excluirUsuario(id) {
    return await UsuarioDAO.delete(id);
  }
}

module.exports = new UsuarioService();
