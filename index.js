const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al sevidor de node" });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
