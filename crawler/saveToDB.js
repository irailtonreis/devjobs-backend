const mongoose = require('mongoose');

const host = "mongodb+srv://devjobs:devjobs@cluster0-0rqq3.mongodb.net/crawler?retryWrites=true&w=majority"

var vagasSchema = new mongoose.Schema({
  name: String,
  quantity: String,
  date: Date,
})


const vagasModel = mongoose.model("Vagas", vagasSchema);


module.exports = function(item){
  console.log(item);
  const vagas = [];
  
  const vaga = new vagasModel();
  vaga.name = item.name;
  vaga.quantity = item.quantity;
  vaga.date = new Date;
  
  vagas.push(vaga);
 

  mongoose.connect(host,{
    useNewUrlParser: true,
   useUnifiedTopology: true,
  }, (error)=> {
    if(!error){

      vagasModel.insertMany(vagas)
      .then( async(docs)=>{
        console.log('Opração realizada com sucesso!');
        mongoose.disconnect();
      }).catch((error)=>{
        console.log(error);
        process.exit(2);
      })

    }else{
      console.log(error);
      process.exit(1);
    }
  })
}