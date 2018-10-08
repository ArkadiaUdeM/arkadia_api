const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Paquete = new Schema({
  nombre: String,
  descripcion: String,
  proyecto: {
    type: ObjectId,
    ref: 'Proyecto',
    required: true,
  },
}, { collection: 'sh_paquetes'})

Paquete.virtual('url').get(function() {
  return '/paquetes/' + this._id
})

module.exports = mongoose.model('Paquete', Paquete)