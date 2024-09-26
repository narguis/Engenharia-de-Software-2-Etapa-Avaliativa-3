const Usuario = require('../models/Usuario');
const AutenticacaoService = require('../services/AutenticacaoService');

class AutenticacaoController {
  async register(req, res) {
    try {
      const { nome, email, senha } = req.body;

      console.log(req.body)

      const usuarioExistente = await Usuario.findOne({ email });
      if (usuarioExistente) {
        return res.status(400).json({ message: 'Usuário já existe' });
      }

      const novoUsuario = new Usuario({
        nome,
        email,
        senha
      });

      await novoUsuario.save();

      const token = await AutenticacaoService.generateToken(novoUsuario);

      console.log(res)

      res.status(201).json({
        message: 'Usuário registrado com sucesso',
        token,
        usuario: {
          id: novoUsuario._id,
          nome: novoUsuario.nome,
          email: novoUsuario.email
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
  }

  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const {token, id} = await AutenticacaoService.login(email, senha);
      res.status(200).json({ message: 'Login realizado com sucesso', token , id});
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

}

module.exports = new AutenticacaoController();
