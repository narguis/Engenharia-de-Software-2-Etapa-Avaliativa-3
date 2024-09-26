const UsuarioDAO = require('../daos/UsuarioDAO');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

class AutenticacaoService {
  async login(email, senha) {
    const usuario = await UsuarioDAO.findByEmail(email);
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }
    const isMatch = await usuario.comparePassword(senha);
    if (!isMatch) {
      throw new Error('Senha inválida');
    }
    const payload = { id: usuario._id, email: usuario.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, id: usuario._id };
  }



  async generateToken(usuario) {
    const payload = { id: usuario._id, email: usuario.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  }

}

module.exports = new AutenticacaoService();
