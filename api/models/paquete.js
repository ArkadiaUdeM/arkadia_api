const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const Paquete = new Schema({
  nombre: String,
  descripcion: String,
  proyecto: {
    type: ObjectId,
    ref: 'Proyecto',
    required: true,
  },
}, { collection: 'sh_paquetes'})


module.exports = mongoose.model('Paquete', Paquete)