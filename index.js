import express from 'express';

// Import user routes
import userRoutes from './src/routes/userRoutes.js';

const app = express();
const port = 3002;

// Use routes
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al servidor de node" });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});