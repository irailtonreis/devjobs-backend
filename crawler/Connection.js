const mongoose = require('mongoose');

class Connection {
 
  constructor(){
    this.connect();
  }

  connect(){
    const host = "mongodb+srv://devjobs:devjobs@cluster0-0rqq3.mongodb.net/crawler?retryWrites=true&w=majority"

    mongoose.connect(host,{
      useNewUrlParser: true,
     useUnifiedTopology: true,
    }); 
  }

}


module.exports = new Connection();



