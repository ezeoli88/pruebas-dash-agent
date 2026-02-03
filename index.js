const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al sevidor de node" });
});

// New endpoint to return the current timestamp
app.get('/timestamp', (req, res) => {
  res.json({ timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
