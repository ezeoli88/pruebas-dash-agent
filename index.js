const express = require('express');
const app = express();
const port = 3002; // Changed to explicitly use 3002 as the port

// Helper function to get the current port
const getPort = () => app.get('port') || 3002;

// Existing route
app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenidos al sevidor de node" });
});

// New /status route
app.get('/status', (req, res) => {
  const activePort = getPort();
  res.json({ mensaje: `servidor levantado en puerto ${activePort}` });
});

// Start the server
app.listen(port, () => {
  app.set('port', port); // Set the port for app
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
