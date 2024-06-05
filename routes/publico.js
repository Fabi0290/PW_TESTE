const express = require('express');
const path = require('path');
const publicoRouter = express.Router();

// Define uma rota para a página HTML principal
publicoRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontEnd', 'TRAB_PRAT1.html'));
});

// Outras rotas para os arquivos HTML específicos
publicoRouter.get('/CARRO_PAGINA.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontEnd', 'CARRO_PAGINA.html'));
});

publicoRouter.get('/GERIR_PERFIL.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontEnd', 'GERIR_PERFIL.html'));
});

publicoRouter.get('/LOGIN_PAGINA.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontEnd', 'LOGIN_PAGINA.html'));
});

// etc, adicione outras rotas conforme necessário

module.exports = publicoRouter;
