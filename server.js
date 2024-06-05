require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes/index');
const publicoRouter = require('./routes/publico');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Middleware para servir arquivos estáticos da pasta frontEnd
app.use(express.static(path.join(__dirname, 'frontEnd')));

app.use('/', publicoRouter);
app.use('/api', router);

// Porta do servidor
const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
    console.log('Express server listening on port', port);
});
