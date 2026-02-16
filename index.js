import express from 'express';

const app = express();
const port = 3002;

// Use routes

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al servidor de node" });
});

app.get('/api/ping', (req, res) => {
  res.json({ pong: true, timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});