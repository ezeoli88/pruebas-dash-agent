const express = require('express');
const app = express();
const port = 3002;

// Importing routes
const fibonacciRoutes = require('./src/routes/fibonacciRoutes');

// Use routes
app.use('/api/fibonacci', fibonacciRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al sevidor de node" });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
