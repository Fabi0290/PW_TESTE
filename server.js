require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const carrosRouter = require('./routes/local/carros')
const router = require('./routes/local/index');
const pgsRouter = require('./routes/pgs');
const publicoRouter = require('./routes/publico');
const privadoRouter = require('./routes/privado');  
const app = express();
app.use(bodyParser.json());
app.use(cors());


// Middleware para servir arquivos estáticos da pasta frontEnd
app.use(express.static(path.join(__dirname, 'frontEnd')));

app.use('/api', router);
//app.use('/api/pgs', carrosRouter);
app.use('/', publicoRouter);
app.use('/api/pgs/carros', carrosRouter);
app.use('/privado', privadoRouter);
app.use('/pgs', pgsRouter);

// Porta do servidor
const port = process.env.SERVER_PORT || 4242;
app.listen(port, () => {
    console.log('Express server listening on port', port);
});
