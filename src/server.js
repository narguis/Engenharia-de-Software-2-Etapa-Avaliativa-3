const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

const usuarioRoutes = require('./routes/UsuarioRoutes');
const metricaRoutes = require('./routes/MetricasRoutes');
const treinoRoutes = require('./routes/TreinoRoutes');
const frequenciaRoutes = require('./routes/FrequenciaRoutes');
const autenticacaoRoutes = require('./routes/AutenticacaoRoutes');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/metricas', metricaRoutes);
app.use('/api/treinos', treinoRoutes);
app.use('/api/frequencia', frequenciaRoutes);
app.use('/api', autenticacaoRoutes);

app.get('/', (req, res) => {
  res.send('API FitFriend está funcionando!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
