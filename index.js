import express from 'express';
import helloRoutes from './src/routes/helloRoutes.js';

const app = express();
const port = 3002;

// Use routes
app.use(helloRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al servidor de node" });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});