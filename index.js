import express from 'express';

const app = express();
const port = 3002;

// Use routes

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al servidor de node" });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});