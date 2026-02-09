import express from 'express';
import usersRoutes from './src/routes/usersRoutes.js';

const app = express();
const port = 3003;

// Use routes
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al servidor de node" });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
