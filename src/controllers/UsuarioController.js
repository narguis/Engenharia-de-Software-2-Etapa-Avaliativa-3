const UsuarioService = require('../services/UsuarioService');

class UsuarioController {
  async criarUsuario(req, res) {
    try {
      const usuario = await UsuarioService.criarUsuario(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async obterUsuario(req, res) {
    try {
      const usuario = await UsuarioService.obterUsuario(req.params.id);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      res.json(usuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async atualizarUsuario(req, res) {
    try {
      const usuario = await UsuarioService.atualizarUsuario(req.params.id, req.body);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      res.json(usuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async excluirUsuario(req, res) {
    try {
      const sucesso = await UsuarioService.excluirUsuario(req.params.id);
      if (!sucesso) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new UsuarioController();
