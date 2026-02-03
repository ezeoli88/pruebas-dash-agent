const express = require('express');
const app = express();
const port = 3003; // Changed port to 3003

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al sevidor de node" });
});

// New endpoint for status check
app.get('/status', (req, res) => {
  res.send("servidor corriendo...");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
