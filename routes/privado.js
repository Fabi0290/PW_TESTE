const path = require('path');
const express = require('express');
const privadoRouter = express.Router();

// Define uma rota para a página HTML
privadoRouter.get('/Gerir_Carros.html', (req, res) => {
  // Use o método path.join para resolver o caminho absoluto do arquivo HTML
  res.sendFile(path.join(__dirname, '../frontEnd' ,'Gerir_Carros.html'));
});

module.exports = privadoRouter;

