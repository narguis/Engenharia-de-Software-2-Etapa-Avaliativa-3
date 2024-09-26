const Treino = require('../models/Treino');

class TreinoDAO {
  async create(treinoData) {
    const treino = new Treino(treinoData);
    return await treino.save();
  }

  async findAll() {
    return await Treino.find();
  }

  async findById(id) {
    return await Treino.findById(id);
  }

  async update(id, updateData) {
    return await Treino.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    return await Treino.findByIdAndDelete(id);
  }
}

module.exports = new TreinoDAO();
