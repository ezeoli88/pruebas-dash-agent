const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al sevidor de node" });
});

// New /hello endpoint
app.get('/hello', (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
