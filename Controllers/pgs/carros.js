const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()



//Testa a ligação
exports.testConnection = async (req, res) => {
    try {
        await prisma.$connect();
        res.send('Ligação bem-sucedida com o PostgreSQL!');
      } catch (error) {
        res.send('Erro ao conectar ao PostgreSQL:', error);
      } finally {
        await prisma.$disconnect();
      }
}
//Devolve todos os carros
exports.getAll = async (req, res) => {
  try {
    const carros = await Carro.find().exec();
    res.status(200).json(carros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Devolve um carro indicado por um id
exports.getById = async (req, res) => {
  //apanha o id enviado
  const id = req.params.id*1;
  try {
      //procura o carro com o id
      const response = await prisma.Carros.findUnique({
          where: {
              id: id,
          },
      })
      //devolve o carro
      res.status(200).json(response)
  } catch (error) {
      res.status(404).json({ msg: error.message })
  }
}

