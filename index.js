const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al sevidor de node" });
});

// New /status endpoint
app.get('/status', (req, res) => {
  res.json({ status: 'running', uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
