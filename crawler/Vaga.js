const mongoose = require('mongoose');

var vagaSchema = new mongoose.Schema({
  name: String,
  quantity: String,
  date: Date,
})

module.exports = mongoose.model("Vaga", vagaSchema);