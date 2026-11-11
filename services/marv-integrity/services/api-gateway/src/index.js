const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Ruta de Healthcheck (Para saber si el servidor está vivo)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', system: 'KRONOS API Gateway', version: '1.0.0' });
});

// Ruta de Verificación (Simulada por ahora)
app.get('/api/v1/verify/:hash', (req, res) => {
  const hash = req.params.hash;
  if(hash === '41a3683b') {
    return res.json({ valid: true, message: 'MATCH · Documento Auténtico' });
  }
  res.json({ valid: false, message: 'NO MATCH · Documento Alterado' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 API Gateway corriendo en http://localhost:${PORT}`);
});
