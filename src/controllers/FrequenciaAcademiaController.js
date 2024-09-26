const FrequenciaAcademiaService = require('../services/FrequenciaAcademiaService');

class FrequenciaAcademiaController {
  async registrarFrequencia(req, res) {
    try {
      const frequencia = await FrequenciaAcademiaService.registrarFrequencia(req.body);
      res.status(201).json(frequencia);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async obterFrequenciaPorId(req, res) {
    try {
      const frequencia = await FrequenciaAcademiaService.obterFrequenciaPorId(req.params.id);
      if (!frequencia) {
        return res.status(404).json({ message: 'Frequência não encontrada' });
      }
      res.json(frequencia);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async atualizarFrequencia(req, res) {
    try {
      const frequencia = await FrequenciaAcademiaService.atualizarFrequencia(req.params.id, req.body);
      if (!frequencia) {
        return res.status(404).json({ message: 'Frequência não encontrada' });
      }
      res.json(frequencia);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async excluirFrequencia(req, res) {
    try {
      const sucesso = await FrequenciaAcademiaService.excluirFrequencia(req.params.id);
      if (!sucesso) {
        return res.status(404).json({ message: 'Frequência não encontrada' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new FrequenciaAcademiaController();
