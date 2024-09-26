const TreinoDAO = require('../daos/TreinoDAO');

class TreinoService {
  async criarTreino(treinoData) {
    return await TreinoDAO.create(treinoData);
  }

  async obterTodosTreinos() {
    return await TreinoDAO.findAll();
  }

  async obterTreinoPorId(id) {
    return await TreinoDAO.findById(id);
  }

  async atualizarTreino(id, updateData) {
    return await TreinoDAO.update(id, updateData);
  }

  async excluirTreino(id) {
    return await TreinoDAO.delete(id);
  }
}

module.exports = new TreinoService();
