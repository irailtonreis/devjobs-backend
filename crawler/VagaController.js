const Vaga = require('./Vaga');
const Connection = require('./Connection');

class VagaController {
  async store(item){

  const vagas = [];
  
  const vaga = new Vaga();
  vaga.name = item.name;
  vaga.quantity = item.quantity;
  vaga.date = new Date;
  
  vagas.push(vaga);

  try {
   await Connection.connect(Vaga.create(vagas));
   console.log('Dados salvo com sucesso!');
  } catch (error) {
    console.log(error);
  }
 
  }
}

module.exports = new VagaController();