const carrosRouter = require('express').Router();
const controller = require('../../controllers/pgs/carros');


carrosRouter.get('/testeConn', controller.testConnection); //le todos

//CRUD para carros
carrosRouter.get('/', controller.getAll); //le todo
carrosRouter.get('/carros/:id', controller.getById); //le um carro
carrosRouter.post('/create', controller.create); //criar um carro
carrosRouter.put('/update', controller.update); //atualizar um carro
carrosRouter.delete('/delete/:id', controller.delete); //apagar um carro

module.exports = carrosRouter;
