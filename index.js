import express from 'express';
import fibonacciRoutes from './src/routes/fibonacciRoutes.js';

const app = express();
const port = 3002;

// Use routes
app.use('/api/fibonacci', fibonacciRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al servidor de node" });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
