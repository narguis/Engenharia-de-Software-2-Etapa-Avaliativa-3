const TreinoService = require('../services/TreinoService');

class TreinoController {
  async criarTreino(req, res) {
    try {
      const treino = await TreinoService.criarTreino(req.body);
      res.status(201).json(treino);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async obterTodosTreinos(req, res) {
    try {
      const treinos = await TreinoService.obterTodosTreinos();
      res.json(treinos);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async obterTreinoPorId(req, res) {
    try {
      const treino = await TreinoService.obterTreinoPorId(req.params.id);
      if (!treino) {
        return res.status(404).json({ message: 'Treino não encontrado' });
      }
      res.json(treino);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async atualizarTreino(req, res) {
    try {
      const treino = await TreinoService.atualizarTreino(req.params.id, req.body);
      if (!treino) {
        return res.status(404).json({ message: 'Treino não encontrado' });
      }
      res.json(treino);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async excluirTreino(req, res) {
    try {
      const sucesso = await TreinoService.excluirTreino(req.params.id);
      if (!sucesso) {
        return res.status(404).json({ message: 'Treino não encontrado' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new TreinoController();
